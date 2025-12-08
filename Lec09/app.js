const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./model/user')
app.use(express.json())
app.set("view engine", "ejs")
app.set(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.get("/", ((req, res) => {
    res.render("index")
}))
app.post("/create", async (req, res) => {
    try {
        let { username, age, password, email } = req.body;

        let user = await userModel.create({
            username,
            email,
            age,
            password
        });

        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.listen(3000)