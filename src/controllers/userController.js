import User from '../models/userModel.js';
import { validationResult } from 'express-validator';

export const getUserById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const user = await User.findByPk(id).select('-password');
    if (!user) {
      return res.status(404).json({
        code: -6,
        message: 'Usuario no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Detalle del usuario',
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ocurrió un error al obtener el USUARIO'
    });
  }
};

