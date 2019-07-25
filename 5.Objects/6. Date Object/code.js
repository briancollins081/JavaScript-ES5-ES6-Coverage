//current data time
var x=new Date();
console.log(x);
//choossing a Date year, month, day, hour, min, sec
x=new Date(2017, 11, 15, 10);
console.log(x);

//use integer value : miliseconds after 01/01/1970 UTC
x = new Date(8048999022259);
console.log(x);
//get value from Date
console.log(x.getTime());

//get current int time
var y=Date.now();
console.log(y);
//return the day of the week for specific Date
var z=new Date();
console.log(z);
console.log(z.getDay());

z=new Date(1995, 1, 22);
console.log(z);
console.log(z.getDay());
var daysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log('You were born on a '+daysNames[z.getDay()]);

//new Date
var now = new Date(2019, 5);
console.log(now);
console.log(now.getHours());
now.setMonth(9);
now.setDate(15);
console.log(now);

var t=new Date();
var time1=t.getTime();
for (var i = 0; i <10; i++) {
	console.log(i);
}
t=new Date();
var time2=t.getTime();
console.log('Time take for the loop is: '+ (time2 - time1)+' miliseconds');
