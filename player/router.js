const { Router } = require('express');
const Player = require('./model');
//const Game = require('../game/model');

const router = new Router();

//POST - create player
router.post('/sign-up', (req, res, next) => {
    const newPlayer = {
        name: req.body.name
    }

    Player
        .create(newPlayer)
        .then(player => {
            res
                .status(201)
                .send({
                    message: "NEW PLAYER CREATED",
                    name: player.name,
                    playerId: player.id
                })
        })
        .catch(error => next(error))
})

//GET - player by id
router.get('/player/:playerId', (req, res, next) => {
    const { playerId } = req.params

    Player
        .findByPk({ playerId })
        .then(player => {
            if (!player) {
                res
                    .status(404)
                    .send({
                        message: `PLAYER ${playerId} DOES NOT EXIST`
                    })
            } else {
                res
                    .status(200)
                    .send({
                        message: `PLAYER ${playerId}`,
                        player: player
                    })
            }
        })
        .catch(error => next(error))
})

//PUT - update player gameId
router.put('/player/:playerId/:gameId', (req, res, next) => {
    const { playerId } = req.params
    const { gameId } = req.params

    Player
        .findByPk({ playerId })
        .then(player => {
            if (!player) {
                res
                    .status(404)
                    .send({
                        message: `PLAYER WITH ${playerId} DOES NOT EXIST`
                    })
            } else {
                player
                    .update({ gameId })
                    .then(player => {
                        res
                            .status(200)
                            .send({
                                message: `PLAYER ${playerId} ADDED TO GAME ${gameId}`,
                                player: player,
                                gameId: gameId
                            })
                    })
                    .catch(error => next(error))
            }
        })
        .catch(error => next(error))
})

//PUT - update player score
router.put('/player/:playerId/score', (req, res, next) => {
    const { playerId } = req.params
    const { score } = req.body

    Player
        .findByPk({ playerId })
        .then(player => {
            if (!player) {
                res
                    .status(404)
                    .send({
                        message: `PLAYER ${playerId} DOES NOT EXIST`
                    })
            } else {
                player
                    .update({ score })
                    .then(player => {
                        res
                            .status(204)
                            .send({
                                message: `PLAYER ${playerId} SCORE HAS BEEN UPDATED`,
                                player: player
                            })
                    })
                    .catch(error => next(error))
            }
        })
        .catch(error => next(error))
})

module.exports = router;