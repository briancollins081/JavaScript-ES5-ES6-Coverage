/*******************************************************
************************for of Loop*********************
********************************************************
********************************************************/
//ES6 traditional for loop
for(let i=0; i<3; i++){
	// console.log()
	console.log(i);
}
for(let i=0; i<3; i++){
	if(i==2) break;
	console.log(i);
}

//forEach
const CARMAKES=['Audi','BMW', 'Ford'];
CARMAKES.forEach((element, index)=>{
	console.log(`Make ${index+1}: ${element}`);
});

// ES6 for of loop - for Arrays
for(const x of CARMAKES){
	if(x=='BMW') break;
	console.log(x);
}

/*******************************************************
*************Iterators, Generators & next***************
********************************************************
********************************************************/
const BASKET = ['strawberry','apple','yogurt','bread'];
for(const x of BASKET){
	console.log(x);
}

// ES6 Iterators
// BASKET is iterable 
// iterator an object that helps you loop through the iterable
// has next() - returns the next item 
// next()-> {value: ,done: false-items still available|true-items finished }
// Array.entries() - built in method creats an iterator of an array
let arrIt = BASKET.entries();
console.log(arrIt);
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
console.log(JSON.stringify(arrIt.next()));
//challange
	// build a function that makes an iterator out of an array
	/* 	createIterator(array){
			
			return{

				next:
			}
		}
	*/
const createIterator = array => {
	let index = 0;
	return{
		next(){
			if(index < array.length){
				let temp = index;
				index++;
				return{
					value: array[temp],
					done: false
				}	  
			}else{
				return{
					done:true
				}
			}
		}
	}
};

const arrIt2 = createIterator([1,2,3]);
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());
console.log(arrIt2.next());

// GENERATORS : functions - factory of iterators
function* genIterator() {
	console.log("running");
	yield 1; // pause generator
	console.log("running");
	yield 2;
}
const it=genIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*******************************************************
*******************Maps & Iteration*********************
********************************************************
********************************************************/
const CAR = {
	make: 'Toyota',
	model: 'Yaris'
};
for(key in CAR){
	console.log(key); 
}//unordered
console.log(typeof CAR.forEach);

// ES6 solution - maps
// Example 1
let myMap = new Map([[1,2],[3,4]]);
console.log(myMap);
console.log(typeof myMap);
console.log(myMap.delete(3));
console.log(myMap);
myMap.clear();
console.log(myMap);

// Example 2
const [x,y,z] = [1,NaN,3];
const LANGUAGE = {
	name:'Javascript',
	version: 'ES6'
};
const add = (x,y) => x+y;
const str1 = "Build Interactive websites";
const str2 = "NaN is not equal to itself, but this changes in Maps";
const arr = [2,3];

let myMap2 = new Map();
console.log(myMap2);
// fill up map
myMap2.set(x,z);
console.log(myMap2);
myMap2.set(LANGUAGE, str1);
console.log(myMap2);
myMap2.set(add, arr);
console.log(myMap2);
myMap2.set(y, str2);
console.log(myMap2);

//get / check values
console.log(myMap2.get(y));
console.log(myMap2.has(1));
console.log(myMap2.get(LANGUAGE));
console.log(myMap2.has({
	name:'Javascript',
	version: 'ES6'
})); //objects are not equal - new different reference
console.log(myMap2.get(NaN));
console.log(myMap2.get(y));
console.log(NaN === y);//NaN != itself exception in MAPs

// iteration with for of
for(const[key, value] of myMap2){
	console.log(`Key: ${key} --> Value: ${value}`);
}
/*for(const key of myMap2){
	console.log(key);
}*/

//forEach
console.log('FOREACH WITH MAPS');
myMap2.forEach((key,value)=>{
	console.log(`Key: ${key} --> Value: ${value}`);
});

//Iterator
console.log('ITERATOR WITH MAPS');
// const k = myMap2.entries();
// const k = myMap2.keys();
const k = myMap2.values();
console.log(k);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

/*******************************************************
*******************Sets & Iteration*********************
********************************************************
********************************************************/
// collection with only unique values
let mySet = new Set();
mySet.add('John');
mySet.add(9);
mySet.add(9); // no change since it is already in the set
const phone={
	make:'SamSung',
	model: 'S8'
};
mySet.add(phone);
mySet.add(document.body);
console.log(mySet);

//creat a set by passing iterable obj to SET constructor
let mySet2 = new Set(['===================================','Hi', 6, 100, 'Teller',100]);
console.log(mySet2);
let mySet3 = new Set('hello Brian BrianC');
console.log(mySet3);
//set methods - similar to Maps

console.log(mySet.has('John'));
console.log(mySet.has({
	make:'SamSung',
	model: 'S8'
}));
/*console.log(mySet.size);
mySet.delete(9);
console.log(mySet);
mySet.clear();
console.log(mySet);*/

