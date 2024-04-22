import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const User = sequelize.define('User', {
  id_user: {
    type: DataTypes.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },

  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
},{
  indexes: [{ unique: true, fields: ['email'] }],
  timestamps: true, 
  updatedAt: 'updated_at',
  createdAt: 'created_at'
});

export default User;