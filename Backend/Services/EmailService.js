const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'softwaretestingar6@gmail.com',
            pass: 'asdfghjkl@7'
        }
    }
);

const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('../Views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('../views/'),
};

transporter.use('compile', hbs(handlebarOptions))

