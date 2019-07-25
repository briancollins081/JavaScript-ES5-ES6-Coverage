var game1={
	trials: 3,
	speed: 30,
	slice: function () {
		console.log('fruit sliced!');
	},
	checkTrials:function () {
		if(game1.trials==0){
			console.log("Game over!");
		}
	}
};