const { Router } = require('express');
const Player = require('./model');
const Game = require('../game/model');

const router = new Router();

//POST - create new game
router.post('/game/:playerId', (req, res, next) => {
    const { playerId } = req.params
    const newGame = {
        open: true,
        active: true
    }

    Game
        .create(newGame)
        .then(game => {
            const gameId = game.id

            Player
                .findByPk({ playerId })
                .then(player => {
                    player
                        .update({ gameId })
                        .then(player => {
                            res
                                .status(201)
                                .send({
                                    message: `GAME ${gameId} CREATED & PLAYER ${player.id} WAS ADDED`,
                                    game: game,
                                    player: player
                                })
                        })
                        .catch(error => next(error))
                })
                .catch(error => next(error))
        })
})

//GET - players in game
router.get('/players/:gameId', (req, res, next) => {
    const {gameId} = req.params

    Player
        .findAll({
            where: {gameId: gameId}
        })
        .then(players => {
            res
                .status(200)
                .send({
                    message: `PLAYERS IN GAME ${gameId}`,
                    players: players
                })
        })
        .catch(error => next(error))
})

//GET - all games where active and open === true
router.get('/games')


module.exports = router;