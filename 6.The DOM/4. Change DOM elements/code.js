//change HTML content
var p1 = document.getElementById("p1");
p1.innerHTML = "Javascript is fun!";
var p2 = document.getElementById("p2");
p2.innerHTML +="This is number 2";
var p3 = document.getElementById("p3");
p3.textContent="Some new text!";
var link = document.getElementById("link");
link.setAttribute("href","http://localhost/phpmyadmin");

//chnging HTML styling
p1.style.backgroundColor = "pink";
p2.style.display="block";
p3.style.color="orange";
p3.style.position="fixed";
p3.style.top = "100px";
p3.style.left = "300px";
//add foreach to prototype of html Collection
HTMLCollection.prototype.forEach=Array.prototype.forEach;
//HTML Collection
var ulList=document.getElementsByTagName("ul");
ulList.forEach(function (element) {
	element.innerHTML += "<li>Ford</li>"
});

var green = document.getElementsByClassName("green");
green.forEach(function (element) {
	element.style.color="blue";
});

//remove an element from parent
var list1 = document.getElementById('list1');
var item1 = document.getElementById('item1');
list1.removeChild(item1);

//build a method remove: remove any element from the dom
Element.prototype.remove=function() {
	this.parentElement.removeChild(this);
}
list1.remove();