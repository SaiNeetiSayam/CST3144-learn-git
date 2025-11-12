// Rwquires the modules needed
var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();

//the same logging middleware as before
app.use(function(req, res, next) {
    console.log("Request IP: "+ req.url);
    console.log("Request date: "+new Date());
    next();
});

app.use(function(request, response, next){
    // Uses path.join to find path where the file should be
    var filePath = path.join(__dirname, "static", request.url);
    // Built-in fs.stat gets info about a file
    fs.stat(filePath, function(err, fileInfo) {
        if (err) {
            next();
            return;
        }
        if (fileInfo.isFile()) response.sendFile(filePath);
        else next();
    });
});

// There is no 'next' argument becuase this is the last middleware.
app.use(function(request, response){ 

    // Sets the status code to 404
    response.status(404);

    // Sends the error "File not found!"
    response.send("File not found!");
});

// Starts the app on port 3000 and display a message when it’s started
app.listen(3000, function() {
    console.log("App started on port 3000");
});