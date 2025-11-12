var http = require("http");

//Request handler
function requestHandler(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
}

//Creates a server that uses your function to handle requests
var server = http.createServer(requestHandler);

//Starts the server listening on port 3000
server.listen(3000);