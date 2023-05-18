'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLENAME = 'personajes_contenidos';
const MODELNAME = 'personajesContenidos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  personaje: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'personajes',
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
