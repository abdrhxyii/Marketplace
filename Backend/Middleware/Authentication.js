const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
// JWT for protecting the routes
exports.verifyToken = (request, response, next) => {
    const token = request.headers['authorization']
    try{
        if (!token){
            return response.status(400).json({message: "Unauthorized"})
            
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            request.userId = decoded;
            next(); 
        }

    } catch(error){
        return response.status(401).json({message: error})
    }
}


// Object Oriented Programming Style

// const jwt = require('jsonwebtoken');

// class AuthMiddleware {
//     static verifyToken(request, response, next) {
//         const token = request.header('Authorization');
        
//         try {
//             if (!token) {
//                 return AuthMiddleware.handleError(response, 400, "Unauthorized");
//             }

//             const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//             request.userId = decoded.userId;
//             return AuthMiddleware.handleSuccess(response, 200, "Token verified successfully", decoded);
//         } catch (error) {
//             return AuthMiddleware.handleError(response, 401, error.message);
//         }
//     }

//     static handleSuccess(response, status, message, data) {
//         response.status(status).json({ message, data });
//         next();
//     }

//     static handleError(response, status, message) {
//         response.status(status).json({ message });
//     }
// }

// module.exports = AuthMiddleware;
