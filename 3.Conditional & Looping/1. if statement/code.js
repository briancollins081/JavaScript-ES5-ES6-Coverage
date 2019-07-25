var balance =40;
var price = 50;
if(price < balance){
	console.log("payment successful");
	balance -=price;
}else{
	console.log("insufficient funds");
}