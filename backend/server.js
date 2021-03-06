const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect("mongodb://localhost/covid", { useNewUrlParser: true })

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
