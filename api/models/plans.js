module.exports = (sequelize, DataTypes) => {
    const Plan = sequelize.define('Plan', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      durationInMonths: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Plan;
  };
  