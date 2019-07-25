//ES6
let x=1;
// you can not redeclare let variable
//unlike var

//scope
function add(y) {
	return x+y;
}
console.log(add(3));
//let variables can be accessed from inside functions 
//if declared in their outer environment like var case
function add2(y) {
	let x=2;
	return y+x;
}
console.log(add2(9));

// hoisting : let variables are not hoisted
// console.log(z);
//temperal dead zone
let z;
console.log(z);
z=1;
console.log(z);
