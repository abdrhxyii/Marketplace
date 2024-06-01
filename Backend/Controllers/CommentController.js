// const {Blog, Comment} = require('../Associations')
const Blog = require('../Modals/BlogModal')
const Comment = require('../Modals/CommentModal')

exports.CreateComment = async (request, response) => {
    const id = request.params.id; // blogs id
    const {first_name, last_name, comment_des} = request.body;

    try {
        const blog = await Blog.findByPk(id)
        if (blog){
            const comments = await Comment.create({
                first_name: first_name,
                last_name: last_name,
                BlogId: id,
                comment_des: comment_des
            })
            response.status(200).json({message: "Comment Created", comments})
        } else {
            response.status(404).json({message: "Blog Not Found"})
        }

    } catch (error) {
        response.status(500).json({message: "Error Occurred While Creating commenting"})
    }
}