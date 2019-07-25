function add1() {
	var x=1;
	var f=function (y) {
		return y+x;
	};
	return f(3);
}
console.log(add1());

//try
var add=function () {
	var x=1;
	var f=function (y) {
		return y+x;
	};
	return f;
};

var g=add();
console.log(g(2));

//add three
var addThree=function (x) {
	var z=3;
	var f=function (y) {
		return z+x;
	}
	return f;
}
var a=addThree(9);
console.log(a());

//add three
var add=function (x) {
	var f=function (y) {
		return x + y;
	}
	return f;
}
var addThree=add(3);
console.log(addThree(20));