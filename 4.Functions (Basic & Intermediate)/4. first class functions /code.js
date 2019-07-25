//store a value/function in a var
var sumFunction=function (a,b) {
	return a+b;
}
console.log(sumFunction(1,3));

//use values to set object properties
var myPhone = {
	make:'Android',
	model:'Techno',
	warranty:12,
	color:'gold',
	showWarrantyDetails: function(){
		console.log('This phone comes with a '+this.warranty+' months warranty!');
	}
}
myPhone.showWarrantyDetails();

//pass functions to functions
function f(x) {
	//return Math.pow(x,2);
	return x*2;
}
function g(myFunction, a,b) {
	return myFunction(a)+myFunction(b);
}
console.log(g(f,3,4));

//function return a function
function add(x) {
	return function (a) {
		return a + x;
	}
}
var addOne=add(1);
console.log(addOne(3));
var addTwo=add(2);
console.log(addTwo(3));