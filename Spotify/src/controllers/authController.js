const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

async function regiseterUser(req, res) {

    const { username, email, password, role = "user" } = req.body;

    const isUserExist = await userModel.find({
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
    const user = await userModel.create({
        username,
        password,
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

module.exports = regiseterUser