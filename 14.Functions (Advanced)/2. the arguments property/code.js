var add=function (x,y,z) {
	console.log(arguments);
	console.log(arguments.length);
	console.log(arguments[1]);
	if(arguments.length==0){
		console.log("please input arguments in the add function");
	}
	//missing param replace by zero
	x=x||0;
	y=y||0;
	z=z||0;
	return x+y+z;
};
var sum = add(8,9,10,11);
console.log(sum);

