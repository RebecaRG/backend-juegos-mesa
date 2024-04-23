import { Router } from 'express';
import { createPartidaRealizada, getAllPartidasRealizadas, getPartidaRealizadaById, updatePartidaRealizada, deletePartidaRealizada } from '../controllers/partidasRealizadasController.js';
import authenticateToken from '../middlewares/authenticateToken.js';
import { partidaValidation } from '../validations/partidasRealizadas.Validation.js';

const router = Router();

router.post('/', authenticateToken, partidaValidation, createPartidaRealizada);
router.get('/', authenticateToken, getAllPartidasRealizadas);
router.get('/:id', authenticateToken, getPartidaRealizadaById);
router.put('/:id', authenticateToken, partidaValidation, updatePartidaRealizada);
router.delete('/:id', authenticateToken, deletePartidaRealizada);


export default router;