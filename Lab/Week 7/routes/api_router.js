var express = require("express");
var ALLOWED_IPS = ["127.0.0.1", "123.456.7.89"];
var api = express.Router();
api.use(function(request, response, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(request.ip) !== -1;
    if (!userIsAllowed) {
        response.status(401).send("Not authorized!");
    } else {
        next();
    }
});
api.get("/users", function(request, response) { /* ... */});
api.post("/user", function(request, response) { /* ... */});
api.get("/messages", function(request, response) { /* ... */});
api.post("/message", function(request, response) { /* ... */});
module.exports = api;