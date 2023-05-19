const express = require('express');
const router = express.Router();
const usuariosRoutes = require('./usuarios');

// Agregar rutas de usuarios al enrutador principal
router.use('/usuarios', usuariosRoutes);

module.exports = router;
