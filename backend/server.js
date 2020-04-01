const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect("mongodb://localhost/covid", { useNewUrlParser: true })

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
