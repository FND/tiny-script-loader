// NB:
// * not supported by IE 8 and below (see RequireJS source for details)
// * there doesn't seem to be a reliable way to prefetch scripts while
//   executing them in order - cf. http://stackoverflow.com/a/17979532
export default function loadScripts(uris, callback) {
	if(!uris.length) { // for API convenience
		if(callback) {
			callback();
		}
		return;
	}

	uris = uris.slice();
	var uri = uris.shift();
	var load = loadScripts; // assists minification
	load.loadScript(uri, function() {
		if(uris.length) {
			load(uris, callback);
		} else if(callback) {
			callback();
		}
	}, function() {
		throw new Error("failed to load script " + uri);
	});
}

loadScripts.loadScript = function(uri, onLoad, onError) {
	// assist minification
	var doc = document;
	var ael = "addEventListener";

	var node = doc.createElement("script");

	node[ael]("load", onLoad);
	if(onError) {
		node[ael]("error", onError);
	}

	node.src = uri;
	doc.head.appendChild(node);
};
