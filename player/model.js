const Sequelize = require('sequelize');
const db = require('../db');
const Game = require('../game/model');

const Player = db.define(
    'player',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'players'
    }
)

Player.belongsTo(Game);

module.exports = Player;