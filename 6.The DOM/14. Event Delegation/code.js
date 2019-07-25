// elements
var div = document.querySelector("div");
var paragraphs=document.querySelectorAll('p');
console.log(paragraphs);
// function
function logHello() {
	console.log("Hello");
}
//attaching events to html elements
// for (var i = 0; i <paragraphs.length; i++) {
// 	paragraphs[i].addEventListener("click",logHello);
// }

// Get parent element & add click listener
div.addEventListener('click', function (event) {
	if(event.target && event.target.nodeName == "P"){
		//paragraph found
		console.log(event.target.innerHTML+'CLICKED!');
	}
});

// add new paragraph
var paragraph=document.createElement("p");
paragraph.innerHTML="Paragraph 4.";
div.appendChild(paragraph);