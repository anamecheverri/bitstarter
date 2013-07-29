var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var texto = fs.readFileSync('index.html','utf-8');

app.get('/', function(request, response) {
 response.send(texto);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
