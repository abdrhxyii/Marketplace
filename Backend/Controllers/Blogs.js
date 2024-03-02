const BlogModel = require('../Modals/Blog');

exports.createBlog = async (request, response) => {
    const {image, title, description} = request.body

    try {
        const newPost = await BlogModel.create({
            image: image,
            title: title,
            description: description
        })
        return response.status(200).json({message: "Post created successfully", newPost})

    }catch(error){
        console.log(error)
        response.status(400).json({message: "Error occurred while creating blog", error})
    }
}

exports.getAllBlogs = async (request, response) => {
    try{
        const blogs = await BlogModel.findAll()
        if(!blogs){
            response.status(201).json({message: "No blogs available"})
        }else {
            response.status(200).json({data: blogs})
        }
    }catch(error){
        response.status(400).json({message: "Error occurred while retrieving the blogs", error})
    }
}

exports.getBlog = async (request, response) => {
    const id = request.params.id
    try{
        const blog = await BlogModel.findOne({where: {id: id}});
        if (blog) {
            response.status(200).json({data: blog})
        } else {
            response.status(201).json({message: "Blog not found"})
        }

    } catch(error){
        response.status(400).json({message: "Error ocurred while retrieving the blog"})
    }
}