import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const ProductoDinamica = sequelize.define('ProductoDinamica', {
    id_dinamica: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'productos_dinamica',
    timestamps: false,
});

export default ProductoDinamica;