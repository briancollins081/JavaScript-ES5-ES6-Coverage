// function are objects
var greet=function testName(){
	console.log('Hi');
};
console.log(typeof greet);

console.log(greet instanceof Function);
console.log(Function.prototype);
console.log(Function);

var add=new Function('x','y','return x + y');//not recommendend
console.log(add);
console.log(add(3,5));
console.log(typeof add);

