const express = require('express')
const app = express();
app.use("/hello", (req, res) => {
    res.send("hello form america!!!")
})
app.use("/hello/nihao", (req, res) => {
    res.send("Hello! from japan!!!")
})
app.get("/user", (req, res,next) => {
    console.log("Route handler 1....")
    //  res.send("Hello! from user")
    next();

},(req,res)=>{
    console.log("Route handler 2....")
    res.send("Hello! from user 2 ....")
})
app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000.... ")
})