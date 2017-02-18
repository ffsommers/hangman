$(document).ready(function(){
	console.log("ready");
	$("#begin").on("click", function(){
    	console.log("click");
     	// fetchWords();
     	getWords();
	});
});

var difficulty = {
	difficulty: 1,
	count: 1
};
var numGames;
var words = [];


function fetchWords() {
	$.ajax({
  	url: 'http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words',
  	method: 'GET',
  	data: JSON.stringify({difficulty: 1})
	})
		.done(function(res) {
  		words.push(res);
  		console.log(words);
	})

}

function getWords() {
	$.ajax({
  	url: 'http://localhost:8080/words',
  	method: 'post',
  	data: difficulty
	})
		.done(function(res) {
  		console.log(res);
	})
}