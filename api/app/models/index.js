const config = require("../config/dbConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases:  '0',
    logging: false,
    timezone : "+07:00",
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci', 
    },
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.storeItem = require("./storeItem.js")(sequelize, Sequelize);


//db.ROLES = ["user", "admin", "visitor"];

module.exports = db;