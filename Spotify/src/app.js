const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
const userModel = require('./models/userModel')
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send("hello")
})





module.exports = app;
