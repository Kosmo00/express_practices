'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Calification extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Calification.init({
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Calification',
    });
    return Calification;
};