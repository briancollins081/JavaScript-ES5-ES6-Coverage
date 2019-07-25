// const MAKE;
const MAKE = "Apple";
console.log(MAKE);

{
	const MAKE = "Apple";

	{
 		const MAKE = "Apple";

	}
}


const LANGUAGE = {
	name: 'Javascript',
	version: 'ES5'
};

LANGUAGE.version = 'ES6';
//error only if you do LANGUAGE = something