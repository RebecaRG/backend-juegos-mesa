import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const ProductoComplejidad = sequelize.define('ProductoComplejidad', {
    id_complejidad: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'productos_complejidad',
    timestamps: false,
});

export default ProductoComplejidad;