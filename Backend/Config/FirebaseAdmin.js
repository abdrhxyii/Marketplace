const admin = require('firebase-admin')
const serviceAccount = require('./ecommerce-24e6d-firebase-adminsdk-l2jah-7911fd7cf3.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-24e6d-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: process.env.storageBucket,
});

const db = admin.firestore();
const storage = admin.storage();
const message = admin.messaging();

module.exports = { admin, db, storage, message };