const User = require("../../models/user.model");
const mongoose = require("mongoose");

module.exports.loginUser = async (event, context, callback) => {
  const uri = process.env.URL_MONGO;
  await mongoose.connect(uri);
  try {
    const user = event.body.user;
    const password = event.body.password;
    if (!user || !password) {
      throw Error("Usuario e senha são obrigatorios")
    }
    const result = await User.findOne({
      user,
      password
    });
    if (result) {
      res.status(200).json({ msg: "Ok", usuario: result.user, role: result.role });
    } else {
      res.status(400).json({ msg: "Falha no login" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}