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

module.exports = {
  userRoot,
  create_users,
};
