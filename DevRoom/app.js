const express = require('express')
const app = express();
app.use("/hello", (req, res) => {
    res.send("hello form america!!!")
})
app.use("/hello/nihao", (req, res) => {
    res.send("Hello! from japan!!!")
})
app.use("/", (req, res) => {
    res.send("Hello! from server")
})
app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000.... ")
})