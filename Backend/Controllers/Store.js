const Product = require('../Modals/Product');
const Store = require('../Modals/Store');
const Auth = require('../Modals/Aut')

const CreateStore = async (request, response) => {
    const {store_owner, store_Name,  store_Description} = request.body;
    // const Userid = request.params.Userid
    try{
        const store =  await Store.create({
            store_Name,
            store_Description
        })

    } catch(error){
        response.status(400).json({message: "Error occurred while creating the store", Error: error})
    }
}