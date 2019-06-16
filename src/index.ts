/**
 * Author: choudhary
 * Date: 10/6/19
 */

import express = require('express');
import parser = require('body-parser');

import Router from './routes';

const PORT = process.env.port || 8080;

// Create a new express application instance
const app: express.Application = express();

app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());

app.use('/', Router);

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
