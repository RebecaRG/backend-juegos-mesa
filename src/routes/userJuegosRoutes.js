import { Router } from 'express';
import { getUserJuegos, addUserJuego, updateUserJuego, deleteUserJuego } from '../controllers/usersJuegosController.js';
import { userJuegosValidationRules } from '../validations/userJuegos.Validation.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = Router();

router.get('/:userId/juegos', authenticateToken, getUserJuegos);
router.post('/juegos', authenticateToken, userJuegosValidationRules, addUserJuego);
router.put('/juegos/:id', authenticateToken, userJuegosValidationRules, updateUserJuego);
router.delete('/users/juegos/:id', authenticateToken, deleteUserJuego);

export default router;
