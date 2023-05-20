const bcrypt = require('bcrypt');

const { UsuariosService } = require('../../services')

class UsuariosController {
  static async loginUser(req, res) {
    const { nombre } = req.body;

    return res.json(nombre)
  }

  static async registerUser(req, res) {
    const { nombre, apellido, correo, contrasena } = req.body;

    return bcrypt.hash(contrasena, 10, function(err, hash) {
      if (err) {
        throw new Error('No se pudo encriptar la contraseña')
      }

      return res.json({nombre, apellido, correo, hash})
    });
  }
}

module.exports = UsuariosController;
