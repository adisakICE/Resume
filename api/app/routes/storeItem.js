const { authJwt } = require("../middleware");
const controller = require("../controllers/storeItemController");

module.exports = function (app) {

    app.get("/api/storeItem",
        controller.preview);
};