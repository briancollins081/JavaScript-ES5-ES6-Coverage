//superClass1
function phone1(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty || 24;
    this.colour = colour;
}
/*phone1.prototype = {
    extendWarranty: function(x){
        this.warranty += x;
    }
};
	or
*/
phone1.prototype['extendWarranty']=function(x){
        this.warranty += x;
}
//console.log(new phone1);

//superClass2
function phone2(warranty) {
	this.warranty=warranty;
	this.endWarranty=function() {
		this.warranty=0;
	}
}
//subClass
function smartPhone(make, model){
    this.make = make;
    this.model = model;
    //this.warranty=12;
}

// augument function
function augment(receivingClass, givingClass) {
	var helperObject=new givingClass(); //contains all properties unlike prototype that contains its elements
	for(var i in helperObject){
		/*************if interested in elements in the whole 
				class instance***************/
		if(!(i in new receivingClass())){ 
			receivingClass.prototype[i] = helperObject[i];
		}
	}

	/*var helperObject=new givingClass(); 
	var receivingInstance=new receivingClass();
	for(var i in helperObject){
		************if interested in elements in 
				the constructor only**************
		if(!(receivingInstance.hasOwnProperty(i))){
			receivingClass.prototype[i] = helperObject[i];
		}
	}*/
}

augment(phone1,phone2);

/*//check if a property is inside an object
console.log('extendWarranty' in new phone1());

// cycle through properties and methods of an object
for(var i in (new phone2)){
	console.log(i);
}

//hasOwnProperty - inside constructor only
var myPhone=new phone1();
console.log(myPhone.hasOwnProperty('extendWarranty'));*/

//create smartPhone instance
var mySmartPhone = new smartPhone('Apple','Iphone 6');
console.log(mySmartPhone);
printProperties(mySmartPhone);
//augment using superClass1 phone1
augment(smartPhone, phone1);
printProperties(mySmartPhone);
console.log(mySmartPhone);
console.log(mySmartPhone.warranty);

function printProperties(object){
	console.log('Properties and methods:');
	for(var i in object){
		console.log(i);
	}
}

//augment using superClass2 phone2
augment(smartPhone, phone2);
printProperties(mySmartPhone);
