const express = require("express"); //Requires the Express module
const http = require('http');

//Calls the express function to start a new Express application
const app = express();

app.use(function(request, response) { //middleware
    console.log("In comes a request to: " + request.url);
    response.end("Hello World!");
});

http.createServer(app).listen(3000); //start the server