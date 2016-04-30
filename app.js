var http = require('http');
var express = require('express') //.createServer(); // 
var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/templates/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;
var listener = server.listen(port, function() {
  var host = server.address().address;
  console.log('Audio Compass app listening at http://%s:%s', host, port);
});