import { Router } from 'express';
import { deleteEvento, getEvento, getEventos, postEvento, updateEvento } from '../controllers/eventosController.js';

import authenticateToken from '../middlewares/authenticateToken.js';
import { validateCreateEvento, validateGetEvento, validateUpdateEvento } from '../validations/eventos.Validations.js';


const router = Router();

router.get('/', authenticateToken, getEventos);
router.get('/:id', authenticateToken, validateGetEvento, getEvento);
router.post('/', authenticateToken, validateCreateEvento, postEvento);
router.put('/:id', authenticateToken, validateUpdateEvento, updateEvento);
router.delete('/:id', authenticateToken, validateGetEvento, deleteEvento);

export default router;
