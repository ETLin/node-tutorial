module.exports.index = function (req, res) {
  res.render('index', {title: 'File Upload Form'});
}

module.exports.upload = function (req, res) {
  console.log(req.files);

  res.render('upload', {title: 'Upload', length: req.files.upload.size});
}
