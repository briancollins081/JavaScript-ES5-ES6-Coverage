/*******************************************************
*****Array.from collections, strings & arguments********
********************************************************
********************************************************/
// need to create arrays from other objects
let arr = [1,2,3];
// console.log()
console.log(arr.map(x=>x*2));
// console.log(arr.map((x)=>{return x*2}));
let str='hello';
console.log(str.map);
console.log(arr.map);
// to use map method with a string
// ES5
console.log(Array.prototype.map.call(str, function(x){
	return x+ 'a';
}));
console.log(Array.prototype.map.call(str, (x) => x+'a'));
const collection = document.getElementsByClassName('blue');
console.log(collection.length);
console.log(collection);
console.log(collection.slice);//undefined

// solution - slice on a collection
console.log(Array.prototype.slice.call(collection,1,3));

// ES6
console.log(Array.from(str));
//solution - slice on a collection
console.log(Array.from(collection).slice(1,3));


// create an array from function arguments
function g(x,y) {
	console.log(arguments);
	console.log(Array.from(arguments));
}
g(3,4);

/*******************************************************
**Array.from optional map, length property, Maps & Sets*
********************************************************
********************************************************/
// use optional map function
let str2 = 'strawedbricks';
console.log(Array.from(str2, x => x+','));
console.log(Array.from([1,2,3,4,5], x => x*2));
// create an array from any object with a length function
const obj = {length: 3};
console.log(Array.from(obj, value => 1));
console.log(Array.from(obj, (value,index) => index*2));
// create array from Sets and Maps(iterable obj)
let mySet = new Set();
mySet.add('John');
mySet.add(1);
console.log(mySet);
console.log(mySet.size);
console.log(Array.from(mySet));

let myMap=new Map([['i','ii'],['iii','iv'],['Lyne','Sheila'],[9,4]]);
console.log(myMap);
console.log(myMap.size);
console.log(Array.from(myMap));

/*******************************************************
**********************Array.of()************************
********************************************************
********************************************************/
// create an array of 1 element
const x = Array.of(3);
console.log(x);

// create an array of 3 elements
const y = Array.of(3,9,12);
console.log(y);
// dont confuse it with Array constructor
const z = new Array(3);
console.log(z); // an array with 3 empty slots

/*******************************************************
****************More Modern Array methods***************
********************************************************
********************************************************/
const array1 = [50,70, ,20]; //you can change items within the array
// find the first element greater than 6
console.log(array1.find(value => value>60));
console.log(array1.findIndex(value => value>60));
// find first element if added to its index the sum is smaller than 60
console.log(array1.find((value,index)=> value+index < 60));
//get the index of a certain value
console.log(array1.indexOf(20));
// if a certain value exists in the array
console.log(array1.includes(70));
// copy in position 1 the chunk between 0 and 1
console.log(array1);
array1.copyWithin(1, 0, 2);
console.log(array1);
// copy into position 2 the chunk between 1 and the end
array1.copyWithin(2, 1);
console.log(array1);
//copy in position 3 the first value of the array
array1.copyWithin(3);
console.log(array1);
// fill array with 40's from position 1 to 1
array1.fill(40, 1,3);
console.log(array1);
// fill array with {name:'Mark'} from position 2 to the end.
array1.fill({name:'Mark'}, 2);
console.log(array1);
// check if values array[2] and array[3] are equal 
console.log(array1[2]===array1[3]); //passed the reference of the objects to the array
console.log({name:'Mark'}==={name:'Mark'});
