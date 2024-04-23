import { Router } from 'express';
import { addParticipante, getPartidasByUserId, getParticipantesByPartidaId, updateParticipante, deleteParticipante} from '../controllers/partidasParticipantesController.js';
import authenticateToken from '../middlewares/authenticateToken.js';
import { addParticipanteValidation, userIdValidation } from '../validations/partidasParticipantes.Validation.js';

const router = Router();

router.post('/', authenticateToken, addParticipanteValidation, addParticipante);
router.get('/usuario/:id', authenticateToken, userIdValidation, getPartidasByUserId);
router.get('/partida/:partidaId', authenticateToken, getParticipantesByPartidaId);
router.put('/:id', authenticateToken, updateParticipante);
router.delete('/:id', authenticateToken, deleteParticipante);

export default router;
