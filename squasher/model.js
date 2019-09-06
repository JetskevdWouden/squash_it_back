const Sequelize = require('sequelize');
const db = require('../db');

const Squasher = db.define(
    'squasher',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mass: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'squashers'
    }
)

module.exports = Squasher;