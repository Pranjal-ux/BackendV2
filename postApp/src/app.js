const express = require('express')
const app = express();
const db = require("./db/post.db")
const postModel = require("./models/post.model")
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() })

app.use(express.json())
app.post("/create-post", upload.single("image"), async (req, res) => {
    console.log(req.body)
    console.log(req.file)
})

module.exports = app;