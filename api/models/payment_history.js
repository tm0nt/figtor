module.exports = (sequelize, DataTypes) => {
    const PaymentHistory = sequelize.define('PaymentHistory', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
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
      paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'paid',
      },
    });
  
    return PaymentHistory;
  };
  