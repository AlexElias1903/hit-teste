const Introduction = require("../../models/introduction.model");
const mongoose = require("mongoose");

module.exports.getIntroduction = async (event, context, callback) => {
  const uri = process.env.URL_MONGO;
  await mongoose.connect(uri);

  const description = await Introduction.findOne();
  const descriptionObject = JSON.parse(description.description)
  return {
    description: descriptionObject.description,
    id: description._id
  };
}