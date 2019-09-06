const Sequelize = require('sequelize');
const db = require('../db');

const Item = db.define(
    'item',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        failValue: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        stressValue: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        tableName: 'items'
    }
)

module.exports = Item;