// Firebase for protecting the routes
const admin = require('firebase-admin');

const isAuthenticate = async (request, response, next) => {
  const idToken = request.header('Authorization');

  try {
    if (!idToken) {
      return response.status(401).json({ message: 'Unauthorized' });
    }
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    request.userId = decodedToken.userId; 
    next(); 
  } catch (error) {
    return response.status(401).json({ message: 'Unauthorized', error: error.message });
  }
};

module.exports = isAuthenticate;
