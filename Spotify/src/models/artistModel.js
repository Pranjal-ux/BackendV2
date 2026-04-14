const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    }
})
const artistModel = mongoose.model("artist", musicSchema)

module.exports = artistModel;