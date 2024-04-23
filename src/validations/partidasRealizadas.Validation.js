import { body } from 'express-validator';

const partidaValidation = [
    body('juego_id').notEmpty().withMessage('El juego ID es requerido'),
    body('fecha').notEmpty().isISO8601().withMessage('Fecha debe ser válida'),
    body('fecha_inicio').notEmpty().isISO8601().withMessage('Fecha de inicio debe ser válida'),
    body('fecha_fin').notEmpty().isISO8601().withMessage('Fecha de fin debe ser válida'),
    body('lugar').notEmpty().withMessage('Lugar es requerido'),
    body('duracion_minutos').isInt({ min: 1 }).withMessage('Duración debe ser un número entero positivo'),
    body('comentario').optional().isString().withMessage('Comentario debe ser un texto')
];

export { partidaValidation };

