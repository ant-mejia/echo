'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    originId: DataTypes.STRING(255),
    content: DataTypes.TEXT,
    location: DataTypes.TEXT,
    votes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Messages;
};
