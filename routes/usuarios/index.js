const express = require('express');
const router = express.Router();
const sesionRoutes = require('./sesion');

// Agregar rutas de sesión al enrutador de usuarios
router.use('/sesion', sesionRoutes);

module.exports = router;

