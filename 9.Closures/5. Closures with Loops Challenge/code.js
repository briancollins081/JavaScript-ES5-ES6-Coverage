var cars=[];
/*for(var i=0; i<3; ++i){
	cars.push(function(){
		console.log(i);
	});
}
cars[0]();*/

function f(i) {
	return function () {
		console.log(i);
	}
}
for(var i=0; i<3; ++i){
	cars.push(f(i));
}
cars[0]();
cars[1]();
cars[2]();

for(var i=0; i<3; ++i){
	setTimeout(f(i),3000);
}