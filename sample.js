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

// inlining `loader.js` to avoid a separate HTTP request
/* eslint-disable */
function loadScripts(t,e){t=t.slice();var r=t.shift();loadScript(r,function(){t.length?loadScripts(t,e):e&&e()},function(){throw new Error("failed to load script "+r)})}function loadScript(t,e,r){var n=document.createElement("script");n.addEventListener("load",e),r&&n.addEventListener("error",r),n.src=t,document.head.appendChild(n)}
/* eslint-enable */

}());
