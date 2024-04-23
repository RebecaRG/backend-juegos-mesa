import { body } from 'express-validator';

const productValidation = [
    body('titulo').notEmpty().withMessage('El título es obligatorio'),
    body('descripcion').optional().isLength({ max: 500 }).withMessage('La descripción no debe exceder los 500 caracteres'),
    body('contexto_id').optional().isNumeric().withMessage('El contexto debe ser numérico'),
    body('dinamica_id').optional().isNumeric().withMessage('La dinámica debe ser numérica'),
    body('parte_id').optional().isNumeric().withMessage('La parte debe ser numérica'),
    body('tematizacion_id').optional().isNumeric().withMessage('La tematización debe ser numérica'),
    body('complejidad_id').optional().isNumeric().withMessage('La complejidad debe ser numérica'),
    body('editorial').notEmpty().withMessage('La editorial es obligatoria'),
    body('autoria').notEmpty().withMessage('La autoria es obligatoria'),
    body('participantes_min').isInt({ min: 1 }).withMessage('El mínimo de participantes debe ser al menos 1'),
    body('participantes_max').isInt({ min: 1 }).withMessage('El máximo de participantes debe ser al menos 1'),
    body('duracion_minutos').isInt({ min: 1 }).withMessage('La duración debe ser al menos 1 minuto'),
    body('edad_min').isInt({ min: 0 }).withMessage('La edad mínima debe ser un número válido'),
    body('ean').optional().isNumeric().withMessage('El EAN debe ser numérico'),
    body('url').optional().isURL().withMessage('La URL debe ser válida'),
    body('medidas_caja_cm').optional(),
    body('peso_gr').optional().isNumeric().withMessage('El peso debe ser numérico'),
    body('premios').optional(),
    body('ranking_global').optional().isFloat({ min: 0, max: 10 }).withMessage('El ranking global debe estar entre 0 y 10')
];

export { productValidation};
