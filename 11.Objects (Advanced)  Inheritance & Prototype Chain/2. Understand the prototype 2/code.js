//prototype of own constructor
function phone(make, model, warranty, color) {
	this.make=make;
	this.model=model;
	this.warranty=warranty;
	this.color=color;
}

var myPhone=new phone('Apple','Iphone 5', 12, 'White');

// objects prototype
console.log(myPhone.__proto__);
//constructor prototype
console.log(phone.prototype);
