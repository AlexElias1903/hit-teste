const User = require("../../models/user.model");
const mongoose = require("mongoose");

module.exports.loginUser = async (event, context, callback) => {
  const uri = process.env.URL_MONGO;
  await mongoose.connect(uri);
  try {
    const body = JSON.parse(event.body)
    const user = body.user;
    const password = body.password;
    if (!user || !password) {
      throw Error("Usuario e senha são obrigatorios")
    }
    const result = await User.findOne({
      user,
      password
    });
    if (result) {
      return ({ msg: "Ok", usuario: result.user, role: result.role });
    } else {
      return ({ msg: "Usuário ou senha inválidos" });
    }
  } catch (err) {
    console.log(err);
    return ({ msg: err });
  }
}