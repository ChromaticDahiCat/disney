'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLENAME = 'contenidos';
const MODELNAME = 'contenidos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  imagen: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_creacion',
  },
  calificacion: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('serie', 'pelicula'),
    allowNull: false,
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
  static associate(models) {
    // Modifica aquí
  }
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
