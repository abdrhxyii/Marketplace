const AuthModal = require('../Modals/Auth');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');

const secretKey = '90181323484392625575ba0a8f264a6ec041df66d13d955fb44e66cd67dd6d9c'
exports.RegisterUser = async (request, response) => {
    const { email, password, first_name, last_name} = request.body;
    try {
        const user = await AuthModal.findOne({where: {email: email}})
        
        if (user){
            response.status(401).json({message: "User already exist"})
        } else if (!user){
            // const hashed = bcrypt.hashSync(password, 10)
            const newUser = await AuthModal.create({
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name
            })
            response.status(200).json({message: "Registerred successfully", newUser})
        }

    } catch (error) {
        response.status(400).json({ message: "Error occurred while signing up", error: error.message });
    }
};

exports.LoginUser = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await AuthModal.findOne({where: {email: email}})


        if (!user){
            response.status(404).json({message: "The provided email address doesn't exist"})
        } else if (user && password === user.password){
            const jwtSecretKey = crypto.randomBytes(32).toString('hex');
            console.log(jwtSecretKey, "jwtSecretKey");
            const jwtToken = jwt.sign({id: user.id}, secretKey, { expiresIn: '1h' })
            response.status(200).json({message: "Login success", Token: jwtToken, id: user.id})
        } else {
            response.status(401).json({message: "Incorrect password"})
        }

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Error occurred while logging in", error: error.message });
    }
};

// 
exports.createUserProfile = async (request, response) => {
    const {first_name, last_name} = request.body
    const id = request.params.id

    try{
        const user = await AuthModal.findByPk(id)
        console.log(user, "user from createUserProfile")
        // if(user){

        // }

    } catch(error){
        response.status(400).json({Error: "Error occurred while creating user profile", error})
    }
}

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