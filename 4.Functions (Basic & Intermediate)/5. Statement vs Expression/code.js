// function statement
console.log(sum(3,5));
function sum(a,b) {
	return a + b;
}

//function expression
var greet=function (name) {
	console.log('Hello '+name);
};
greet('Matthew');

function sum2(myFunction, myArray) {
	var result=0;
	for (var i = 0; i < myArray.length; i++) {
		result+=myFunction(myArray[i]);
	}
	return result;
}
var y=sum2(function (a) {
	return a*a;
}, [1,2,3,4]);

console.log(y);
