//elements
var button1=document.getElementById("button1");
var img=document.querySelector("img");
// mousedown event
button1.addEventListener('mousedown',fmousedown);
function fmousedown(event) {
	console.log(event);
	console.log(event.which);
}

// mousemove event
addEventListener("mousemove", fmousemove);
function fmousemove(event) {
	img.style.left = event.pageX + "px";
	img.style.top = event.pageY + "px";
}

//mouseup event
addEventListener("mouseup", fmouseup);
function fmouseup(event) {
	var img2=document.createElement("img");
	img2.setAttribute("src","butterfly.png");
	img2.setAttribute("height",40);
	img2.setAttribute("widht",40);
	img2.style.position="fixed";
	document.body.appendChild(img2);
	img2.style.left = event.pageX + 'px';
	img2.style.top = event.pageY + 'px';
}