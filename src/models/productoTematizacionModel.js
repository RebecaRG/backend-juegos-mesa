import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const ProductoTematizacion = sequelize.define('ProductoTematizacion', {
    id_tematizacion: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'productos_tematizacion',
    timestamps: false,
});

export default ProductoTematizacion;