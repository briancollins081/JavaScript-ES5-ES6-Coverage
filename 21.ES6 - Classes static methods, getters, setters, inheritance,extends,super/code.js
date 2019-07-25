/*******************************************************
*****************1.Back to ES5 Constructors*************
********************************************************
********************************************************/
// ES5
// super class
function phone(make, model, warranty, color) {
	this.make=make;
	this.model=model;
	this.warranty=warranty || 24;
	this.color=color || 'white';
}
phone.prototype={
	extendWarranty:function (x) {
		this.warranty += x;
	}
};
// subclass - method 1
/*function smartPhone(make, model, OS) {
	// this.make=make;
	// this.model=model;
	this.OS=OS;
	phone.call(this, make,model);
}
var mySmartphone = new smartPhone('Apple','Iphone 8','IOS 12');
// console.log()
console.log(mySmartphone);
console.log(mySmartphone.extendWarranty); //undefined
*/

// subclass - method 2
function smartPhone(make, model, OS) {
	this.make=make;
	this.model=model;
	this.OS=OS;
}
smartPhone.prototype=new phone('Samsung', 'S6');
smartPhone.prototype.constructor=smartPhone; //preserve the constructor

var mySmartphone = new smartPhone('Apple','Iphone 8','IOS 12');
// console.log()
console.log(mySmartphone);
console.log(mySmartphone.extendWarranty);
console.log(mySmartphone.extendWarranty(10));
console.log(mySmartphone);

/*******************************************************
*******************2.ES6 Classes Syntax*****************
********************************************************
********************************************************/
class phone6{
	constructor(make, model, warranty, color) {
		this.make=make;
		this.model=model;
		this.warranty=warranty || 24;
		this.color=color || 'white';
	}
	extendWarranty(x){
		this.warranty+=x;
	}
};
const myPhone6 = new phone6('Apple', 'Iphone 7', 11, 'black');
console.log(myPhone6);
console.log(typeof phone6); // function

/*******************************************************
*********************3.Static methods*******************
********************************************************
********************************************************/
class phone7{
	constructor(make, model, warranty, color) {
		this.make=make;
		this.model=model;
		this.warranty=warranty || 24;
		this.color=color || 'white';
	}
	extendWarranty(x){
		this.warranty+=x;
	}
	static defaultPhone(){
		return new phone6('Techno','WXP3');
	}
};
const myPhone7 = new phone7('Apple', 'Iphone 7', 11, 'black');
console.log(myPhone7.defaultPhone); //undefined - not attached to instance
console.log(phone7.defaultPhone); // function
console.log(phone7.defaultPhone());

console.log(Object.create);
const obje={name:'John'};
console.log(obje.create); // undefined since it is static 

/*******************************************************
********************4.Getters & Setters*****************
********************************************************
********************************************************/
class phone8{
	constructor(make, model, _warranty, color) {
		this.make=make;
		this.model=model;
		this._warranty=_warranty || 24;
		this.color=color || 'white';
		this.log = [];
	}
	extendWarranty(x){
		this._warranty+=x;
	}
	static defaultPhone(){
		return new phone6('Techno','WXP3');
	}
	// setter
	set warranty(x){
		this.log.push(`warranty set to ${x}`);
		this._warranty=x;
	}
	//getter
	get warranty(){
		console.log(`get warranty called`);
		return this._warranty;
	}
};
const myPhone8 = new phone8('Apple', 'Iphone 7', 11, 'black');
myPhone8.warranty = 30; //calls setter
myPhone8.warranty = 40; //calls setter
myPhone8.warranty = 30; //calls setter
console.log(myPhone8.warranty);//calls getter
console.log(myPhone8.log);

/*******************************************************
*********5.Class Inheritance - extends - super()********
********************************************************
********************************************************/
class smartPhone8 extends phone8{
	constructor(make, model, OS){
		super(make,model);
		this.OS=OS;
	}
	extendWarranty(x){
		super.extendWarranty(x);
	}
}
const mySmartphone8 = new smartPhone8('Techno','WXP3','Android');
console.log(mySmartphone8);
mySmartphone8.extendWarranty(10);
console.log(mySmartphone8);

console.log(mySmartphone8 instanceof smartPhone8); // true
console.log(mySmartphone8 instanceof phone8); // true
