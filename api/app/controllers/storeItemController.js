const db = require("../models");
const config = require("../config/authConfig");
const storeItem = db.storeItem;
const Op = db.Sequelize.Op;
exports.preview = (req, res) => {
    storeItem.findAll().then(data => {
        res.status(200).send({ data });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};