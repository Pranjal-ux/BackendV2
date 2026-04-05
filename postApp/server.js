require('dotenv').config()
const app = require('./src/app')
const db = require("./src/db/post.db")

db().then(() => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
});