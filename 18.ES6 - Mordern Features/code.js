/*****************************************************/
/*****************1.Template Literals*****************/
/*****************************************************/

// ES5
var firstname = 'Bill';
var lastname = 'Gates';

console.log('Hello '+firstname+' '+lastname+'!');

//ES6 - Template Literals
console.log(`Hello ${firstname} ${lastname} !`);

//NEW LINES
// ES5
var text5 = 'Here is \na new line';
console.log(text5);
// ES6
const text6 = `Here is 
a new line`;
console.log(text6);

/*****************************************************/
/***************2.Arrow FUnctions - this**************/
/*****************************************************/
//Attach an event listener to first button
//ES5
document.getElementById('0').addEventListener('click',function () {
	console.log('ES5');
}); 
//ES6
document.getElementById('1').addEventListener('click',() => {
	console.log('ES6');
});

var list = [1,3];

// ES 5 list

var list1 = list.map(function (x) {
	return x * 2;
});
console.log(list1);

// ES 6
const list2 = list.map((x)=>{
	return x * 2;
});
console.log(list2);
// Alternative simplified method
const list3 = list.map(x => x * 2);
console.log(list3);

//using this - scope
//ES5
document.getElementById('2').addEventListener('click',function () {
	console.log(this.innerHTML);
});
// ES6
document.getElementById('3').addEventListener('click',() => {
	console.log('ES6');
});


// Another example
// ES 5
var player5 = {
	name: 'John',
	click: function () {
		var player = this;

		document.getElementById('4').addEventListener('click',function () {
			console.log(player.name);
		});
	}
};
player5.click();

//ES6
var player6 = {
	name: 'John',
	click: function () {
		document.getElementById('5').addEventListener('click',() => {
			console.log(this.name);
		});
	}
};
player6.click();

/*****************************************************/
/***************2.Destructuring Arrays****************/
/*****Allows us ro extract data from Arrays***********/
/*****************************************************/
//ES5
var x=1;
var y=2;

//ES6
/*const [a, b] = [3, 4]; 
console.log(a);
console.log(b);*/

//process return values in array format
function processString(x) {
	return [x,x.length];
}
// Destructuring to store independent entities
console.log(processString('Hello'));
const[value, length]=processString('Hello');
console.log(value);
console.log(length);

// Swap the values of c & d
/*var c=1;
var d=2;

// ES5
var e=c;
c=d;
d=e;

console.log(c, d);*/

// ES 6 - destructuring
let [c,d]=[1,2];
[c,d]=[d,c];
console.log(c, d);

// ES6 - Default values - Destructuring
//let lst=['Nairobi', 'Kenya'];
let lst=['Nairobi'];
lst=['Kismayu', 'Tanzania'];
let [citty, countrry = 'USA'] = lst;
console.log("ES6: ", citty, countrry);
// ES5
/*var city = lst[0];
var country = lst[1]===undefined ? 'USA':lst[1];
console.log("ES5: ",city, country);*/

/*****************************************************/
/***************2.Destructuring Objects****************/
/*****Allows us ro extract data from Objects***********/
/*****************************************************/
// ES6
const person = {
	name:'Brian',
	age: 41
};
const {name: n, age: a} = person;
console.log(n, a);

// deep matching
const {country: cnt, address:{postcode: p,housenumber:hn}}=
{country: 'KE', address:{postcode: 'E34459',housenumber:1}};
console.log(cnt, p, hn);

// const {name:name, age:age}=person; same as 
const {name, age} = person;
console.log(name, age);

//ES6 Default values with Objects
const obj={city: 'London', country:'UK'};
// const {city: city, country: country='USA'}=obj;
const {city, country='USA'}=obj;
console.log(city, country);
//ES6 Default values with Objects
/*if(obj.country === undefined){

}else{

}
*/


// Using object restructuring to define array values
function procString(x) {
	return {value1: x, length1: x.length};
};
const {value1, length1} = procString('Millow Meaw Meaw');
console.log(value1, length1);

/*****************************************************/
/*********2.Destructuring with Functions**************/
/*****Allows us to extract data from Functions********/
/*****************************************************/
// ES5
function f(arr) {
	console.log('Hello '+arr[0]+' '+arr[1]);
}
f(['Bill','Gates']);

