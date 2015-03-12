var http = require("http");
var url = require("url");
var fs = require("fs");
var watchr = require("watchr");

var socketIO = require("socket.io");

var PORT = 13337;

if (!process.argv[2]) {
	log("Usage: web-reloader path/to/directory/to/watch");
	process.exit();
}

var directory = process.argv[2];

var server = http.createServer(onRequest);

var io = socketIO(server);
io.on("connection", function(socket) {
	var ip = socket.request.connection.remoteAddress;
	log("New client (" + ip + ")");

	socket.on("disconnect", function() {
		log("Lost client (" + ip + ")");
	});
});

log("Starting server on port " + PORT)
server.listen(PORT);

watchr.watch({
	path: directory,
	catchupDelay: 100,
	listener: function (f, curr, prev) {
		console.log("Detected change");
		sendRefresh();
	}
});

function onRequest(request, response) {
	var requestUrl = url.parse(request.url);
	switch (requestUrl.pathname) {
		case "/refresh":
			sendRefresh();
			break;
		case "/":
			fs.createReadStream(__dirname + "/public/client.js").pipe(response);
			break;
	}
}

function sendRefresh() {
	log("Send refresh");
	io.emit("reload", {});
}

function log() {
	console.log.apply(console, arguments);
}
