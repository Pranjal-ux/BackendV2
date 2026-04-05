const express = require('express')
const app = express();
const db = require("./db/post.db")
const postModel = require("../src/models/post.model")
const multer = require('multer')
const uploadFile = require('./services/storage')


const upload = multer({ storage: multer.memoryStorage() })

app.use(express.json())
app.post("/create-post", upload.single("image"), async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    try {
        const result = await uploadFile(req.file.buffer)
        console.log(result)
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })
        return res.status(201).json({
            message: "Post create sucessfully",
            post: post
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Error creating post",
            error: err.message
        });
    }
})
app.get("/posts", async (req, res) => {
    const posts = await postModel.find();

    return res.status(200).json({
        message: "Api run successfully",
        posts: posts
    })
})

module.exports = app;