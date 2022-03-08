const User = require("../../models/user.model");
const mongoose = require("mongoose");

module.exports.addUser = async (event, context, callback) => {
  const uri = process.env.URL_MONGO;
  await mongoose.connect(uri);
  const body = JSON.parse(event.body);
  const userInfo = {
    user: body.user,
    password: body.password,
    role: body.role
  };
  const user = await User.create({
    user: userInfo.user,
    password: userInfo.password,
    role: userInfo.role
  });

  return user;
}