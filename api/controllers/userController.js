const bcrypt = require('bcryptjs');
const User = require('../models/user');


const UserController = {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      if(!email, !password){
        return res.status(404).json({message: 'Preencha todos os campos!'})
      }

      // Hash da senha antes de salvar no banco de dados
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        email,
        password: hashedPassword,
      });

      res.status(201).json(newUser);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        // Erro de violação de unicidade (e-mail já existe)
        return res.status(400).json({ message: 'E-mail já registrado' });
      }

      console.error(error);
      res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
  },

};

module.exports = UserController;
