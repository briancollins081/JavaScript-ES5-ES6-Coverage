console.log("Functions and Block Scoping\n\n\n");
//create a separate scope in the global scope
/*{
	greet();//Hi
	function greet() {
		console.log("Hi");
	}
	greet();//Hi

	{
		function greet() {
			console.log('Hello');
		}
		greet(); // Hello
	}
	greet();//Hi
}
*/
greet();//Hi
function greet() {
	console.log("Hi");
}
greet();//Hi

{
	/*function greet() {
		console.log('Hello');
	}*/
	greet(); // Hello
	{
		function greet() {
			console.log("Hi There");
		}
	}
}
greet();//Hi
/*
	When a function call is wrapped within a block,
	It can not access the other functions within subblocks after its call
*/
{
	function greet() {
		console.log("Hi Hello");
	}
}
greet();
/*
	function call uses the preceeding block
*/
