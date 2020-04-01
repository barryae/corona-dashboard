const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    confirmed: {
        latest: Number,
        locations: Array
    },
    deaths: {
        latest: Number,
        locations: Array
    },
    latest: {
        confirmed: Number,
        deaths: Number,
        recovered: Number
    },
    recovered: {
        latest: Number,
        locations: Array
    },
    updatedAt: String
})

module.exports = mongoose.model("Data", DataSchema)