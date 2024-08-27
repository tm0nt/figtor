module.exports = (sequelize, DataTypes) => {
    const UserPlan = sequelize.define('UserPlan', {
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
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Plans',
          key: 'id',
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
      },
    });
  
    return UserPlan;
  };
  