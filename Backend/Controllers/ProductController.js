const productModel = require('../Modals/ProductModal');
const categoryModal = require('../Modals/CategoryModal');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 112.5 }); 
const {PutObjectCommand, GetObjectCommand, DeleteObjectCommand} = require('@aws-sdk/client-s3')
const s3Client = require('../Configurations/AwsS3Configuration')

exports.createProduct = async (request, response) => {
    const { name, description, price, categoryId } = request.body;
    const imageFile = request.file;

    if (!imageFile) {
        return response.status(400).json({ message: "Image file is required" });
    }

    try {
        const category = await categoryModal.findByPk(categoryId);
        if (!category) {
            return response.status(404).json({ message: "Category Not Found" });
        }

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileKey = `productobject/${uniqueSuffix}-${imageFile.originalname}`;
        // console.log(fileKey, "fileKey");

        const uploadparams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: fileKey,
            Body: imageFile.buffer,
            ContentType: imageFile.mimetype,
        };
        // console.log(uploadparams, "uploadparams")

        const command = new PutObjectCommand(uploadparams);
        await s3Client.send(command);

        const product = await productModel.create({
            image: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${fileKey}`,
            name: name,
            description: description,
            price: price,
            categoryId: category.id
        });

        return response.status(201).json({ message: "Product created", product });

    } catch (error) {
        console.error("Error occurred:", error);
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
            let recommendations = cache.get('recommendations')
            if (!recommendations){
                const allproducst = await productModel.findAll()
                recommendations = allproducst.sort( () => 0.5 - Math.random()).slice(0,6)
                cache.set("recommendations", recommendations)
            }
            response.status(200).json({product, recommendations})
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
