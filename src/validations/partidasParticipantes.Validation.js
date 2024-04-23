import { body, param } from 'express-validator';

const addParticipanteValidation = [
    body('partidas_realizadas_id').notEmpty().isInt().withMessage('ID de la partida es necesario y debe ser un entero'),
    body('user_id').notEmpty().isInt().withMessage('ID del usuario es necesario y debe ser un entero'),
    body('alias').optional().isString().withMessage('Alias debe ser un texto'),
    body('puntuacion').optional().isInt().withMessage('Puntuación debe ser un número entero'),
    body('ganada').optional().isBoolean().withMessage('Ganada debe ser un valor booleano')
];

const userIdValidation = [
    param('id').isInt().withMessage('El ID del usuario debe ser un entero')
];

export { addParticipanteValidation, userIdValidation };