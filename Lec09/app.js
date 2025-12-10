const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
app.use(express.json())
app.set("view engine", "ejs")
app.set(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.get("/", ((req, res) => {
    res.render("index")
}))
app.post("/create", async (req, res) => {
    let { username, age, password, email } = req.body;
    bcrypt.hash(password, 10, async function (err, hash) {
        let user = await userModel.create({
            username,
            email,
            age,
            password: hash
        });
        let token = jwt.sign({ email }, 'secret')
        res.cookie("token", token)
        res.send(user);
    })
});
app.get("/login", ((req, res) => {
    res.render('login')
}))
app.post('/login', async function (req, res) {
    let loogedUser = await userModel.findOne({ email: req.body.email })
    if (!loogedUser) res.send('something went wrong')
    bcrypt.compare(req.body.password, loogedUser.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: loogedUser.email }, 'secret')
            res.cookie("token", token)
            res.send("Welcome");
        }
        else res.send("something went wrong")
    })
})
app.get("/logout", ((req, res) => {
    res.cookie("token", '')
    res.redirect('/')
}))
app.listen(3000)