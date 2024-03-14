const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
// JWT for protecting the routes

exports.verifyToken = (request, response, next) => {
    const authorizationHeader = request.headers['authorization'];

    if (!authorizationHeader) {
        return response.status(403).json({ message: 'A token is required for authentication' });
    }

    // Split the Authorization header to extract the token
    const tokenParts = authorizationHeader.split(" ");

    if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== 'bearer') {
        return response.status(403).json({ message: 'Invalid token format' });
    }

    const token = tokenParts[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        request.user = decoded;
        next();
    } catch (err) {
        return response.status(401).send('Invalid Token');
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
