'use strict';
const fs = require('fs');

function get(req, res) {
  const event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(event);
}

function save(req, res) {
  const event = req.body;
  fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
  res.send(event);
}

// function getAll(req, res) {
//   const events = fs.readdirSync('app/data/event/');
//   res.setHeader('Content-Type', 'application/json');
//   res.send(events);
// }

function getAll(req, res) {
  const path = 'app/data/event/';

  let files = [];

  try {
    files = fs.readdirSync(path);
  } catch (e) {
    res.send('[]');
    res.end();
  }

  let results = '[';

  for (let idx = 0; idx < files.length; idx += 1) {
    if (files[idx].indexOf('.json') === files[idx].length - 5) {
      results += fs.readFileSync(path + '/' + files[idx]) + ',';
    }
  }

  results = results.substr(0, results.length - 1);
  results += ']';

  res.setHeader('Content-Type', 'application/Json');
  res.send(results);
  res.end();
}

module.exports.get = get;
module.exports.save = save;
module.exports.getAll = getAll;
