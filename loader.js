var loadScripts = (function() {

// NB: there doesn't seem to be a reliable way to prefetch scripts while
//     executing them in order - cf. http://stackoverflow.com/a/17979532
return function loadScripts(uris) {
	uris = uris.slice();
	var uri = uris.shift();
	loadScript(uri, function() {
		uris.length && loadScripts(uris);
	}, function() {
		throw new Error("failed to load script " + uri);
	});
};

// NB: not supported by IE 8 and below (see RequireJS source for details)
function loadScript(uri, onLoad, onError) {
	var node = document.createElement("script");

	node.addEventListener("load", onLoad);
	if(onError) {
		node.addEventListener("error", onError);
	}

	node.src = uri;
	document.head.appendChild(node);
}

}());