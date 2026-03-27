const mongoose = require('mongoose')

async function connectDb() {
    try{
await mongoose.connect(process.env.MONGO_URL)
console.log("DataBase connected successully")
    }
    catch(error){
    console.log("Database Connenection error",error)      
    }
}

module.exports = connectDb;