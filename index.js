//Required Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

//DB - MODELS

//DB - ROUTERS

//Initialize & Define Port
const app = express();
const port = process.env.PORT || 5000;

//Declare Middleware
const jsonParser = bodyParser.json();

//Register Middleware
app.use(cors());
app.use(jsonParser);

//Add onListen function that logs the current port
function onListen() {
    console.log(`Listening on PORT ${port}.`);
}

//Start listening
app.listen(port, onListen);