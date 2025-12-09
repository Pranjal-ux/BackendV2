const express = require('express')
const app = express()
const userModel = require('./model/user')
const PostModel = require('./model/post')

app.get("/", function (req, res) {
    res.send("Hello")
})
app.get("/create", async function (req, res) {
    let user = await userModel.create({
        username: "Pranjal",
        age: 20,
        email: "pranjal3shukla@gmail.com",

    })
    res.send(user)
})
app.get("/post/create", async function (req, res) {
    let post = await PostModel.create({
        Postdata: "This is the post method",
        user: '6937af9d71af9c66363637b0'
    })
    let user = await userModel.findOne({ _id: "6937af9d71af9c66363637b0" })
    user.post.push(post._id)
    await user.save()
    res.send({ post, user })
})


app.listen(3000)