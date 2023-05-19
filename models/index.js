// Importar los módulos necesarios
const fs = require('fs');
const path = require('path');

// Ruta del directorio actual de los modelos
const modelsDir = path.join(__dirname);

// Objeto para almacenar los modelos
const models = {};

// Leer los archivos en el directorio de modelos
fs.readdirSync(modelsDir).forEach(file => {
  // Obtener la ruta completa del archivo
  const filePath = path.join(modelsDir, file);

  // Verificar si el archivo es un archivo JavaScript y no es el archivo "index.js" actual
  if (path.extname(file) === '.js' && file !== 'index.js') {
    // Obtener el nombre del modelo eliminando la extensión ".model.js"
    const modelName = path.basename(file, '.model.js');

    // Importar el modelo y almacenarlo en el objeto "models" usando su nombre
    models[modelName] = require(filePath);
  }
});

// Exportar los modelos
module.exports = models;
