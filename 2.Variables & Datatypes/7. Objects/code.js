//Objects
//collection of properties
var myPhone = {
	make:"Apple",
	model:"Iphone",
	warranty: 12,
	color: "gold"
}

console.log(myPhone);
console.log(myPhone.model);

//chnage a property
myPhone.model="Iphone 6";
console.log(myPhone);
//add new property
myPhone.storage="64 Go";
console.log(myPhone);

//delete a property
delete myPhone.storage;
console.log(myPhone);

//somethig else with primitives
var x=1;
var y=x; //y=1
x=2;
console.log(y);

//with objects
var myOtherPhone=myPhone;
console.log(myOtherPhone);
//chnage my myPhone
myPhone.color="White";
console.log(myPhone);
console.log(myOtherPhone);