const User = require("../../models/user.model");
const mongoose = require("mongoose");

module.exports.addUser = async (event, context, callback) => {
  const uri = process.env.URL_MONGO;
  await mongoose.connect(uri);

  const user = await User.create({
    user: event.body.user,
    password: event.body.password,
    role: event.body.role
  })

  return user;
}