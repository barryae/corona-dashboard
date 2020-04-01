const router = require("express").Router();
const db = require("../models");

router
    .route("/")
    .post(
        fetch('https://covid19api.herokuapp.com/')
            .then(res => { return res.json })
            .then(data => {
                db.Data.create(data)
            })
    )
    .get(db.Data.findById(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err });
        }))

router
    .route("/barGraph")
    .post()
    .get()

module.exports = router;