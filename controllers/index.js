const fs = require('fs');
const path = require('path');

// Ruta a la carpeta de controladores
const controllersPath = path.join(__dirname, 'controllers');

// Leer los archivos dentro de la carpeta de controladores
const controllerFiles = fs.readdirSync(controllersPath);

// Objeto para almacenar los controladores
const controllers = {};

// Iterar sobre los archivos y requerir los controladores
controllerFiles.forEach(file => {
  // Obtener la ruta completa del archivo
  const filePath = path.join(controllersPath, file);

  // Requerir el controlador
  const Controller = require(filePath);

  // Obtener el nombre del controlador
  const controllerName = path.parse(file).name;

  // Agregar el controlador al objeto
  controllers[controllerName] = Controller;
});

// El objeto "controllers" ahora contiene todos los controladores, donde las claves son los nombres de los controladores y los valores son las clases de los controladores.

// También puedes acceder a los controladores dinámicamente si tienes el nombre del controlador en una variable:
// const controllerName = 'UsuariosController';
// controllers[controllerName].loginUser(req, res);

// Exportar el objeto de controladores
module.exports = controllers;
