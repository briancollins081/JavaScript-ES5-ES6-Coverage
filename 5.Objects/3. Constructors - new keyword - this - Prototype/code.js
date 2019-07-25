//generic object constructor
var myPhone = new Object();
// var myPhone = {};
myPhone.make="Samsung";
myPhone.model="Galaxy S7";
myPhone.warranty="12";
myPhone.colour="black";

console.log(myPhone);

//Constructors
function phone(make, model, warranty, colour){
	this.make=make;
	this.model=model;
	this.warranty=warranty;
	this.colour=colour;
}
//phone object
var myNewPhone = new phone("Apple","Iphone 5", 12, "White");
console.log(myNewPhone);
//myNewPhone.extendWarranty(12);
console.log(myNewPhone);

//add a new property
myNewPhone.condition = 'like new';
console.log(myNewPhone);

// a new phone
myOtherPhone= new phone("Apple","Iphone 6", 8, "Grey");
console.log(myOtherPhone);

// add a condtion prop to all phones
phone.prototype.ring = function(){
	console.log('beep beep beep!');
};
phone.prototype.extendWarranty = function (x) {
	this.warranty += x;
};
phone.prototype.condtion = 'brand new';

myMothersPhone= new phone("Samsung","Galaxy S6", 18,"Red");
console.log(myMothersPhone);
console.log(myMothersPhone.condtion);
console.log(phone.prototype);
myMothersPhone.ring();