var recognition = new webkitSpeechRecognition()
recognition.start();
recognition.onend = function(){
	recognition.start();
	console.log("hello");
}

var synthesis = speechSynthesis;

recognition.onresult = function(event){
	var whatWasHeard = event.results[0][0].transcript;
	document.body.innerHTML = whatWasHeard;
	console.log(whatWasHeard);
	console.log("hello");
	if(whatWasHeard.indexOf("change background color to") > -1){
		var sayThis = new SpeechSynthesisUtterance("Ok master, I will change it to " + whatWasHeard.split("to ")[1]);
		synthesis.speak(sayThis);
		document.body.style.backgroundColor = whatWasHeard.split("to ")[1];
	}

}