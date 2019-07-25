var div=document.querySelector("div");
var p=document.querySelector("p");
var span=document.querySelector("span");

//functions
function logDiv() {
	console.log('Div');
}
function logParagraph() {
	console.log('Paragraph');
}
function logSpan() {
	console.log('Span');
}

//event handlers
div.addEventListener("click", logDiv, true);
p.addEventListener("click", logParagraph, true);
span.addEventListener("click",logSpan);