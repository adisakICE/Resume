
module.exports = {
    HOST: "db",
    // 192.168.64.3
    USER: "root",
    PASSWORD: "admin",
    DB: "resume",
    dialect: "mysql",
    
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };