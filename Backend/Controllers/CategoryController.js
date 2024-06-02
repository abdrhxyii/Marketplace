const CategoryModal = require('../Modals/CategoryModal')

exports.CreateCategory = async (request, response) => {
    const {name} = request.body
    try{
        const existingcategory = await CategoryModal.findOne({where: {name: name}})
        if(!existingcategory){
            await CategoryModal.create({
                name: name
            })
            response.status(201).json({message: "Category Created"})
        } else {
            response.status(409).json({message: "There cannot have same category names"})
        }

    } catch(error){
        response.status(500).json({message: "Error ccurred while creating the category"})
    }
}

exports.GetAllCategory = async (request, response) => {
    try{
        const categories = await CategoryModal.findAll()
        if (categories){
            response.status(200).json(categories)
        } else {
            response.status(404).json("No Category Found")
        }
    } catch (error) {
        response.status(500).json({message: "Error ccurred while retrieving the category"})
    }
}