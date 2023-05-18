'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLENAME = 'usuarios';
const MODELNAME = 'usuarios';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(200),
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  confirmedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'confirmed_at',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLENAME,
      modelName: MODELNAME,
      timestamps: true,
      paranoid: false
    };
  }
}

module.exports = { Schema, ExtendedModel };
