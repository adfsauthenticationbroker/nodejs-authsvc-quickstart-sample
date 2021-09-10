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
const http = require('http');

/* Make all variables from our .env file available in our process */
require('dotenv').config();

/* Add timestamp to log - console.log */

/* Init express */
const app = express();

/* Here we setup the middlewares & configs */
app.use(bodyParser.urlencoded({ extended: false }));

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