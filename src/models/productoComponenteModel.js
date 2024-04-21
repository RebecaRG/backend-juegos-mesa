import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const ProductoComponente = sequelize.define('ProductoComponente', {
    id_juego: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
            model: 'productos', 
            key: 'id_juego'
        }
    },
    id_componente: {
        type: DataTypes.TINYINT.UNSIGNED,
        primaryKey: true,
        references: {
            model: 'componentes', 
            key: 'id_componente'
        }
    }
}, {
    tableName: 'productos_componentes',
    timestamps: false,
});

export default ProductoComponente;
