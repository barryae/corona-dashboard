const router = require("express").Router();
const db = require("../models");

router
    .route("/")
    .post(db.Data.create(req.body))
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