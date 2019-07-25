//function statement
function greet() {
	console.log('Hi!');
}
greet();
//function expression
var greet2=function () {
	console.log('Hello!');
}();

(function () {
	console.log('Hi!');
})();