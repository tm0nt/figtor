const db = require('./models');

db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });
