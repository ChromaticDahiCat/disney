const express = require('express');
const router = express.Router();

// Controladores para la autenticación de usuarios
// const { loginController } = require('../../../controllers/authControllers');

// Ruta de inicio de sesión
router.post('/login', loginController);

// Otras rutas relacionadas con la autenticación
// router.post('/register', registerController);
// router.post('/logout', logoutController);

module.exports = router;
