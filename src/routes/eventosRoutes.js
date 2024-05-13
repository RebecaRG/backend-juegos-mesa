import { Router } from 'express';
import { deleteEvento, getEvento, getEventos, postEvento, updateEvento } from '../controllers/eventosController.js';

import authenticateToken from '../middlewares/authenticateToken.js';
import { validateCreateEvento, validateGetEvento, validateUpdateEvento } from '../validations/eventos.Validations.js';


const router = Router();

router.get('/', getEventos);
router.get('/:id', validateGetEvento, getEvento);
router.post('/', validateCreateEvento, postEvento);
router.put('/:id', validateUpdateEvento, updateEvento);
router.delete('/:id', validateGetEvento, deleteEvento);

export default router;
