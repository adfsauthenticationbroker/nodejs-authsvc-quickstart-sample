/**
 *
 * Author:  AppSeed.us - Full Stack App Generator
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/rosoftdeveloper/appseed
 *
 */

const express    = require('express');
const bodyParser = require('body-parser');
const session    = require('express-session');
const cors       = require('cors');
//const https = require('https');
const http = require('http');
//const fs = require('fs');
//const passport = require('passport');

/* Make all variables from our .env file available in our process */
require('dotenv').config();

/* Add timestamp to log - console.log */
const logtimestamp = require('log-timestamp');

/* Init express */
const app = express();

/* Here we setup the middlewares & configs */

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: process.env.SESSION_SECRET, cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

/* Define the api routes */
app.use(require('./routes'));

/* Include css and .js file in public folder */
app.use(express.static('./public'));

const port = process.env.PORT || 8080;

    /* Start the server http */
    var server = http.createServer(app);
    server.listen(port, () => {
        console.log("HTTP server starting on port : " + port);
    });


module.exports = app;