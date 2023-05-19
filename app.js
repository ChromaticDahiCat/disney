const express = require('express');
const app = express();
const routes = require('./routes');

// Configuración de middlewares, variables de entorno, etc.

// Agregar rutas al enrutador principal
app.use('/api/v1', routes);

// Otro código relevante para la configuración de la aplicación

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
