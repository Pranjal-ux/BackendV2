const mongoose = require("mongoose");

let connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://pranjal:kEatBhrbMNSyDKJf@cluster0.v3jwstc.mongodb.net/Omega",
  );


  console.log("Connent to Db")
};
module.exports= connectDb
