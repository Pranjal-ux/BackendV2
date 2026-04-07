require('dotenv').config();
const app = require('./src/app')
const db = require("./src/db/database")
db();
app.listen(3000, () => {
    console.log("Server is running")
})