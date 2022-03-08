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
      return ({ msg: "Ok", user: result.user, role: result.role });
    } else {
      context.succeed({
        statusCode: '401',
        body: JSON.stringify({ error: 'Usuário ou senha inválidos' }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
    }
  } catch (err) {
    console.log(err);
    context.succeed({
      statusCode: '400',
      body: JSON.stringify({ error: err }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}