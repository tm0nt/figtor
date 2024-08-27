module.exports = (sequelize, DataTypes) => {
    const Device = sequelize.define('Device', {
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
      deviceId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deviceType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deviceName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastLogin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    return Device;
  };
  