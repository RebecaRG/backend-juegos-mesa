import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenev from 'dotenv';
import { testConnection } from './db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import eventosRoutes from './routes/eventosRoutes.js';
import lugaresRoutes from './routes/lugaresRoutes.js';
import './models/lugarModel.js';
import './models/lugarTipoModel.js';
import './associations.js';


dotenev.config();

const app = express();

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

await testConnection();

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/eventos', eventosRoutes);
app.use('/', lugaresRoutes);

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

app.get('/', (req, res) => {
    res.send('Api running...');
  });




