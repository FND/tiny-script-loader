export default function loadStyles(uri) {
	var tmp = document.createElement("div");
	tmp.innerHTML = `<link rel="stylesheet" href="${uri}">`;
	document.head.appendChild(tmp.firstChild);
}
