const productModel = require('../Modals/ProductModal');
const categoryModal = require('../Modals/CategoryModal')

exports.createProduct = async (request, response) => {
    const { name, description, price, categoryId } = request.body;
    const imageFile = request.file;

    if (!imageFile) {
        return response.status(400).json({ message: "Image file is required" });
    }
    try {
        const category = await categoryModal.findByPk(categoryId)
        if (!category){
            response.status(404).json({message: "Category Not Found"})
        }
        const product = await productModel.create({
            image: imageFile.filename,
            name: name,
            description: description,
            price: price,
            categoryId: category.id
        });
        return response.status(200).json({ message: "Product created", product });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Error occurred when creating the product" });
    }
};

exports.getProductsByCategory = async (request, response) => {
    const id = request.params.id
    try{
        const category = await categoryModal.findByPk(id)
        if (!category){
            response.status(404).json({message: "Category Not Found"})
        }

        const product = await productModel.findAll({where: {categoryId: id}})
        if (!product){
            response.status(404).json({message: "Product Not Found"})
        } else {
            response.status(200).json({categoryname: category.name, data: product})
        }

    }catch(error){
        response.status(500).json({message: "Error ccurred while retrieving the products by category"})
    }
}

exports.GetProductById = async (request, response) => {
    const id = request.params.id
    try{
        const product = await productModel.findByPk(id)
        if (!product){
            response.status(404).json({message: "Product Not Found"})
        } else {
            response.status(200).json(product)
        }

    }catch(error){
        response.status(500).json({message: "Error occurred while retrieving the products"})
    }
}

exports.getAllProducts = async (request, response) => {
    try{
        const product = await productModel.findAll()
        if (!product){
            response.status(404).json({message: "Product Not Found"})
        } else {
            response.status(200).json({data: product})
        }
    }catch(error){
        response.status(500).json({message: "Error ccurred while retrieving the products by category"})
    }
}
