// src/routes/userRoutes.js
import { Router } from 'express';
import { getUserById} from '../controllers/userController.js';


import authenticateToken from '../middlewares/authenticateToken.js';
import { idValidator, nameValidator } from '../validations/generic.Validation.js'


const router = Router();

// Rutas para obtener y modificar los datos de los usuarios
router.get('/',(req,res)=>{
    res.send("Hello World from NodeJS express.");
  });
router.get('/:id', authenticateToken, idValidator, getUserById);


export default router;
