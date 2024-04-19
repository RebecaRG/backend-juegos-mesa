import express from 'express';
import { getLugaresConTipo } from '../controllers/lugaresController.js';

const router = express.Router();

router.get('/lugares', getLugaresConTipo);

export default router;
