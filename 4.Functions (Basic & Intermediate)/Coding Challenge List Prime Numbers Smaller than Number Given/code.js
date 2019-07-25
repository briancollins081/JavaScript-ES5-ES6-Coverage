// Check if a number is prime or not
//1. Prompt the user to input a whole number
//var no=prompt("Enter a whole number");
//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one
var no;
do{
	no=prompt("Enter a whole number");
}while(no%1 != 0);
//3. calculate the number of prime numbers smaller 
// than number and print them.
function isPrime(n) {
	if(n<=1){
		return false;
	}else if(n==2){
		return true;
	}else{
		var i=2;
		while(i<n && (n%i != 0)){
			i++;
		}
		if(i==n){
			return true;
		}else{
			return false;
		}
	}
}
// calculate number of prime numbers smaller than number
printPrimes(no)
function printPrimes(max) {
	var counter = 0;
	var i=2;
	var list = '';
	while(i < max){
		if(isPrime(i)){
			counter ++;
			list += i + ' ';
		}
		i++;
	}
	console.log('The are '+counter+' prime numbers smaller than '+max);
	counter>0 ? console.log(list): '';
}