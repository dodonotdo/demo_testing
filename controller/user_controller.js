const event_table = require("../models/event-table");

const postEvents = (req, res) => {
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

const getEvents = async (req, res, next) => {
  await event_table
    .findAll({ order: [["createdAt", "DESC"]] })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving event.",
      });
    });
  next();
};

module.exports = {
  eventRoot,
  postEvents,
  getEvents,
};
