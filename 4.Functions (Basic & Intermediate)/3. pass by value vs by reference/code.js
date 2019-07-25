//outside functions
var a = 1;
var b = a; // b=1

a++; //a=2
console.log(a);
console.log(b);

var house1={
	type: "terraced",
	town: "Nakuru"
}
var house2=house1;
house1.town="Nairobi";
console.log(house1);
console.log(house2);

//functions
var c=1;

// pass by value
//function that adds one to copy of x
function addOne(x) {
	x++;
}
addOne(c);
console.log(c); //c still one 

function add1() {
	c++;
}
add1();
console.log(c);

//pass by reference
var person1={
	name: "Brian",
	age: 12
}
var person2=person1;
function addYear(person) {
	person.age ++;
}
addYear(person1);
console.log(person1);
console.log(person2);