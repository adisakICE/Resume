module.exports = (sequelize, Sequelize) => {
    const storeItem = sequelize.define("storeItem", {
      name: {
        type: Sequelize.STRING(100)
      },
      description:{
        type : Sequelize.STRING(5000)
      },
      url:{
        type : Sequelize.STRING(5000)
      },
      price:{
        type : Sequelize.INTEGER
      },
      currency:{
        type: Sequelize.STRING(100)
      },
      supportLanguage:{
        type : Sequelize.STRING(100)
      },
      brand:{
        type : Sequelize.STRING(100)
      },
      vacuum:{
        type : Sequelize.STRING(100)
      },
      camera:{
        type : Sequelize.STRING(100)
      },
     
      voice:{
        type : Sequelize.STRING(100)
      }
    });
  
    return storeItem;
  };