//ReadModule
const express = require("express")
const dotenv = require("dotenv")

//Readdotenv
dotenv.config()
const HOST_NAME = process.env.HOST_NAME
const PORT_NUMBER = process.env.PORT_NUMBER

console.log(HOST_NAME)
console.log(PORT_NUMBER)

//CreateServer
const app = express()

//GetRequest
app.get("/", (req, res) => {
    //Request
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    //Response
    res.send("KONNICHIWA!")
})

//Listen
app.listen(PORT_NUMBER, HOST_NAME, () => {
    console.log(HOST_NAME)
    console.log(PORT_NUMBER)
    console.log("Standing by...")
})