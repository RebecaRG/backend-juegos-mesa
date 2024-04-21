import express from 'express';
import { getLugaresConTipo } from '../controllers/lugaresController.js';
import { validateUpdateLugar, handleErrors } from '../validations/lugares.Validation.js';

const router = express.Router();

router.get('/lugares', validateUpdateLugar, handleErrors, getLugaresConTipo);

export default router;
