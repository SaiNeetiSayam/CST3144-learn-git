var express = require("express");
var http = require("http");
var app = express();

//the same logging middleware as before
app.use(function(request, respeonse, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});

app.use(function(request, response, next){
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0){ // continue if it is on a even minute 
        next();
    } else { //otherwise responds with an error code and stops 
        response.statusCode = 403;
        response.end("Not authorized.");
    }
});

app.use(function(request, response){ // only run is authorized
    response.end('Secret Info: Password is "Swordfish"');
});

http.createServer(app).listen(3000);