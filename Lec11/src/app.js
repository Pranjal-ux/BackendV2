// Server ko create karna
const express = require('express')
const app = express()

app.use(express.json())

const notes = [];
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "notes created successfully "
    })

})

//Get api
app.get('/notes',((req,res)=>{
res.status(200).json({
    message:"notes fetch  succssfully",
    notes:notes
})

}))

module.exports = app