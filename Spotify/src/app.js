const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
const userModel = require('./models/userModel')
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send("hello")
})
const user = userModel.create({
    
})




module.exports = app;
