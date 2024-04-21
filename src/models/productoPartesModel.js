import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const ProductoParte = sequelize.define('ProductoParte', {
    id_parte: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'productos_partes',
    timestamps: false,
});

export default ProductoParte;