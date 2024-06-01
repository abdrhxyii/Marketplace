const AuthModal = require('../Modals/UserModal');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.RegisterUser = async (request, response) => {
    const { email, password, first_name, last_name, role } = request.body;
    try {
        const existingUser = await AuthModal.findOne({ where: { email: email } });

        if (existingUser) {
            return response.status(401).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await AuthModal.create({
            email: email,
            password: hashedPassword,
            first_name: first_name,
            last_name: last_name,
            role: role
        });

        response.status(200).json({ message: "Registered successfully", newUser });
    } catch (error) {
        response.status(400).json({ message: "Error occurred while signing up", error: error.message });
    }
};

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