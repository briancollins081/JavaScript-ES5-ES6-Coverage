//create a function
function greeting() {
	console.log('Hello');
}
// function with parameter

function greeting2(firstname) {
	console.log('Hello '+firstname+'!');
}
greeting2('Andere');

//function with more than one parameter
function sum(a,b) {
	return a+b;
}
var x = sum(6,4);
console.log(x);
//return a function
function greet(x) {
	return function(name) {
		console.log(x+" "+name+'?');
	}
}
greet("Hello")("Brian");
greet("Evening")("Brian");
console.log(greet('Hello'));