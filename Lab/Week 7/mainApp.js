var express = require("express");
var path = require("path");

// require your router (defined on the next page)
var apiRouter = require("./routes/api_router");

var app = express();
var staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

// use your router
// any URL that starts with '/api' will be sent to api 'apiRouter',
// such as '/api/users' and '/api/message'
app.use("/api", apiRouter);

app.listen(3000);