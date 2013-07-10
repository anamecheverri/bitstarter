var express = require('express');

var fs = require('fs')

var app = express.createServer(express.logger());

var myfile = fs.readFileSync("index.html")

var texto = myfile.tostring()
app.get('/', function(request, response) {
 response.send(texto);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
