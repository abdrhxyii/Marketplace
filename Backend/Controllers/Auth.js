const AuthModal = require('../Modals/Auth');
const { admin } = require('../Config/FirebaseAdmin');
const bcrypt = require('bcrypt')

exports.RegisterUser = async (request, response) => {
    const { email, password, first_name, last_name } = request.body;

    try {
        const newUserinFirebase = await admin.auth().createUser({
            email: email, 
            password: password 
        });

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUserinSequelize = await AuthModal.create({
            uid: newUserinFirebase.uid,
            email: newUserinFirebase.email,
            password: hashedPassword,
            first_name,
            last_name
        });

        const emailVerificationLink = await admin.auth().generateEmailVerificationLink(newUserinFirebase.email);
        
        response.status(200).json({ message: "Signed up successfully", data: newUserinSequelize, Verify: emailVerificationLink });

    } catch (error) {
        response.status(400).json({ message: "Error occurred while signing up", error: error.message });
    }
};

exports.LoginUser = async (request, response) => {
    const { email, password } = request.body;

    try {
        const userRecord = await admin.auth().getUserByEmail(email);

        if (!userRecord) {
            return response.status(401).json({ message: "Email address doesn't exist" });
        }

        const userFromDatabase = await AuthModal.findOne({ where: { uid: userRecord.uid } });

        if (userRecord.emailVerified) {
            userFromDatabase.isEmailVerified = true;
            await userFromDatabase.save();
        }

        const validPassword = await bcrypt.compareSync(password, userFromDatabase.password);

        if (!validPassword) {
            return response.status(402).json({ message: "Incorrect password" });
        }

        if (!userRecord.emailVerified) {
            return response.status(403).json({ message: "Please, verify your email address" });
        }

        const token = await admin.auth().createCustomToken(userRecord.uid);

        response.status(200).json({
            message: "Login successful",
            token: token,
            EmailVerificationStatus: userRecord.emailVerified
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Error occurred while logging in", error: error.message });
    }
};

exports.getUserProfile = async (request, response) => {
    const id = request.params.id
    try{
        const UserDetail = await AuthModal.findAll({where: {id: id}});
        if (UserDetail){
            response.status(200).json({message: UserDetail})
        } else {
            response.status(401).json({message: "No user found"})
        }
        
    } catch (error) {
        console.log(error)
        response.status(400).json({message: "An Error occurred while retrieving the user profile"})
    }
}