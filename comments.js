// Create web server
// Accepts comments
// Responds with comments

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  //console.log(request);
  //console.log(response);
  response.writeHead(200, {"Content-Type": "text/plain"});

  if (request.method === 'POST') {
    var body = '';
    request.on('data', function(data) {
      body += data;
    });
    request.on('end', function() {
      console.log('POSTed: ' + body);
      fs.appendFile('comments.txt', body + '\n', function(err) {
        if (err) {
          response.end('Error: ' + err);
        } else {
          response.end('Comment posted.');
        }
      });
    });
  } else {
    fs.readFile('comments.txt', function(err, data) {
      if (err) {
        response.end('Error: ' + err);
      } else {
        response.end(data);
      }
    });
  }
});

// Listen on port 8000, IP defaults tos