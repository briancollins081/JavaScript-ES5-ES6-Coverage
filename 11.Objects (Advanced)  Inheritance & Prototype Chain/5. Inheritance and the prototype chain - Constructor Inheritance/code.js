//superClass
function phone(make, model, warranty, color) {
	this.make=make;
	this.model=model;
	this.warranty=warranty;
	this.color=color;
};
phone.prototype={
	extendWarranty:function(x) {
		this.warranty+=x;
	}
}
//subClass
function smartPhone(make, model) {
	this.make=make;
	this.model=model;
}
//subClass instance
var myPhone=new smartPhone('Apple', 'Iphone 6');
console.log(myPhone);
console.log(smartPhone.prototype);
console.log(myPhone instanceof smartPhone);
console.log(myPhone instanceof Object);
//add one method to the prototype
smartPhone.prototype.endWarranty=function () {
	this.warranty=0;
};
myPhone.endWarranty();
console.log(myPhone);
//inherit everything from phone: constructor content only
/*smartPhone.prototype.helper=phone;
smartPhone.prototype.helper('Sumsung',
	'S6', 12, 'Gray');*/

//inherit everything from phone
smartPhone.prototype=new phone('Samsung','S7',12,'Gray');
smartPhone.prototype.constructor=smartPhone;
// new instanceof smartPhone
var myPhone2=new smartPhone('Apple','Iphone 7');
console.log(myPhone2);
console.log(myPhone2.color);
console.log(myPhone2.warranty);
myPhone2.extendWarranty(12);
console.log(myPhone2.warranty);
//is the constructor still there?
console.log(smartPhone.prototype);