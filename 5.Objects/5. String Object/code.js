var myString1="Javascript";
var myString2=" is awesome";
var myString3="Java";
var myString4="I really enjoy learning Javascript. It is fun.";

//character at
console.log(myString1.charAt(0));

//conctinate
console.log(myString1.concat(myString2));

//check if a string is a substring of another
console.log(myString4.includes(myString1));

//index of a character
console.log(myString1.indexOf('a'));
console.log(myString1.lastIndexOf('a'));

//uppercase or lowercase
console.log(myString1.toUpperCase());
console.log(myString1.toLowerCase());

//convert string obj to string primitive
var y = new String('Brian');
console.log(y);
console.log(typeof y);
y=y.toString();
console.log(y);
console.log(typeof y);