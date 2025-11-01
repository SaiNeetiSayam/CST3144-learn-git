var http = require("http");
const chalk = require("chalk");

const {getCurrentTime, getServerStatus} = require("./helper");
var randomInt = require("./random-integer");

const randomNum = randomInt();

if (randomNum >= 1 && randomNum <= 33) {
    console.log(chalk.green(`Random Number: ${randomNum}`));
}
else if (randomNum >= 34 && randomNum <= 66) {
    console.log(chalk.yellow(`Random Number: ${randomNum}`));
}
else {
    console.log(chalk.red(`Random Number: ${randomNum}`));
}

const result = {
    currentTime: getCurrentTime(),
    serverStatus: getServerStatus(),
    randomNum: randomNum
};

const server = http.createServer((req, res) => {
    res.end(JSON.stringify(result));
    console.log(`Request received at ${getCurrentTime()} for ${req.url}`);
});

// Starts the server listening on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});