module.exports = (sequelize, DataTypes) => {
    const HistoryConversion = sequelize.define('HistoryConversion', {
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
      originalFileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      convertedFileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      conversionType: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Tipo de conversão, por exemplo, PDF para DOCX',
      },
      conversionStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'completed',
      },
      conversionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    return HistoryConversion;
  };
  