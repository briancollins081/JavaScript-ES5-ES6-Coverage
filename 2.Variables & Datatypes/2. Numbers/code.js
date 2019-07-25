var x=1;
console.log(typeof(x));
//fractional numbers
var y=2.4;
//5.3*10^8
var z=5.3e8;
console.log(z);
// max min in JS	
var max=Number.MAX_VALUE;
console.log(max);
var min=Number.MIN_VALUE;
console.log(min);

// arithmetic operations
var a=4+9;
console.log(a);
a=3*4;
console.log(a);
var b=3;
// b=b+2;
b+=2;
console.log(b);
//operator precedence
var c=4*(5+3);
console.log(c);
var d = ++ c;
console.log(c);
console.log(d);

var e=c ++;
console.log(c);
console.log(e);

//remainder operator
var f=17%3;
console.log(f);
// exponent operator
var g=3**4; //3^4
console.log(g);

//infinity
var h=Infinity;
console.log(h);
console.log(z/0);

//NaN
var i=0/0; //no meaningful result
console.log(i);

//power method
var j=Math.pow(2,5);
console.log(j);

//big numbers
var k=Math.pow(2,2000);
console.log(k);

//parse a string to integer
var number='3bulls'
var l=parseInt(number);
console.log(l);
console.log(typeof(l));
console.log(parseInt('not a number'));
console.log(typeof(parseInt('not a number')));