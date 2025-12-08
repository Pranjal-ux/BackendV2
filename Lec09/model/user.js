const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/authverification')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
    let userSchema = mongoose.Schema({
        username : String,
        email:String,
        password:String,
        age:Number
    })
module.exports = mongoose.model("user",userSchema)
    