// ES6 - Parameter matching
function g([firstname, lastname]) {
	console.log(`Hello ${firstname} ${lastname}`);
}
g(['Henry','Merlin']);

/*function h({firstname: firstname, lastname:lastname}) {
	console.log(`Hello ${firstname} ${lastname}!`);
}*/
function h({firstname, lastname}) {
	console.log(`Hello ${firstname} ${lastname}!`);
}

h({firstname:'Marry', lastname:'Lichpen'});

/*****************************************************/
/********2.Functions Default Parameter Values*********/
/*****************************************************/
/*****************************************************/
// ES5
function increment(x,y) {
	return (y===undefined)? (x + 1) : x + y;
}
console.log(increment(5));
console.log(increment(5,8));
// ES6
const increment2 = (x,y = 1) => x + y;
console.log(increment(5));
console.log(increment(5,8));


//using destructuring
function greet([firstname, lastname='']) {
	console.log(`Hello ${firstname} ${lastname}!`);
};
greet(['Brian']);

// Destructuring with an object
/*function addup({item:item, price:price, quantity:quantity}) {
	console.log(`Please pay $${price * quantity} for ${quantity} ${item}`);	
}*/
function addup({item = '', price = 0, quantity = 0} = {}) {
	console.log(`Please pay $${price * quantity} for ${quantity} ${item}`);	
}
addup({item:'Bananas', price: 5, quantity:5});

addup({item:undefined, price: 25, quantity:20});
addup();

/*****************************************************/
/********2.Functions Rest Parameters******************/
/*****************************************************/
/*****************************************************/
// ES5
function printAll() {
	var arr=[];
	for(var i = 0; i< arguments.length; i++){
		arr.push(arguments[i]);
	}
	return arr;
}
console.log(printAll(1,2));

// ES6 - using rest parameters ...rest operator
function printAll2(x, ...y) {
	console.log(x);
	console.log(y);
}
printAll2(1,2,3,4,5,6,7,8,9);

// ****************COURSE PROBLEM***********************
// function pcheck param firstname, lastname, 
// optional param
//Log to console 
	// Passenger: firstname lastname
	// Belongings: item1,item2, item3, ...

// ****************ES5 solution*******************
function pcheckES5(firstname, lastname) {
	console.log(`Passenger: ${firstname} ${lastname}`);
	
	var bel = []
	for(var i = 0; i< arguments.length; i++){
		bel.push(arguments[i]);
	}
	bel = bel.slice(2);
	console.log('Belongings: '+bel.toString());
}
pcheckES5('Collins','Andere','Earphones','Pen-Knife', 'Screw Driver Pack');

// *******************ES6 solution*****************
function pcheckES6(firstname, lastname, ...belongings) {
	console.log(`Passenger: ${firstname} ${lastname}`);
	console.log('Belongings: '+(belongings.length > 1 ? belongings.toString() : 'None'));
}
pcheckES6('Brian','Andere','Earphones','Pen-Knife', 'Screw Driver Pack');
pcheckES6('Brian','Andere');

/*****************************************************/
/*******************Spread Operators******************/
/*****************************************************/
/*****************************************************/

console.log(Math.min(6,1,7,3,4));
console.log(Math.min([6,-10,7,3,4])); //NaN

// ES5
console.log(Math.min.apply(null, [6,-10,7,3,4])); //-10

// ES6 - use spread operator
console.log(Math.min(...[6,-10,7,3,4]));

x=[3,4,17,-4];
console.log(Math.max(1,3,...x,19));

// inject elements of an array into another array
let newArr=[4,5,6,17,18,10];
console.log([1,2,5, ...newArr,60]);

/*****************************************************/
/*******************Object Literals******************/
/*****************************************************/
/*****************************************************/
// ES 5
var phone = {
	ring: function (i) {
		console.log("Beep ".repeat(i));
	}
};
phone.ring(5);
// ES6
const phone1ES6 = {
	ring(i){
		console.log("Beep ".repeat(i));
	}
};

const t='make';
function g() {
	return 'ring';
};
const phone2ES6 = {
	[t]: 'Samsung',
	[g()](i){
		console.log("Beep ".repeat(i));
	}
};
console.log(phone2ES6);
console.log(phone2ES6.ring(2));

//new object methods: assign
Object.assign(phone2ES6, {warranty: 24});
console.log(phone2ES6);
