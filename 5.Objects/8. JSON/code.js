//object
var person = {
	name: 'Brian Andere',
	state: 'Nairobi',
	birth: 1984
};
//JSON object
var personJSON = {
	"name": "Brian Andere",
	"state": "Nairobi",
	"birth": 1984
};
// JSON array
var personJSON2 =[
	{
		"name": "Brian Andere",
		"state": "Nairobi",
		"birth": 1984
	},
	{
		"name": "Brian Andere II",
		"state": "Nairobi",
		"birth": 1984
	}
];
console.log(personJSON);
console.log(typeof personJSON);
console.log(personJSON2);
console.log(typeof personJSON2);

//convert to a JSON string
var personString=JSON.stringify(personJSON);
console.log(personString);
console.log(typeof personString);

var personString2=JSON.stringify(personJSON2);
console.log(personString2);
console.log(typeof personString2);

//parse JSON String
var stringParsedAsJSON = JSON.parse(personString);
console.log(stringParsedAsJSON);
console.log(typeof stringParsedAsJSON);

var stringParsedAsJSON2 = JSON.parse(personString2);
console.log(stringParsedAsJSON2);
console.log(typeof stringParsedAsJSON2);


