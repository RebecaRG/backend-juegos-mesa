import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Producto = sequelize.define('Producto', {
    id_juego: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    complejidad_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
    },
    contexto_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
    },
    tematizacion_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
    },
    dinamica_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
    },
    parte_id: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
    },
    ruta_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(2048),
        allowNull: true,
    },
    fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    editorial: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    autoria: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    ilustracion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    participantes_min: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
    },
    participantes_max: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
    },
    duracion_minutos: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
    },
    edad_min: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    ean: {
        type: DataTypes.STRING(13),
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING(2048),
        allowNull: true,
    },
    medidas_caja_cm: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    peso_gr: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: true,
    },
    premios: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    ranking_global: {
        type: DataTypes.DECIMAL(3, 2).UNSIGNED,
        allowNull: true,
    },
}, {
    tableName: 'productos',
    timestamps: false,
});

export default Producto;