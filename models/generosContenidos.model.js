'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLENAME = 'generos_contenidos';
const MODELNAME = 'generosContenidos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  genero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'generos',
      key: 'id',
    },
  },
  contenido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'contenidos',
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
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
