$(document).ready(function(){
	var settings = {
	difficulty: 1,
	rounds: 1
};
	console.log("ready");
	$("#play").on("click", function(){
    	$("#formContainer").css("display", "none");
    	var gameDifficulty = $("#difficulty option:selected").val();
    	var gameRounds = $("#rounds option:selected").val();
    	settings.difficulty = gameDifficulty;
    	settings.rounds = gameRounds;
     	console.log(settings);
     	getWords(settings);
	});
});


var numGames;
var words = [];

function getWords(settings) {
	$.ajax({
  	url: 'http://localhost:8080/words',
  	method: 'post',
  	data: settings
	})
		.done(function(res) {
  		console.log(res);
	})
}