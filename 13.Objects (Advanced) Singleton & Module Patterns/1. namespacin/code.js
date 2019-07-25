//bad javascript
//developer 1
function greet(name) {
	console.log('Hello '+name+'.')
}
//developer 2
var greet = 'hello'; //function is overridden

//good javascript
var namespace1={
	greet:function (name) {
		console.log('Hello '+name+'.');
	}
};
var namespace2={
	greet:'Hello'
};

namespace1.greet('Mark');