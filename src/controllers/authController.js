import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import RecoveryToken from '../models/recoveryTokenModel.js';
import sendEmail from "../utils/email/sendEmail.js";
import { validationResult } from 'express-validator';
import { serialize } from 'cookie';
import { Op } from 'sequelize';

// Creación de funciones personalizadas
import { esPar, contraseniasCoinciden } from '../utils/utils.js';

const clientURL = process.env.CLIENT_URL;

export const register = async (req, res) => {
  console.log("req.body:", req.body);
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const { email, password, name, surname, username } = req.body;  // Asegúrate de incluir 'username'
    // Verificar si ya existe un usuario con el mismo correo electrónico o username
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { email: email }, 
          { username: username }
        ]
      }
    });
    if (existingUser) {
      return res.status(400).json({
        code: -2,
        message: 'Ya existe un usuario con el mismo correo electrónico o nombre de usuario'
      });
    }
    // Crear un nuevo usuario
    const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    const newUser = new User({
      email, 
      password: hashedPassword, 
      name, 
      surname, 
      username, // Asegúrate de pasar esto al modelo
      status: 1
    });
    await newUser.save();

    // Generar un token de acceso y lo guardo en una cookie segura (httpOnly)
    const accessToken = jwt.sign({ id_user: newUser.id_user, name: newUser.name }, process.env.JWT_SECRET);
    const token = serialize('token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    res.setHeader('Set-Cookie', token);

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Usuario registrado correctamente',
    });
   } catch (error) {

        console.error("Error al registrar el usuario:", error);

        // Devuelve un mensaje de error con más detalles
        res.status(500).json({
            code: -100,
            message: 'Ha ocurrido un error al registrar el usuario',
            error: error.message || error
        });
    }
};


export const login = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Verificar si el correo electrónico y la contraseña son correctos
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        code: -25,
        message: 'Usuario no existe'
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        code: -5,
        message: 'Credenciales incorrectas'
      });
    }

    // Generar un token de acceso y lo guardo en una cookie segura (httpOnly)
    const accessToken = jwt.sign({ id_user: user.id_user, name: user.name }, process.env.JWT_SECRET);
    const token = serialize('token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    res.setHeader('Set-Cookie', token);

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Inicio de sesión correcto',
      data: {
        user: {
          id_user: user.id_user,
          name: user.name,
          surname: user.surname,
          email: user.email
        } 
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al iniciar sesión',
      error: error
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        code: -8,
        message: 'El correo electrónico no existe'
      });
    }

    let resetToken = crypto.randomBytes(32).toString("hex");

    await new RecoveryToken({
      user_id: user.id_user,
      token: resetToken,
      created_at: Date.now(),
    }).save();

    const link = `${clientURL}/change-password?token=${resetToken}&id=${user.id_user}`;

    await sendEmail(
      user.email,
      "Solicitud de Restablecimiento de Contraseña",
      {
        name: user.name,
        link: link,
      },
      "email/template/requestResetPassword.handlebars"
    ).then(response => {
      console.log("Resultado del envío del correo:", response);
      res.status(200).json({
        code: 100,
        message: 'Correo enviado correctamente',
        data: {
          token: resetToken,
          link: link
        }
      });

    }, error => {
      console.error (error)
      res.status(500).json({
        code: -80,
        message: 'Error al enviar el correo',
        data: { error }
      });
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al procesar la solicitud de cambio de contraseña',
      error: error
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { token, password } = req.body;

    // Revisar si el Token existe
    let token_row = await RecoveryToken.findOne({ where: { token } });
    if (!token_row) {
      return res.status(404).json({
        code: -3,
        message: 'Token incorrecto'
      });
    }

    // Buscar un usuario por su ID en la base de datos
    const user = await User.findOne({ where: { id_user: token_row.user_id } });
    if (!user) {
      return res.status(404).json({
        code: -10,
        message: 'Usuario no encontrado'
      });
    }

    // Actualizar la contraseña del usuario
    user.password = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    await user.save();
    // Eliminar el token
    await RecoveryToken.destroy({
      where: {
        user_id: token_row.user_id
      }
    })

    // Generar un token de acceso y lo guardo en una cookie segura (httpOnly)
    const accessToken = jwt.sign({ id_user: user.id_user, name: user.name }, process.env.JWT_SECRET);
    const token_jwt = serialize('token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });
    res.setHeader('Set-Cookie', token_jwt);

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Contraseña actualizada correctamente',
      data: {
        user: {
          name: user.name,
          surname: user.surname,
          email: user.email
        } 
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar la contraseña',
      error: error
    });
  }
};

export const logout = async (req, res) => {
  const { cookies } = req;
  const jwt = cookies.token;

  const token = serialize('token', null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: -1,
    path: '/',
  });
  res.setHeader('Set-Cookie', token);
  res.status(200).json({
    code: 0,
    message: 'Sesión cerrada - Token eliminado',
  });
}
export const checkAuthStatus = (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({
        isAuthenticated: true,
        userId: req.user.id_user
      });
    } else {
      res.status(200).json({
        isAuthenticated: false,
        userId: null
      });
    }
  } catch (error) {
    console.error('Error al verificar el estado de autenticación:', error);
    res.status(500).json({
      code: -100,
      message: 'Error al verificar el estado de autenticación'
    });
  }
};
