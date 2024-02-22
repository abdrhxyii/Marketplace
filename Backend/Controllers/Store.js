const Product = require('../Modals/Product');
const Store = require('../Modals/Store');
const Auth = require('../Modals/Auth')
const AuthMiddleware = require('../Middleware/Auth')

exports.CreateStore = async (request, response) => {
    const { store_owner, store_Name, store_Description } = request.body;
    const { userId } = request.params;

    try {
        // AuthMiddleware handles the authentication logic and attaches userId to request
        await AuthMiddleware(request, response, () => {});

        // Ensure that the authenticated user's ID matches the provided userId
        if (request.userId === userId) {
            const store = await Store.create({
                user_id: userId,
                store_Name,
                store_Description
            });

            console.log(store);
            response.status(200).json({ message: "Store created Successfully", store });
        } else {
            response.status(403).json({ message: "Unauthorized. You can only create stores for your own user." });
        }
    } catch (error) {
        // console.log(error);
        response.status(400).json({ message: "Error occurred while creating the store", Error: error });
    }
};