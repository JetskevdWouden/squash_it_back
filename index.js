//Required Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

//DB - MODELS
const Player = require('./player/model');
const Game = require('./game/model');
const Squasher = require('./squasher/model');
const Item = require('./item/model');

//DB - ROUTERS
const playerRouter = require('./player/router');
const gameRouter = require('./game/router');
const squasherRouter = require('./squasher/router');
const itemRouter = require('./item/router');

//Initialize & Define Port
const app = express();
const port = process.env.PORT || 5000;

//Declare Middleware
const jsonParser = bodyParser.json();

//Register Middleware
app.use(cors());
app.use(jsonParser);
app.use(playerRouter);
app.use(gameRouter);
app.use(squasherRouter);
// app.use(itemRouter);

//Add onListen function that logs the current port
function onListen() {
    console.log(`Listening on PORT ${port}.`);
}

//Start listening
app.listen(port, onListen);