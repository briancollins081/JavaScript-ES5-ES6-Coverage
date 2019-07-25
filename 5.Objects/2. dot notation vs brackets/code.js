var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold",
    ring: function(){
        console.log("beep beep beep!")
    }
};
console.log(myPhone.make);
console.log(myPhone['colour']);

var x = "make";
console.log(myPhone[x]);

//create a function: returns a random property of myPhone
function getProperty() {
	var props=['make', 'model','warranty','colour'];
	var rand=4 * Math.random(); //between 0 and 4
	rand=Math.floor(rand);
	var p=props[rand];
	return myPhone[p];
}

console.log(getProperty());
console.log(getProperty());