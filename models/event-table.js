const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const persons = sequelize.define("persons", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: { type: Sequelize.JSON, allowNull: false },
  password: { type: Sequelize.JSON, allowNull: false },
  email: { type: Sequelize.JSON, allowNull: false },
});

module.exports = persons;
