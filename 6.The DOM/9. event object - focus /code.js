//focus
var input = document.querySelector("input");
input.addEventListener("focus",ffocus);
function ffocus(event) {
	console.log(event);
	console.log(event.target.value);
}