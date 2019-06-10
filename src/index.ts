/**
 * Author: choudhary
 * Date: 10/6/19
 */

import express = require('express');

const PORT = process.env.port || 8080;

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
