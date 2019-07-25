//debouncing
var timeout;
document.addEventListener("mousemove", function (e) {
	clearTimeout(timeout);
	timeout=setTimeout(function(){
		console.log("Your current position:");
		console.log(e.pageX);
		console.log(e.pageY);
	}, 500);
});
