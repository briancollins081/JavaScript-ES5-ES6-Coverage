console.log(window);

//acess element by id
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
console.log(typeof p1);
console.log(p1);
console.log(p1.innerHTML);
console.log(p2);

//access a list of elements by tag name
var paragraphs=document.getElementsByTagName("p");
console.log(paragraphs);
console.log(typeof paragraphs);
//access prperties of one of these elements
console.log(paragraphs[1].innerHTML);
//first element with a certaion characteric
var firstParagraph=document.querySelector("p");
console.log(firstParagraph);
var firstGreenElement= document.querySelector(".green");
console.log(firstGreenElement);
//Access nodes children
var bodyChildren=document.body.children;
console.log(bodyChildren);
//add a ne child to the body
var p=document.createElement("p");
console.log(p);
var textNode=document.createTextNode("A new paragraph.");
p.appendChild(textNode);
console.log(p);
document.body.appendChild(p);
console.log(window.document);

//access sibling
var sibling=p1.nextElementSibling.nextElementSibling;
console.log(sibling);

//access firstchild or last child
var list=document.querySelector('ul');
console.log(list.firstChild);
console.log(list.lastChild);

//parent element
console.log(list.parentNode);
var bmw=list.querySelector('li');
console.log(bmw.parentNode);