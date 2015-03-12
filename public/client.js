var script = document.createElement("script");
script.onload = start;
script.src = "http://" + document.location.host.split(":")[0] + ":13337/socket.io/socket.io.js";;
document.body.appendChild(script);

function start() {
	var socket = io("http://localhost:13337/");
	socket.on("reload", function() {
		console.log("Reload styles")
		reloadStyles();
	});
}

function reloadStyles() {
	var links = document.querySelectorAll("link");
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		var href = link.href;

		var newHref = href + (href.indexOf("?") >= 0 ? "&" : "?") + "nocache=" + (new Date).getTime();
		link.setAttribute("href", newHref);
	}
}