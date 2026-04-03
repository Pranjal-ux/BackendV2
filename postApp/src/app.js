const express = require('express')
const app = express();
const db = require("./db/post.db")
const postModel = require("./models/post.model")

app.use(express.json())
app.post("/create-post",async(req,res)=>{
    console.log(req.body)
})

module.exports = app;