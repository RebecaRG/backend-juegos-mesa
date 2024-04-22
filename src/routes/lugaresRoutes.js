import { Router } from 'express';
import { getLugaresConTipo } from '../controllers/lugaresController.js';
import { validateUpdateLugar, handleErrors } from '../validations/lugares.Validation.js';

const router = Router();

router.get('/', validateUpdateLugar, handleErrors, getLugaresConTipo);

export default router;
