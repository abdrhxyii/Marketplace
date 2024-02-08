const express = require('express')
const sequlizeConfigs = require('./Config/DatabaseConfig')
const app = express()
const PORT = 4000


app.listen(PORT, (err) => {
    if (err){
        console.log(`${err} while running the server`)
    } else {
        console.log(`Server running on ${PORT}`)
    }
})

sequlizeConfigs.authenticate()
    .then(() => {
        console.log("Connected to db")
    }) .catch((err) => {
        console.log("Error occurred while connecting to db", err)
    })