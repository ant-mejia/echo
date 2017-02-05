'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {
    originMsg: DataTypes.STRING(255),
    senderId: DataTypes.STRING(255),
    content: DataTypes.TEXT,
    location: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comments;
};
