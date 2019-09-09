const { Router } = require('express');
const Sqausher = require('./model');
const Sequelize = require('sequelize');

const router = new Router();

//GET - 15 random squashers
router.get('/squashers', (req, res, next) => {
    Sqausher
        .findAll(
            { order: Sequelize.literal('random()'), limit: 15 }
        )
        .then(squashers => {
            res
                .status(200)
                .send({
                    message: "15 RANDOM SQUASHERS",
                    squashers: squashers
                })
        })
        .catch(error => nect(error))
})

module.exports = router;