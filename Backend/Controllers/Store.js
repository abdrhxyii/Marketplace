const Product = require('../Modals/Product');
const Store = require('../Modals/Store');
const Auth = require('../Modals/Auth')
const AuthMiddleware = require('../Middleware/Auth')

exports.CreateStore = async (request, response) => {
    console.log(request, "request")
    const { store_owner, store_Name, store_Description } = request.body;
    const userId = request.params.userId;

    try {
        if (userId !== request.userId){
            response.status(400).json({message: "Forbidden"})
        } else {
            const newStore = await Store.create({
                user_id: userId,
                store_owner: store_owner,
                store_Name: store_Name,
                store_Description: store_Description
            })
            response.status(200).json({message: "Store has been created successfully!", newStore})
        }

    } catch (error) {
        // console.log(error);
        response.status(400).json({ message: "Error occurred while creating the store", Error: error });
    }
};