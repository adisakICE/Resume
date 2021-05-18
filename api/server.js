const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();

var corsOptions = {
  origin: "http://localhost:8100"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
const storeItem = require('./app/createData/storeItem')

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  storeItem.createStoreItem()

});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
require('./app/routes/storeItem')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8100;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});

