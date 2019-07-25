/* Iteration - hasOwnProperty */
function phone(make, model, warranty, color){
    this.make = make;
    this.model = model;
    this.warranty = warranty ||12;
    this.color = color;
    this.endWarranty = function(){
        this.warranty = 0;
    };
}
phone.prototype = {
    extendWarranty: function (x) {
        this.warranty += x;
    }
}

var myPhone = new phone('Apple', 'Iphone 7');
console.log(myPhone);
//keys is not in Object.prototype
console.log(Object.keys(myPhone));

//add a method returnProperties to the phone prototype which 
//returns the list of own properties (including methods) 
//of an instance as a list of two Arrays: 
//one Array for properties and one Array for values.

phone.prototype.returnProperties = function(){
    var properties = Object.keys(this);
    var values = [];
    var thisObj=this;
        console.log(this);
    
    properties.forEach(function(i){
        console.log(this);
        values.push(thisObj[i]);
    });
    return [properties, values];
};
console.log(myPhone.returnProperties());