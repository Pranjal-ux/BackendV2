const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
const userModel = require('./models/userModel')
const authRoutes = require('./routers/authRoute')
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRoutes)





module.exports = app;
