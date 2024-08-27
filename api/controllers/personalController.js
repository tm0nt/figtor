const PersonalData = require('../models/users_personaldata');

const addPersonalData = async (req, res) => {
  const { cpf, phone } = req.body;
  const userId = req.userId; 

  try {
    let personalData = await PersonalData.findOne({
      where: {
        userId: userId
      }
    });

    if (personalData) {
      personalData.cpf = cpf;
      personalData.phone = phone;
      await personalData.save();
    } else {
      personalData = await PersonalData.create({
        userId,
        cpf,
        phone
      });
    }

    return res.status(201).json(personalData);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      // Captura o erro de violação de unicidade (CPF ou telefone já existem)
      return res.status(400).json({ message: 'CPF ou telefone já registrados' });
    }

    console.error('Erro ao adicionar/atualizar dados pessoais:', error);
    return res.status(500).json({ error: 'Erro ao adicionar/atualizar dados pessoais' });
  }
};

module.exports = { addPersonalData };
