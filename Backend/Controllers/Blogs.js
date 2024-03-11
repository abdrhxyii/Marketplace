const BlogModel = require('../Modals/Blog');
const multer = require('multer')
const upload = multer({ dest: "images/" });

const path = require('path')

// const storage = multer.diskStorage({
//     destination: path.join(__dirname, '../Public/uploads'),
//     filename: (request, file, callback) => {
//         callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//         console.log(callback, "callback")
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 }
// }).single('image')

exports.createBlog = async (request, response) => {
    upload(req,res,err => {
        if(err){
            return res.status(200).json({message: err.message})
        }
    })

    const {title, description} = request.body
    const imagePath = request.file  ? '/uploads/' + request.file.filename : null;
    const id = request.params.id

    try {
        const newPost = await BlogModel.create({
            image: imagePath,
            title: title,
            description: description,
            userId: id
        })

        return response.status(200).json({message: "Post created successfully", newPost})

    }catch(error){
        console.log(error)
        response.status(400).json({message: "Error occurred while creating blog", error})
    }
}

exports.getBlogsByUser = async (request, response) => {
    const id = request.params.id

    try{
        const blogs = await BlogModel.findAll({
            where: {userId: id}
        })
        if (!blogs){
            response.status(401).json({message: "No blogs found for this user"})
        } else {
            response.status(200).json({data: blogs})
        }
    } catch(error){
        console.log(error)
        response.status(400).json({message: "Error occurred while retrieveing the blog", error})
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