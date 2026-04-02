const mongoose = require('mongoose')

let connectDb = async () => {
    await mongoose.connect(process.env.MOGODB_CONNENCTION_URL)
}
console.log("Database connected successfully ");


module.exports = connectDb;