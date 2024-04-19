import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const LugarTipo = sequelize.define('LugarTipo', {
    id_lugares_tipo: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'lugares_tipo',
    timestamps: false
});


export default LugarTipo;
