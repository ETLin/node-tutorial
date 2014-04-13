var fs = require('fs');
var express = require('express');
var host = '127.0.0.1';
var port = 5000;

express()
.set('view engine', 'ejs')
.use(express.bodyParser())
.get('/', function (req, res) {
  res.render('index', {title: 'File Upload Form'});
})
.post('/upload', function (req, res) {
  console.log(req.files);

  res.render('upload', {title: 'Upload', length: req.files.upload.size});
})
.listen(port, host);
