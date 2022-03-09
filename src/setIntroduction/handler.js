const Introduction = require("../../models/introduction.model");
const mongoose = require("mongoose");

module.exports.setIntroduction = async (event, context, callback) => {
  const uri = process.env.URL_MONGO;
  await mongoose.connect(uri);
  const body = JSON.parse(event.body)
  const user = await Introduction.findByIdAndUpdate(body.id, {
    description: event.body
  });

  return user;
}