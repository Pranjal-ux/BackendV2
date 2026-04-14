const artistModel = require('../models/artistModel')
const jwt = require("jsonwebtoken")

async function createMusic(req, res) {

    const token = req.cookie.token;
    if (!token) {
        return res.status(401).json({message:"Unauthorised user"});
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
           if(decode.role!="artist"){
            return res.status(401).json({message:"you don't have access to create music"})
           }
    } catch (err) {
        return res.status(401).json({})
    }

}