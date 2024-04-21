import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const ProductoContexto = sequelize.define('ProductoContexto', {
    id_contexto: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'productos_contexto',
    timestamps: false,
});

export default ProductoContexto;