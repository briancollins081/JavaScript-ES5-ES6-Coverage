var score = 0;

var session1={
	score:100,
	getScore:function () {
		return this.score;
	}
};
console.log(session1.getScore());

var retrieveScore = session1.getScore;
console.log(retrieveScore);
console.log(retrieveScore());

//create a new function
var retrieveScore2=retrieveScore.bind(session1);
console.log(retrieveScore2());