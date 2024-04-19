import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';


const Evento = sequelize.define('Evento', {
  id_evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  }
}, {

  tableName: 'eventos',
  timestamps: false,
});

export default Evento;
