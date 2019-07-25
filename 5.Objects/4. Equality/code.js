//primitives
var x=1;
var y=1;
console.log(x==y);
//objects
myPhone={
	make:"Apple",
	model: "Iphone 6"
}
myPhone2={
	make:"Apple",
	model: "Iphone 6"
}
console.log(myPhone==myPhone2);

myPhone3=myPhone;
console.log(myPhone==myPhone3);

var namePrimitive1 = 'Andere';
var namePrimitive2 = 'Andere';
var nameObject1 = new String('Andere');
var nameObject2 = new String('Andere');

console.log(typeof nameObject1);
console.log(typeof namePrimitive1);

// equality
console.log(namePrimitive1 == namePrimitive2);
console.log(nameObject1 == nameObject2);