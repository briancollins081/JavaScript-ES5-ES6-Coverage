var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);
// add an element
var x=shoppingList.push("pear");
console.log(shoppingList);
console.log(x);
//pop an element from the end
x = shoppingList.pop();
console.log(shoppingList);
console.log(x);
//remove an element from front
x = shoppingList.shift();
console.log(shoppingList);
console.log(x);
//add elements to the beg of an array
x = shoppingList.unshift("grapes", "strawberry");
console.log(shoppingList);
console.log(x);

//go to the element of index 1 
//remove 2 elements starting from index 1
//replace them with grapes
shoppingList.splice(1,2,"luquats","water melon");
console.log(shoppingList);

// return 2 elements starting from 0
x=shoppingList.slice(0,5);
console.log(x);

//sort an array
shoppingList.sort();
console.log(shoppingList);

// reverse the array
shoppingList.reverse();
console.log(shoppingList);

//map
var addDelicious = function (n) {
	return 'Delicious '+n;
}
x = shoppingList.map(addDelicious);
console.log(x);

//filter
var num = [34, 57, 10, 49, 747, 23];
var testFunction = function (n) {
	return n % 3 == 0;
};
//get elements div by three
x = num.filter(testFunction);
console.log(x);

//every
x = num.every(testFunction); // if all elements match function validation
console.log(x);
