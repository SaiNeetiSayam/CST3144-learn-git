function getCurrentTime() {
    return new Date();
}

function getServerStatus() {
    return {
        status: "online",
        uptime: process.uptime()
    };
}

module.exports = { getCurrentTime, getServerStatus };