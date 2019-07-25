// a design pattern
var factorial=function (n) {
	var result=1;
	for (var i = n; i > 0; i--) {
		result *= i;
	}
	return result;
};
console.log(factorial(6));
//factorial of n = n*factorial(n-1)
var factorial2=function (n) {
	if(n == 1){
		return 1;
	}else{
		return n * factorial(n-1);
	}
}

console.log(factorial2(10))