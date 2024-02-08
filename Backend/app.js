const express = require('express')

const app = express()

const PORT = 4000

app.listen(PORT, (err) => {
    if (err){
        console.log(`${err} while running the server`)
    } else {
        console.log(`Server running on ${PORT}`)
    }
})
