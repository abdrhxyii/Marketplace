const porductModel = require('../Modals/Product');

exports.createProduct = async (request, response) => {
    const {name, description, location, delivery_info, shipping_details, available_quantity} = request.body;
    const {image} = request.body
    try{
        const product = await porductModel.create({
            image: 'images/products/' + image.filename,
            name: name,
            description: description,
            location: location,
            delivery_info: delivery_info,
            shipping_details: shipping_details,
            available_quantity: available_quantity
        })
        return response.status(200).json({message: "Product created", product})

    }catch(error){
        console.log(error)
        return response.status(500).json({message: "Error occurred when creating the product"})
    }
}