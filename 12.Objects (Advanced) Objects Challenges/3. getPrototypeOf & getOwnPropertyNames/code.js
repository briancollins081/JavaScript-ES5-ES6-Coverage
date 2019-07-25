var myPhone={
	make:"Samsung",
	model:"S6"
}
// console.log(Object.getPrototypeOf(myPhone));
// console.log(Object.getOwnPropertyNames(myPhone));

var returnProperties = function(obj){
	var properties = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
	var values = [];
	properties.forEach(function (key) {
		values.push(obj[key]);
	});
	return [properties, values];
}

console.log(returnProperties(new Array()));
console.log(returnProperties(new Object()));

for(var i in new Array()){
	console.log(i);
}