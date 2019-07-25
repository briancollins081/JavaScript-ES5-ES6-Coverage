//This is an introduction to scope. More details can be found in the advanced sections.
function h(x){
	return x + c;
}
console.log(h(2)); //if c is defined after call of h it is undefined
var c = 4;
console.log(h(2)); //2+c
