import { body } from 'express-validator';

const userJuegosValidationRules = () => {
  return [
    body('user_id').isInt().withMessage('El ID del usuario debe ser un número entero válido.'),
    body('juego_id').isInt().withMessage('El ID del juego debe ser un número entero válido.'),
    body('estado').isIn(['poseido', 'deseado', 'jugado']).withMessage('El estado debe ser uno de los siguientes: poseido, deseado, jugado.'),
    body('valoracion_juego').optional().isInt({ min: 1, max: 10 }).withMessage('La valoración debe ser un número entre 1 y 10.')
  ];
};

export {userJuegosValidationRules};
