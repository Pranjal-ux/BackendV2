const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    Postdata: String,
    user: [
        {
              type: mongoose.Schema.Types.ObjectId,
               ref: 'user'
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('post', PostSchema)