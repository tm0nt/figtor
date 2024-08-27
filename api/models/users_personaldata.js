module.exports = (sequelize, DataTypes) => {
    const UserPersonalData = sequelize.define('UserPersonalData', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      cpf:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return UserPersonalData;
  };
  