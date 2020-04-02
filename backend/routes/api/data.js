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
    .route("/getData")
    .get(() => { })
router
    .route("/barGraph")
    .post()
    .get()

module.exports = router;