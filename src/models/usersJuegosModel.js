import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const UserJuego = sequelize.define('UserGame', {
    id_user_juegos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    juego_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('poseido', 'deseado', 'jugado'),
        allowNull: false
    },
    valoracion_juego: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true
    },
    fecha_introduccion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'users_juegos',
    timestamps: false
});

export default UserJuego;