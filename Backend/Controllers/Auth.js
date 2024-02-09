const sequelize = require('../Modals/Auth')
const admin = require('firebase-admin')

exports.RegisterUser = (request, resonse) => {
    const {email, password} = request.body;
    
}