//for loop
for(const val of mySet2){
	console.log(val);
}

console.log("Iterators on Sets");
/*for(const [key, value] of mySet2.entries()){
	console.log(key, value);
}*/

/*for(const key of mySet2.keys()){
	console.log(key);
}
*/
for(const value of mySet2.values()){
	console.log(value);
}

// iteration with forEach
mySet2.forEach((value) => {
	console.log(value);
});

// create an array from a set
// from
// spread operator ...
const arrayFromSet=[...mySet];
console.log(arrayFromSet);

// CHALLENGES
let set1 = new Set([1,"Tie","Reggae",9,521,"Football","Tennis","Boy","Lad"]);
let set2 = new Set(["Tennis","Rugby","Football","Netball","Table Tennis","Basket Ball"]);
let set3 = new Set(["Boy","Girl","Lad","Lady","Woman","Man"]);

// 1.Create intersection of set1 and set2
const intsArray = [...set1].filter((item) => set2.has(item));
console.log(set1);
console.log(set2);
console.log(intsArray);
const setInts = new Set(intsArray);
console.log(setInts);

// 2.Create the difference of sets
const diffArray = [...set1].filter((item) => !set2.has(item));
console.log(diffArray);

const diffArray2 = [...set2].filter((item) => !set1.has(item));
console.log(diffArray2);

const diffSet=new Set(diffArray.concat(diffArray2));
console.log(diffSet);

/*******************************************************
*************************Symbols************************
********************************************************
********************************************************/
// need for symbols
/*const OFFSTATE = 'off';
const ONSTATE = 'on';
const feature1='feature';
const feature2='feature';
let car = {
	make:'Audi',
	[feature1]: 'cruise control',
	[feature2]: 'air-conditionning',
	state: 'on',
	speed: 20,
	turnon(){
		this.state = 'on';
	},
	turnoff(){
		this.state = 'off';
	},
	accelerate(){
		if(this.state === 'on'){
			this.speed+=10;
		}
	}
};
console.log(car); //only one feature listed - solved by making object keys unique
car.accelerate();
console.log(car);*/

// ES6 Symbols - primitive types new in ES6
const mySymbol = Symbol('Symbol Description');
console.log(mySymbol);
console.log(mySymbol.toString());
// console.log(mySymbol + ' Hello'); //error
// a symbol is unique
const symbol1 = Symbol('a');
const symbol2 = Symbol('a');
console.log(symbol2==symbol1); //false
console.log(typeof symbol1); //symbol

// Fix our car using symbols
const OFFSTATE = Symbol('off');
const ONSTATE = Symbol('on');
const feature1=Symbol('feature');
const feature2=Symbol('feature');
let car = {
	make:'Audi',
	[feature1]: 'cruise control',
	[feature2]: 'air-conditionning',
	state: ONSTATE,
	speed: 20,
	turnon(){
		this.state = ONSTATE;
	},
	turnoff(){
		this.state = OFFSTATE;
	},
	accelerate(){
		if(this.state === ONSTATE){
			this.speed+=10;
		}
	}
};
console.log(car); //only one feature listed - solved by making object keys unique
car.accelerate();
console.log(car);

// do not show symbols
console.log(Object.keys(car));
console.log(Object.getOwnPropertyNames(car));
for(const key in car){
	console.log(key);
}
// solution to above problem
console.log(Object.getOwnPropertySymbols(car));

// ITERATION WITH SYMBOLS
// Symbol.iterator
const basket = ['apple', 'blueberry','bread']
// for of loop
for(const value of basket){
	console.log(value);
}
// Symbol.iterator
console.log(Symbol.iterator);
console.log(typeof Symbol.iterator);
console.log(basket);

console.log(basket[Symbol.iterator]());
console.log(basket.entries());

const itr = basket[Symbol.iterator]();
// const itr = basket.entries();
// const itr = basket.keys();
// const itr = basket.values(); //similar to basket[Symbol.iterator]
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
// Challenge - loop using Symbol.iterator
const itr2 = basket[Symbol.iterator]();
/*let done=false;
while(done==false){
	let obj=itr2.next();
	console.log(obj.value);
	done=obj.done;
}*/

let iteration = itr2.next();
while(!iteration.done){
	console.log(iteration.value);
	iteration = itr2.next();
}

//Symbol.iterator with object
/*const obj = {
	[Symbol.iterator]:function*() {
		for(let i =1; i<3; i++){
			yield i;
		}
	}
}*/
const obj = {
	*[Symbol.iterator]() {
		for(let i =1; i<4; i++){
			yield i;
		}
	}
}
const itr3 = obj[Symbol.iterator]();
console.log(itr3.next());
console.log(itr3.next());
console.log(itr3.next());
// once you create a custom iterator as above
// you can treat the object as an iterable as below
for(const x of obj){
	console.log(x);
}
console.log(...obj);