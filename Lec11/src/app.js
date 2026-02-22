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
app.get('/notes', ((req, res) => {
    res.status(200).json({
        message: "notes fetch  succssfully",
        notes: notes
    })

}))

//Delete api
app.delete('/notes/:index', ((req, res) => {
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: "Api deleted successfully"
    })
}))
app.patch('/notes/:index', ((req, res) => {
    const index = req.params.index
    const discription = req.body.discription
    notes[index].discription = discription;
    res.status(200).json({
        message: "node updated successfully"
    })
}))


module.exports = app