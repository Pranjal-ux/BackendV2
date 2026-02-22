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
// app.get("/notes", (req, res) => {
//     res.status(200).json({
//         message: "notes fetch  succssfully",
//         noteModel: noteModel,
//     });
// });

// //Delete api
// app.delete("/notes/:index", (req, res) => {
//     const index = req.params.index;
//     delete notes[index];
//     res.status(200).json({
//         message: "Api deleted successfully",
//     });
// });
// app.patch("/notes/:index", (req, res) => {
//     const index = req.params.index;
//     const  description = req.body. description;
//     notes[index].discription =  description;
//     res.status(200).json({
//         message: "node updated successfully",
//     });
// });

module.exports = app;
