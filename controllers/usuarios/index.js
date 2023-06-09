const bcrypt = require('bcrypt');
const CryptoJS = require("crypto-js");

const { UsuariosService } = require('../../services/')

class UsuariosController {
  static async loginUser(req, res) {
    const { nombre } = req.body;

    return res.json(nombre)
  }

  static async registerUser(req, res) {
    const { nombre, apellido, correo, contrasena } = req.body;
    let user;

    return await bcrypt.hash(contrasena, 10, async function(err, hash) {
      if (err) {
        throw new Error('No se pudo encriptar la contraseña')
      }

      const token = CryptoJS.SHA256(correo).toString();

      try {
        user = await UsuariosService.registerUser(nombre, apellido, correo, hash, token)
      } catch (err) {
        throw new Error(err)
      }

      return res.json({
        status: 200,
        message: "Usuario creado",
        data: user
      })
    });
  }
}

module.exports = UsuariosController;
