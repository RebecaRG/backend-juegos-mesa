import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const PartidaParticipante = sequelize.define('PartidaParticipante', {
    id_participacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    partidas_realizadas_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    alias: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ganada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'partidas_participantes',
    timestamps: false
});

export default PartidaParticipante;