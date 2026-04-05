const mongoose = require('mongoose')

let connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL)
        console.log("Database connected successfully ");
    }
    catch (error) {
        console.log("Db Connection error", error)
    }
}


module.exports = connectDb;