const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const server = db.define("server", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Tought.belongsTo(User);
User.hasMany(Tought);

module.exports = Tought;
