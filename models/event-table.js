const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const users = sequelize.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  event_details: { type: Sequelize.JSON, allowNull: false },
});

module.exports = users;
