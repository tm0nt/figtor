const { Sequelize } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.UserPersonalData = require('./users_personaldata')(sequelize, Sequelize);
db.UserPlan = require('./users_plans')(sequelize, Sequelize);
db.Plan = require('./plans')(sequelize, Sequelize);
db.PaymentHistory = require('./payment_history')(sequelize, Sequelize);
db.Device = require('./devices')(sequelize, Sequelize);
db.HistoryConversion = require('./history_conversion')(sequelize, Sequelize);
db.Admin = require('./admin')(sequelize, Sequelize);

// Definindo relações
db.User.hasOne(db.UserPersonalData, { foreignKey: 'userId' });
db.UserPersonalData.belongsTo(db.User, { foreignKey: 'userId' });

db.User.hasMany(db.UserPlan, { foreignKey: 'userId' });
db.UserPlan.belongsTo(db.User, { foreignKey: 'userId' });

db.Plan.hasMany(db.UserPlan, { foreignKey: 'planId' });
db.UserPlan.belongsTo(db.Plan, { foreignKey: 'planId' });

db.User.hasMany(db.PaymentHistory, { foreignKey: 'userId' });
db.PaymentHistory.belongsTo(db.User, { foreignKey: 'userId' });

db.Plan.hasMany(db.PaymentHistory, { foreignKey: 'planId' });
db.PaymentHistory.belongsTo(db.Plan, { foreignKey: 'planId' });

db.User.hasMany(db.Device, { foreignKey: 'userId' });
db.Device.belongsTo(db.User, { foreignKey: 'userId' });

db.User.hasMany(db.HistoryConversion, { foreignKey: 'userId' });
db.HistoryConversion.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
