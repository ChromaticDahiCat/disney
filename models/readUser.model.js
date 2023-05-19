'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLENAME = 'read_user';
const MODELNAME = 'readUser';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  nombreCompleto: {
    type: DataTypes.STRING(301),
    allowNull: false,
    field: 'nombre_completo'
  },
  correo: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  confirmA_at: {
    type: DataTypes.DATE,
    allowNull: true,
    fiel: 'confirmed_at',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    fiel: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    fiel: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    fiel: 'deleted_at',
  }
}

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
