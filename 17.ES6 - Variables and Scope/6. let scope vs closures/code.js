/*for (var i = 0; i < 3; i++) {
	document.getElementById(i).addEventListener('click', function() {
		console.log(i);
	});
};*/

//ES5 SOLUTION : closure
/*var f=function (x) {
	return function() {
		console.log(x);
	}
};

for (var i = 0; i < 3; i++) {
	document.getElementById(i).addEventListener('click', f(i));
}//right value of i stored as f(0), f(1), f(2)
*/

//ES6 SOLUTION
// try with let
for (let i = 0; i < 3; i++) {
	document.getElementById(i).addEventListener('click', function() {
		console.log(i);
	});
};
// i get a new binding for every iteration using let variable