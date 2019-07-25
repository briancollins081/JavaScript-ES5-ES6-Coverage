//prompt
//var x = prompt('Please input your age: ');
//console.log(x);

//alert('Hello!');

// eval
eval("var a = 1;")

console.log(a);

//time functions

//setInterval
var x=0;
function count() {
	console.log(x);
	x ++;
	if(x==5){
		clearInterval(counter);
	}
}
var counter = setInterval(count, 1000);

setTimeout(function() {
	console.log("I have been waiting for 3 seconds")
}, 3000);
