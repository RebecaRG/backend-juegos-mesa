import { body, validationResult } from 'express-validator';

const validateUpdateLugar = [
  body('nombre')
    .optional()
    .trim()
    .isLength({ min: 1, max: 75 })
    .withMessage('El nombre debe tener entre 1 y 75 caracteres'),
  body('latitud')
    .optional()
    .isFloat({ min: -90, max: 90 })
    .withMessage('La latitud debe ser un valor entre -90 y 90')
    .custom((lat, { req }) => {
      if (lat && req.body.longitud) {
        const lon = parseFloat(req.body.longitud);
        if (lon < -180 || lon > 180) {
          throw new Error('La longitud proporcionada no es válida');
        }
      }
      return true;
    }),
  body('longitud')
    .optional()
    .isFloat({ min: -180, max: 180 })
    .withMessage('La longitud debe ser un valor entre -180 y 180')
    .custom((lon, { req }) => {
      if (lon && req.body.latitud) {
        const lat = parseFloat(req.body.latitud);
        if (lat < -90 || lat > 90) {
          throw new Error('La latitud proporcionada no es válida');
        }
      }
      return true;
    }),
  body('direccion')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('La dirección debe tener entre 1 y 100 caracteres'),
];


const handleErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validateUpdateLugar, handleErrors };
