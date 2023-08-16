import { DataTypes } from 'sequelize';

const gameModel = (sequelize) =>
  sequelize.define('games', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default gameModel;
