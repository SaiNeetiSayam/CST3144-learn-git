var http = require("http");

const {getCurrentTime, getServerStatus} = require("./helper");

const result = {
    currentTime: getCurrentTime(),
    serverStatus: getServerStatus(),
};

const server = http.createServer((req, res) => {
    res.end(JSON.stringify(result));
    console.log(`Request received at ${getCurrentTime()} for ${req.url}`);
});

// Starts the server listening on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});