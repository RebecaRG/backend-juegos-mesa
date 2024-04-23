import { Router } from 'express';
import { getUserJuegos, addUserJuego, updateUserJuego, deleteUserJuego } from '../controllers/usersJuegosController.js';
import { userJuegosValidation } from '../validations/userJuegos.Validation.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = Router();

router.get('/:userId/juegos', authenticateToken, getUserJuegos);
router.post('/juegos', authenticateToken, userJuegosValidation, addUserJuego);
router.put('/juegos/:id', authenticateToken, userJuegosValidation, updateUserJuego);
router.delete('/users/juegos/:id', authenticateToken, deleteUserJuego);

export default router;
