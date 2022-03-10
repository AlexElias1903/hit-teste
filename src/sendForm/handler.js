const Form = require("../../models/form.model");
const mongoose = require("mongoose");

module.exports.sendForm = async (event, context, callback) => {
  const uri = process.env.URL_MONGO;
  await mongoose.connect(uri);
  const body = JSON.parse(event.body);

  const form = await Form.create({
    name: body.name,
    email: body.email,
    message: body.message
  });

  return form;
}