// src/middlewares/authenticateToken.js
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const authenticateToken = async (req, res, next) => {
  try {
    const { cookies } = req;
    const accessToken = cookies.token;

    if (!accessToken) {
      return res.status(401).json({
        code: -50,
        message: 'No se ha proporcionado un token de acceso'
      });
    }

    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    const user = await User.findByPk(decodedToken.id_user);
    if (!user) {
      return res.status(401).json({
        code: -70,
        message: 'Token de acceso no válido'
      });
    }

    req.user = {
      id_user: user.id_user,
      username: user.username,
      name: user.name,
      surname: user.surname,
      email: user.email
    };
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al autenticar el token de acceso'
    });
  }
};

export default authenticateToken;