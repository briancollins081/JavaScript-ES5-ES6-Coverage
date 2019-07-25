//create a function that will return an empty clone of an object without using object.create
var phone1={
	make:'Apple', 
	model:'Iphone 7', 
	warranty:12,
	extendWarranty:function(x) {
		this.warranty+=x;
	}
};

/*function clone(object) {
	var newObject=new Object();
	for(var i in object){
		newObject[i]=object[i];
	}
	return newObject;
}
var myPhone=phone1;
console.log(myPhone);
var clonedPhone=clone(phone1);
console.log(clonedPhone);*/

function clone(object) {
	var C = function(){};
	C.prototype=object;
	return new C;
}
var phone2=clone(phone1);
console.log(phone2);
console.log(phone2.make);
console.log(phone2.warranty);
phone2.extendWarranty(12)
console.log(phone2.warranty);

for(var i in phone2){
	console.log(i)
}