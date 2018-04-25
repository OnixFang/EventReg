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

function getAll(req, res) {
  const events = fs.readdirSync('app/data/event/');
  res.setHeader('Content-Type', 'application/json');
  res.send(events);
}

module.exports.get = get;
module.exports.save = save;
module.exports.getAll = getAll;
