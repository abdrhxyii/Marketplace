const jwt = require('jsonwebtoken');
// JWT for protecting the routes
exports.verifyToken = (request, response, next) => {
    const token = request.header('Authorization')
    try{
        if (!token){
            return response.status(400).json({message: "Unauthorized"})
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            request.userId = decoded.userId;
            return response.status(200).json({ message: "Token verified successfully", decoded });
        }
    } catch(error){
        return response.status(401).json({message: error})
    }
}