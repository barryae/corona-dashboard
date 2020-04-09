const router = require("express").Router();
const db = require('../../models');
const axios = require('axios')
router
    .route("/update")
    .get(() => {
        axios.get('https://covid19api.herokuapp.com/')
            .then(data => {
                console.log(data.data)
                db.Data.create(data.data)
            })
            .catch(err => { console.log(err) })
    })
router
    .route("/getLatest")
    .get((req, res) => {
        db.Data.find({ latest })
            .then(results => {
                res.json(results)
            })
            .catch(er => {
                res.json({ message: er })
            })
    })
router
    .route("/barGraph")
    .post()
    .get()

module.exports = router;