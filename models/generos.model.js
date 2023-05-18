'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLENAME = 'generos';
const MODELNAME = 'generos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING(150),
    allowNull: true,
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
    this.hasMany(models.generosContenidos, { foreignKey: 'genero', as: 'contenidos' });
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
