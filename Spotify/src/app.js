const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
const userModel = require('./models/userModel')
const authRoutes = require('./routers/authRoute')
const musicRouter = require('./routers/musicRouter')

app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/music',musicRouter)





module.exports = app;
