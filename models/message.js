'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasOne(models.Calification, {
                foreignKey: 'calification_id',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    };
    Message.init({
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: DataTypes.STRING(250),
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        calification_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Califications',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Message',
    });
    return Message;
};