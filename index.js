var fs = require('fs');

fs.readFile('./package.json', function (err, data) {
  if (err) { throw err; }
  console.log('Your project name is ' + data.name + ' with keywords ' + data.keywords);
  // console.log('---');
  // console.log(data);
});
