const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const event_notification_table = sequelize.define("persons", {
  uid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATEONLY,
  },

  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = event_notification_table;
