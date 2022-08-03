const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongodb = require('mongodb');
const {showAllNotes} = require("./use-cases/show-all-notes")

const PORT = process.env.PORT || 9000;
const app = express()

app.get("/", (_, res) => res.send("it works..."))

app.get("/notes/all", (req, res) => {
    showAllNotes()
    .then((allNotes) => res.json(allNotes))
    .catch((err) => console.log(err))
})

app.listen(PORT, () => console.log('Server listening on Port',PORT))