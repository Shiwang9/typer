var timer = document.getElementById("timer");
var time = 0;
var testPara = document.getElementById("testPara");
var textArea = document.getElementById("textArea");
var newTestWindow = document.getElementById("newTestWindow");
var newTestButton = document.getElementById("newTestButton");
var score = 0;



var calculateScore = function() {
	var paraSubmitted = textArea.value;
	var submittedWords = paraSubmitted.split(" ");
	var wordCount = submittedWords.length; 

	var testWords = testPara.innerHTML.split(" ");
	console.log(testWords);

	return wordCount;
};



var displayTime = function () {

	var getTime = setInterval(function() {
		time++;
		timer.innerHTML = "Time Passed: " + time + "s"; 

		console.log(timeRemaining);

		

	textArea.removeEventListener("keydown", displayTime);
};


startButton.addEventListener("click", test);


newTestButton.addEventListener("click", function(){
	window.location.reload();
});
