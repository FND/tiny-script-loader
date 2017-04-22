/* eslint-disable indent, padded-blocks */
(function() {

// load polyfills as necessary
var polyfills = [];
if(!Object.assign) { // heuristic
	polyfills.push("polyfills/stdlib.js");
}
if(!window.Promise) {
	polyfills.push("polyfills/bluebird.core.js");
}
if(!window.fetch) {
	polyfills.push("polyfills/fetch.js");
}

if(polyfills.length) {
	loadScripts(polyfills, init);
} else {
	init();
}

function init() {
	// eslint-disable-next-line
	console.log("INITIALIZING APPLICATION", Object.assign, Promise, fetch);
}

// inlining `loader.min.js` to avoid a separate HTTP request
/* eslint-disable */
function loadScripts(t,r){if(!t.length)return void(r&&r());t=t.slice();var i=t.shift(),e=loadScripts;e.loadScript(i,function(){t.length?e(t,r):r&&r()},function(){throw new Error("failed to load script "+i)})}loadScripts.loadScript=function(t,r,i){var e=document,n="addEventListener",o=e.createElement("script");o[n]("load",r),i&&o[n]("error",i),o.src=t,e.head.appendChild(o)};
/* eslint-enable */

}());
