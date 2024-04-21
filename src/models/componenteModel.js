import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Componente = sequelize.define('Componente', {
    id_componente: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    tableName: 'componentes',
    timestamps: false,
});

export default Componente;
