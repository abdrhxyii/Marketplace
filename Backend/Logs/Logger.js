const {createLogger, format, transports} = require('winston')

const Logger = createLogger({
    format: format.json(),
    transports: [ 
        new transports.Console(),
        new transports.File({filename: 'info.log', level:'info'}),
        new transports.File({filename: 'error.log', level: 'error'})
    ],

})

module.exports = Logger