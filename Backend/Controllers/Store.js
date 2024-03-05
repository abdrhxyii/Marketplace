const Product = require('../Modals/Product');
const Store = require('../Modals/Store');
const Auth = require('../Modals/Auth')

exports.CreateStore = async (request, response) => {
    const { store_Name, store_Description } = request.body;
    const id = request.params.id;

    try {
        const store = await Store.create({
            store_Name: store_Name,
            store_Description: store_Description,
            userId: id
        })
        return response.status(200).json({data: store})
    } catch (error) {
        // console.log(error);
        response.status(400).json({ message: "Error occurred while creating the store", Error: error });
    }
};

exports.getStores = async (request, response) => {
    try{
        const store = await Store.findAll()
        if (!store){
            return response.status(401).json({message: "No stores available"})
        } else {
            return response.status(200).json({data: store})
        }

    } catch (error) {
        return response.status(400).json({message: "Error occurred while retrieving the stores", error})
    }
}

exports.getStoresByUser = async (request, response) => {
    const id = request.params.id
    try{
        const store = await Store.findAll({where: {userId: id}})
        if (!store){
            return response.status(401).json({message: "No store available for the user"})
        } else {
            return response.status(200).json({data: store})
        }

    } catch(error){
        return response.status(400).json({message: "Error occurred while retrieving the store", error})
    }
}