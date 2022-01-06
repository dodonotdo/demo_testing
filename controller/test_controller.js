const test_table = require("../models/test_table");

const postTesting = (req, res) => {
  const event_details = req.body;
  // var dataObject = JSON.parse(JSON.stringify({ event_details }));
  let events = test_table.create(event_details);
  events
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

const getTesting = async (req, res) => {
  await test_table
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving event.",
      });
    });
};

module.exports = {
  postTesting,
  getTesting,
};
