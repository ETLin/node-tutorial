var http = require('http');

http.createServer(function (req, res) {
    res.statusCode = 200;// 304
    res.end('fromHttpServer');
}).listen(5000);
