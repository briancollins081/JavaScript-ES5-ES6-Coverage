console.log("ES6");
let y=2;

/*
	let variables are block scoped
	var variables are NOT block scoped
*/
{
	let x=1;
	let z=2;
	console.log(z);

}

{
	// console.log(x);//error
	let z=4;
	//no problems in redeclaration
	console.log(z);
	console.log(y);

}

//Scoping in ES5 using Immediately Invoked Functions Expressions
/*(function () {
	let x=1;
	let z=2;
	console.log(z);//2
});
(function () {
	let z=4;
	console.log(z);
	console.log(y);
})*/

let mark=10;
let pass=false;
if(mark > 50){
	pass = true;
}
console.log(pass);
