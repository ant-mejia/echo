"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Users", {
      username: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userRank: {
        type: DataTypes.STRING,
        defaultValue: '0'
      },
      firstName: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      gender: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("users").done(done);
  }
};
