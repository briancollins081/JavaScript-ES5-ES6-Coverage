//superClass
function phone(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
}
phone.prototype = {
    extendWarranty: function(x){
        this.warranty += x;
    }
};
//subClass
function smartPhone(make, model){
    this.make = make;
    this.model = model;
}

function extend(childClass, parentClass) {
	childClass.prototype = new parentClass('Samsung','S6', 12, 'Yellow');
	childClass.prototype.constructor = childClass;
}

extend(smartPhone, phone);

var myPhone=new phone();
var mySmartPhone=new smartPhone('Apple','Iphone 6');
console.log(mySmartPhone);
mySmartPhone.extendWarranty(100);
console.log(mySmartPhone.warranty);
