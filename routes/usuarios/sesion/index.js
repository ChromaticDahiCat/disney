const express = require('express');
const router = express.Router();

// Controladores para la autenticación de usuarios
const { UsuariosController } = require('../../../controllers');

// Ruta de inicio de sesión
router.post('/login', UsuariosController.loginUser);

router.post('/register', UsuariosController.registerUser);
// router.post('/logout', logoutController);

module.exports = router;
