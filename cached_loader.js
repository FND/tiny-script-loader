import loadScripts from "./";

export default function Loader() {
	this._uris = {};
}

Loader.prototype.load = function(uri) {
	var index = this._uris;
	var prom = index[uri];
	if(!prom) {
		index[uri] = prom = new ExposedPromise();
		loadScripts([uri], function() {
			prom.resolve();
		});
	}
	return prom;
};

export function ExposedPromise(fn) {
	var _resolve, _reject;
	var prom = new Promise(function(resolve, reject) {
		_resolve = resolve;
		_reject = reject;

		if(fn) {
			fn(resolve, reject);
		}
	});

	prom.resolve = _resolve;
	prom.reject = _reject;
	return prom;
}
