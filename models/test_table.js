const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const testing_details = sequelize.define("testing_details", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
  },

  createdAt: {
    type: Sequelize.DATEONLY,
  },

  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = testing_details;
