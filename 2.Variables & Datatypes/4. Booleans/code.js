var x=3;
var y=5;
var z=x<y;
console.log(z);

//logical operators
z = (x<y) && (x<0);
console.log(z);
z=false||true;
console.log(z);

z=!(x<10);
console.log(z);

//operators precedence
z=false && true || true;
console.log(z);
//unary operator
z= x < 4 ? 'Pass' : 'Fail';
console.log(z);

//booleans vs non booleans
z= 'banana' && 'apple';
console.log(z);
// console.log(1 == true);
z=false || 'apple';
console.log(z);

var fruit;
console.log(fruit);
console.log(fruit == false);
z=fruit || 'apple';
console.log(z);

console.log(''==false);
z=''||'apple';
console.log(z);

z=''&&false;
console.log(z);

z=0&&false;
console.log(z);