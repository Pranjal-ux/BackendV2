const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")

//Register controller.....
async function registerUser(req, res) {

    const { username, email, password, role = "user" } = req.body;
    console.log(req.body)

    const isUserExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (isUserExist) {
        res.status(409).json({
            message: "User Already exist"
        })
    }
    const hash = await bcrypt.hash(password, 10)
    const user = await userModel.create({
        username,
        password: hash,
        email,
        role
    })
    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)
    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            email: user.email,
            username: user.username,
            role: user.role

        }
    })
}
// loging Controller...
async function loginUser(req, res) {
    const { username, email, password } = req.body
    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
   
    if (!user) {
        return res.staus(401).json({
            message: "User not exist"
        })
    }
    const ispasswordValid = await bcrypt.compare(password, user.password)
    if (!ispasswordValid) {
        return res.status(401).send("Wrong Password")
    }
    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)
    res.status(200).json({
        message: "User Logged in sucessfully",
        user: {
            id: user._id,
            email: user.email,
            password: user.password,
            role: user.role


        }
    })
}

module.exports = { registerUser, loginUser }