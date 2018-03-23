const fs = require('fs');

function get(req, res) {
  const user = fs.readFileSync('app/data/user/' + req.params.username + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(user);
}

function save(req, res) {
  const user = req.body;
  fs.writeFileSync('app/data/user/' + req.params.username + '.json', JSON.stringify(user));
  res.send(user);
}

module.exports.get = get;
module.exports.save = save;
