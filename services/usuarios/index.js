class UsuariosService {
  static async loginUser(req, res) {
    const { nombre } = req.body;

    return res.json(nombre)
  }

  static async registerUser(nombre, apellido, correo, hash) {
    //
  }
}

module.exports = UsuariosService;
