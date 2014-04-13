var fs = require('fs');

module.exports.index = function (req, res) {
  res.render('index', {title: 'User Registration'});
}

module.exports.createUser = function (req, res) {
  var user = req.body;
  console.log(user);


  fs.readFile('./users.json', 'utf8', function (err, data) {
    var users = []
    if (!err) {
      users = JSON.parse(data);
    }
    
    user.id = users.length;
    users.push(user);
    fs.writeFile('./users.json', JSON.stringify(users), function (err) {
      if (err) { throw err; }

      res.json(user);
    });
  });
}
