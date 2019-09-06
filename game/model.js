const Sequelize = require('sequelize');
const db = require('../db');

const Game = db.define(
    'game',
    {
        open: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false,
        tableName: 'games'
    }
)

module.exports = Game;