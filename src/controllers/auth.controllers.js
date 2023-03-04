const AuthServices = require("../services/auth.services");


const Login = async (req, res, next) => {
  try {
    // email y password
    const credentials = req.body;
    const result = await AuthServices.Authorization(credentials);
    // false --> no era contraseña invalida
    // null --> no se encuentra al usuario
    // { isValid, result }
    if (result) {
      const { firstName, lastName, email, id, rol } = result.result;
      const user = { firstName, lastName, email, id, rol };
      const token = AuthServices.genToken(user);
      user.token = token;
      res.json({ ...user });
    } else {
      res.status(400).json({ message: "Información inválida" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Email o contraseña inválida",
    });
  }
};

module.exports = {
  Login,
};
