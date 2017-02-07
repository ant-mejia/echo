const models = require('../db/models/index');

const create = (req,res) => {
  return models.Messages.create({
    originId: req.user.username,
    content: req.body.content,
    location: "location, location"
  });
}


module.exports = {
  create
};
