var http = require('http');
var fs = require('fs');
var host = '127.0.0.1';
var port = 5000;

http.createServer(function (req, res) {
  fs.readFile('./package.json', 'utf8', function (err, data) {
    if (err) { throw err; }
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  });
}).listen(port, host);
