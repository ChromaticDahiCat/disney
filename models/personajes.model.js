'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLENAME = 'personajes';
const MODELNAME = 'personajes';

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
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTERGER(5),
    allowNull: false,
  },
  peso: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  historia: {
    type: DataTypes.TEXT,
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
    this.hasMany(models.personajesContenidos, { foreignKey: 'personaje', as: 'contenidos' });
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
