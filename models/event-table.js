const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const users = sequelize.define("users", {
  user_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  event_details: { type: Sequelize.JSON, allowNull: false },
});

module.exports = users;
