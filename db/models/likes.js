'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {
    originId: DataTypes.INTEGER,
    senderId: DataTypes.STRING,
    recieverId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Likes;
};