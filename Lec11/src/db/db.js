const mongoose = require("mongoose");


let connectDb = async () => {
  await mongoose.connect(process.env.MONGODB_URL
  );


  console.log("Connent to Db")
};
module.exports = connectDb
