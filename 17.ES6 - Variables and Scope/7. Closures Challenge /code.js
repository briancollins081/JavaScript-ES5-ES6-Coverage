// create an empty array.
//Using for loop insert three functions logging 
//their corresponding index inside the array.

//ES6
let f=[];
for(let v=0; v<3; v++){
	f.push(function () {
		console.log(v);
	});
}
f[0]();
f[1]();
f[2]();
//ES5
var f2=[];
var funct=function(x) {
	return	function() {
		console.log(x);
	}
}
for(var v=0; v<3; v++){
	f2.push(funct(v));
}
f2[0]();
f2[1]();
f2[2](); 