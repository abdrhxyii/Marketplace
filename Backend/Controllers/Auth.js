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

        const validPassword = await bcrypt.compareSync(password, userRecord.password);

        if (!validPassword) {
            return response.status(401).json({ message: "Incorrect password" });
        }

        if (!userRecord.emailVerified) {
            return response.status(403).json({ message: "Please, verify your email address" });
        }

        const token = await admin.auth().createCustomToken(userRecord.uid);
        response.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Error occurred while logging in", error: error.message });
    }
};

