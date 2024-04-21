import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Lugar = sequelize.define('Lugar', {
    id_lugares: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    lugares_tipo_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true
    },
    nombre: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    latitud: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    longitud: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    estado: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'lugares',
    timestamps: false
});


export default Lugar;
