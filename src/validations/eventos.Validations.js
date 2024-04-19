import { body, param} from 'express-validator';

// Validación para crear un nuevo evento
const validateCreateEvento = [
    body('titulo')
      .trim()
      .isLength({ min: 5 })
      .withMessage('El título debe tener al menos 5 caracteres'),
    body('lugar')
      .trim()
      .isLength({ min: 2 })
      .withMessage('El lugar debe tener al menos 2 caracteres'),
    body('inicio')
      .isISO8601()
      .withMessage('La fecha de inicio debe ser una fecha válida'),
    body('fin')
      .isISO8601()
      .withMessage('La fecha de fin debe ser una fecha válida')
      .custom((value, { req }) => {
        if (new Date(value) <= new Date(req.body.inicio)) {
          throw new Error('La fecha de fin debe ser posterior a la fecha de inicio');
        }
        return true;
      }),
    body('descripcion')
      .optional()
      .isLength({ max: 500 })
      .withMessage('La descripción no debe exceder los 500 caracteres'),
  ];
  
  // Validación actualizar evento
  const validateUpdateEvento = [
    body('titulo')
      .optional()
      .trim()
      .isLength({ min: 5 })
      .withMessage('El título debe tener al menos 5 caracteres'),
    body('lugar')
      .optional()
      .trim()
      .isLength({ min: 2 })
      .withMessage('El lugar debe tener al menos 2 caracteres'),
    body('inicio')
      .optional()
      .isISO8601()
      .withMessage('La fecha de inicio debe ser una fecha válida'),
    body('fin')
      .optional()
      .isISO8601()
      .withMessage('La fecha de fin debe ser una fecha válida')
      .custom((value, { req }) => {
        if (value && new Date(value) <= new Date(req.body.inicio)) {
          throw new Error('La fecha de fin debe ser posterior a la fecha de inicio');
        }
        return true;
      }),
    body('descripcion')
      .optional()
      .isLength({ max: 500 })
      .withMessage('La descripción no debe exceder los 500 caracteres'),
  ];
  
  // Validación evento por ID
  const validateGetEvento = [
    param('id').isNumeric().withMessage('El ID debe ser numérico'),
  ];
  
  export { validateCreateEvento, validateUpdateEvento, validateGetEvento };