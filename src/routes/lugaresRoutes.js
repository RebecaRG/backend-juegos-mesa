import { Router } from 'express';
import { getLugaresConTipo } from '../controllers/lugaresController.js';
import { getTiposDeLugares } from '../controllers/lugaresController.js';
// import { validateUpdateLugar, handleErrors } from '../validations/lugares.Validation.js';

const router = Router();

router.get('/', getLugaresConTipo);
router.get('/tipos', getTiposDeLugares); 

export default router;
