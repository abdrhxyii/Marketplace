const AuthModal = require('../Modals/UserModal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

exports.RegisterUser = async (request, response) => {
    const { email, password, first_name, last_name, role } = request.body;
    try {
        const existingUser = await AuthModal.findOne({ where: { email: email } });

        if (existingUser) {
            return response.status(409).json({ message: "User already exists" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const verificationtoken = crypto.randomBytes(64).toString('hex')

            const newUser = await AuthModal.create({
                email: email,
                password: hashedPassword,
                first_name: first_name,
                last_name: last_name,
                role: role,
                verificationToken: verificationtoken
            });

            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.GOOGLE_EMAIL_ADDRESS,
                    pass: process.env.GOOGLE_EMAIL_APP_PASSWORD
                }
            });

            const mailOptions = {
                from: process.env.GOOGLE_EMAIL_ADDRESS,
                to: `${email}`,
                subject: 'Email Verification',
                html: `<h2>Thank you for registering on our site</h2>
                       <p>Please click on the following link to verify your email:</p>
                       <a href="http://${request.headers.host}/auth/verify-email?token=${verificationtoken}">Verify Email</a>`
            };

            await transporter.sendMail(mailOptions)
            response.status(201).json({ message: "Registered successfully, Please check your mail to verify your email address", newUser});
        }
    } catch (error) {
        response.status(500).json({ message: "Error occurred while signing up", error: error.message });
    }
};

exports.emailVerification = async (request, response) => {
    const token = request.query.token;
    try{
        const user = await AuthModal.findOne({where: {verificationToken: token}})
        if (user.isEmailVerified === true){
            return response.status(200).json({message: "Email address already verified successfully, please login to continue"})
        } else {
            user.isEmailVerified = true
            await user.save()
            return response.status(200).json({message: "Email address successfully Verified"})
        }
    }
    catch (error){
        response.status(500).json({ message: "Error occurred while verifying the email addresss", error: error.message });
    }

}

exports.LoginUser = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await AuthModal.findOne({ where: { email: email } });

        if (!user) {
            return response.status(404).json({ message: "The provided email address doesn't exist. Please register to continue" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const payload = {
                id: user.id,
                role: user.role
            };

            const jwtToken = jwt.sign(payload, process.env.JWT_SECRET_KEY);

            return response.status(200).json({ message: "Login success", Token: jwtToken, id: user.id, role: user.role });
        } else {
            return response.status(401).json({ message: "Incorrect password" });
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Error occurred while logging in", error: error.message });
    }
};

exports.getUserProfile = async (request, response) => {
    const id = request.params.id
    try{
        const UserDetail = await AuthModal.findAll({where: {id: id}});
        if (UserDetail.length > 0){
            response.status(200).json({message: UserDetail})
        } else {
            response.status(404).json({message: "No user found"})
        }
        
    } catch (error) {
        console.log(error)
        response.status(400).json({message: "An Error occurred while retrieving the user profile"})
    }
}