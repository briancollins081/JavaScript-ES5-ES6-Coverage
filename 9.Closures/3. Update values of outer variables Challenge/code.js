var n;
function f(x) {
	n=function () {
		return x;
	};
	x++;
}
f(123);
console.log(n());