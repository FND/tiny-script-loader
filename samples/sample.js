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
function loadScripts(t,e){if(t.length){var r=(t=t.slice()).shift(),i=loadScripts;i.loadScript(r,function(){t.length?i(t,e):e&&e()},function(){throw new Error("failed to load script "+r)})}else e&&e()}loadScripts.loadScript=function(e,t,r){var i=document,c="addEventListener",n=i.createElement("script");n[c]("load",t),r&&n[c]("error",r),e.substr?n.src=e:Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])}),i.head.appendChild(n)};

}());
/* eslint-enable */
