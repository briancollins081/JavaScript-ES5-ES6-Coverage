var shoppingList = ['orange','apple','banana'];
console.log(shoppingList);
console.log(typeof shoppingList);

var shoppingList2 = new Array("bread","eggs","milk");
console.log(shoppingList2);

console.log(shoppingList2[1] +' and '+ shoppingList[0]+'s');

shoppingList[0] = "pear";
console.log(shoppingList);
delete shoppingList[1];
console.log(shoppingList);
console.log(shoppingList.length);