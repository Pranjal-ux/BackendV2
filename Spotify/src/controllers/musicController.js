const artistModel = require('../models/artistModel')
const jwt = require("jsonwebtoken")

const { uploadFile } = require('../services/storageService')
async function createMusic(req, res) {
    let decoded;
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorised user" });
    }
    try {
         decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role != "artist") {
            return res.status(401).json({ message: "you don't have access to create music" })
        }
    } catch (err) {
        return res.status(401).json({})
    }
    const { title } = req.body
    const file = req.file
    if (!file) {
        return res.status(400).json({ message: "File is required" });
    }

    const result = await uploadFile(file.buffer.toString('base64'))
    try{
    const music = await artistModel.create({
        uri: result.uri,
        title,
        artist: decoded.id
    
    })
       res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })
}catch(err){
    return res.status(401).json({message:"File error"})
}
 
}
module.exports = { createMusic }