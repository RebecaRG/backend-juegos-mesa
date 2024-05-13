import { Router } from 'express';
import { getUserJuegos, addUserJuego, updateUserJuego, deleteUserJuego } from '../controllers/usersJuegosController.js';
import { userJuegosValidation } from '../validations/userJuegos.Validation.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = Router();

router.get('/:userId/juegos', authenticateToken, getUserJuegos);
router.post('/juegos',  userJuegosValidation, addUserJuego);
router.put('/juegos/:id', userJuegosValidation, updateUserJuego);
router.delete('/juegos/:id', deleteUserJuego);

export default router;
