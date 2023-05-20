const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const services = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== basename;
  })
  .forEach((file) => {
    const service = require(path.join(__dirname, file));
    const serviceName = `${file[0].toUpperCase() + file.substring(1)}Service`;
    services[serviceName] = service;
  });

module.exports = services;
