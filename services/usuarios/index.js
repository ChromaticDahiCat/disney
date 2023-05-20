const sequelize = require('../../config/database.js')
const { usuarios } = sequelize.models

class UsuariosService {
  static async loginUser(req, res) {
    const { nombre } = req.body;

    return res.json(nombre)
  }

  static async registerUser(nombre, apellido, correo, contrasena, token) {
    return await sequelize.query('CALL registrarUsuario(:nombre, :apellido, :correo, :contrasena, :token)', {
      replacements: {
        nombre,
        apellido,
        correo,
        contrasena,
        token
      },
    });
  }
}

module.exports = UsuariosService;
