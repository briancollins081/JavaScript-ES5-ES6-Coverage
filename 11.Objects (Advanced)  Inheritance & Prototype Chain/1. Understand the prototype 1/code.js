//undst prototypes
//using object literal
var car={
	make:'Audi',
	model:'A3'
};

console.log(car);
console.log(car.hasOwnProperty('make'));
// using object constructor
var car2=new Object();
console.log(car2);
car2.make='Ford';
car2.model='Fiesta';
console.log(car2);
console.log(car2.__proto__);
console.log(Object.prototype);



