const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const controllers = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== basename;
  })
  .forEach((file) => {
    const controller = require(path.join(__dirname, file));
    const controllerName = `${file[0].toUpperCase() + file.substring(1)}Controller`;
    controllers[controllerName] = controller;
  });

module.exports = controllers;
