// Server ko create karna
const express = require("express");
const app = express();
const noteModel = require("../Models/notes");

app.use(express.json());

app.post("/notes", async (req, res) => {
    const note = await noteModel.create({
        title: req.body.title,
        description: req.body.description,
    });

    res.status(201).json({
        message: "Note created successfully",
        note: note
    });
});;

//Get api
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "notes fetch  succssfully",
        notes: notes,
    });
});

//Delete api
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const notes = await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "node deleted successfully",
    });
});
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
     await noteModel.findOneAndUpdate({ _id: id }, { description: description })
    res.status(200).json({
        message: "node updated successfully",
        
    });
});

module.exports = app;
