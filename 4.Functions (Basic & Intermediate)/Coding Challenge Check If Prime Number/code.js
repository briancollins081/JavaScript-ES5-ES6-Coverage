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


function isPrime(argument) {
	var isPrime=true;
	var smallestDivisor=1;
	if(no<=1){
		isPrime=false;
	}else if(no == 2){
		isPrime=true;
	}else{
		for (var i = 2; i < no; i++) {
			if(no%i == 0){
				isPrime = false;
				smallestDivisor=i;
				break;
			}
		}
	}

	if(!isPrime){
		console.log(no+" is not a Prime Number but it can be divided by: "+i);
		if(no > 1){

		}
	}else{
		console.log(no+" is Prime Number");
	}
}

isPrime(no);