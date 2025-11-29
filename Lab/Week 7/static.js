var express = require("express");
var path = require("path");
var http = require("http");
var app = express();

// Sets up the path where your static files are
var publicPath = path.resolve(__dirname, "public");
// Sends static files from the publicPath directory
app.use(express.static(publicPath));

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});
http.createServer(app).listen(3000);
