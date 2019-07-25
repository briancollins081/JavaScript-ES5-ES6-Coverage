var person1={
	firstname:'Andere',
	lastname:'Brian',
	speak:function () {
		console.log('Hi! This is '+this.firstname+' '+this.lastname+'.');
	}
};
var person2={
	firstname:'Edwin',
	lastname:'Josh'
};
/*person2.speak=person1.speak;
person2.speak();*/

person1.speak.call(person2);

//method call working
function greet(){
	console.log('Hello '+this.name);
}
// greet();
var person={
	name:'Marcern'
}
greet.call(person);
person1.speak();
var func = person1.speak;
console.log(func);
func.call(person2);

//superClass
function phone(make,model,warranty, color) {
	this.make=make;
	this.model=model;
	this.warranty=warranty||12;
	this.color=color;
	this.extendWarranty=function (x) {
		warranty+=x;
	}
};
//subClass
function smartPhone(make, model, operator) {
	this.make=make;
	this.model=model;
	this.operator=operator;
};

// subClass instance
var myPhone=new smartPhone('Apple', 'Iphone6','Orange');
console.log(myPhone);
// smartPhone.prototype=new phone();
// extend superClass only in object not class
phone.call(myPhone,myPhone.make, myPhone.model);
console.log(myPhone);
