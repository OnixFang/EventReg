const express = require('express');
const path = require('path');
const events = require('./eventController.js');
const users = require('./userController.js');
const bodyParser = require('body-parser');

// Declaring server path and exress app
const rootPath = path.join(__dirname, '/../');
const port = 8000;
const app = express();

app.use(express.static(rootPath + '/app'));

// Enabling the server to parse json files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting the get and save methods for the server
app.get('/data/event/:id', events.get);
app.get('/data/event/', events.getAll);
app.post('/data/event/:id', events.save);

app.get('/data/user/:username', users.get);
app.post('/data/user/:username', users.save);

// Default page
app.get('*', function (req, res) { res.sendFile(rootPath + '/app/index.html'); });

// Setting the app to listen to the specified port
app.listen(port);
console.log('Listening on port 8000...');
