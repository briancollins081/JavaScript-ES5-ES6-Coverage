var phone1 = {
	make:'Apple',
	model:'Iphone 6',
	warranty: 12,
	color:'black',
	extendWarranty:function (x) {
		this.warranty+=x;
	}
};

console.log(phone1);

var phone2 = {
	make:'Samsung',
	model:'S8'
};

phone2.__proto__=phone1;
console.log(phone2);

console.log(phone2.warranty);
phone2.extendWarranty(12);
console.log(phone2);

phone3={
	make:'Samsung',
	model: 'S8'
};
//inherit phone 2's properties
phone3.__proto__=phone2;
console.log(phone3);
console.log(phone3.color);
