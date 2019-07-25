/*for (var i = 0; i < 3; i++) {
	document.getElementById(i).onclick=function () {
		console.log(i);
	}
}*/

for (var i = 0; i < 3; i++) {
	document.getElementById(i).onclick=f(i);
}
function f(t) {
	return function () {
		console.log(t);
	}
}