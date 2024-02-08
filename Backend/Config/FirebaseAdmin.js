const admin = require('firebase-admin')

const serviceAccount = require('./ecommerce-24e6d-firebase-adminsdk-l2jah-7911fd7cf3.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
