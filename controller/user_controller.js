const event_table = require("../models/event-table");

const userRoot = (req, res) => res.send("users api root");

const create_users = (req, res) => {
  const event_details = req.body;
  var jsObj = JSON.parse(JSON.stringify({ event_details }));
  let create_users = event_table.create(jsObj);
  create_users
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

const get_user = async (req, res, next) => {
    await event_table
      .findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Some error occurred while retrieving event.",
        });
      });
    next();
  };

module.exports = {
  userRoot,
  create_users,
  get_user
};
