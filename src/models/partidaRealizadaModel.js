import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const PartidaRealizada = sequelize.define('PartidaRealizada', {
    id_partidas_realizadas: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    juego_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lugar: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    duracion_minutos: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'partidas_realizadas',
    timestamps: false
});

export default PartidaRealizada;