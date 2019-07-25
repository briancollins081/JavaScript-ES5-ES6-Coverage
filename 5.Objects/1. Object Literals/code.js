var myPhone={
	make: 'Android',
	model: 'Techno P3',
	warranty: 12,
	color: 'gold',
	ring:function () {
		console.log("beep beep beep!");
	}
};

console.log(myPhone);
console.log(myPhone.make);
myPhone.ring();