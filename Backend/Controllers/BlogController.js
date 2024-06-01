const {Blog, Comment} = require('../Associations')

exports.createBlog = async (request, response) => {

    const {title, description} = request.body
    const image = request.file

    try {
        const newPost = await Blog.create({
            image: image.filename,
            title: title,
            description: description,
        })

        return response.status(200).json({message: "Blog created successfully", newPost})

    }catch(error){
        console.log(error)
        response.status(400).json({message: "Error occurred while creating blog", error})
    }
}

exports.getAllBlogs = async (request, response) => {
    try{
        const blogs = await Blog.findAll()
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
        const blog = await Blog.findOne({
            where: {id: id},
            include: [{model: Comment}]
        });
        if (blog) {
            response.status(200).json(blog)
        } else {
            response.status(201).json({message: "Blog not found"})
        }

    } catch(error){
        console.log(error)
        response.status(400).json({message: "Error ocurred while retrieving the blog", Error: error} )
    }
}

exports.deleteBlogs = async (request, response) => {
    const id = request.params.id
    try{
        const blog = await Blog.findOne({where: {id: id}})
        if (!blog){
            response.status(404).json({message: "Blog Not Found"})
        } else {
            await Blog.destroy({where: {id: id}})
            response.status(200).json({message: "Blog Deleted"})
        }
    } catch(error){
        response.status(400).json({message: "Error occurred while deleting the blogs"})
    }
}