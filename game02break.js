//game starts with a ready screen

//how it works: 1. once the first keypress is detected a timer starts
//				2. each key press picks a random word from the array
//				3. once the last word is taken out of the array, the timer stops and is displayed


//start with the array being hardcoded
var wordBank = ["the", "on", "of", "no", "could"];//, "was", "they", "one", "in", "good", "this", "their", "we", "all", "been", "her", "from", "be", "you", "only", "can", "with", "is", "make", "so", "like", "said", "to", "what", "that", "me", "walk", "about", "our", "his", "little", "less", "eat", "when", "soon", "what", "I", "yes", "are", "see", "or", "them", "any", "say", "am", "a", "for", "it", "play", "come", "go", "eye", "look", "fly", "here", "does", "out", "from", "ate", "my", "and", "who", "do", "love", "more", "by"];
//variables for the timer
var h = 0;
var m = 0;
var s = 0;
var clockTest = 1

//css selector to change text on screen
var display = document.querySelector("p");

//the first keypress starts the timer
//each keypress will generate a random number for the array index and
//display that word in the html and also delete the word 
//and reduce the array length by 1 (.split) method automatically does that for me
document.body.addEventListener("keydown", function(){  //QQQQQ  had word.eventlistner but when switched to document.body.eventlistener it worked!  Why?
	//start timer
	if(clockTest === 1){
		timer = window.setInterval('disp()',1000);
		clockTest = 0;
		console.log(clockTest);	
	}
	
	if(wordBank.length !== 0){
		display.textContent = wordBank.splice(randSelect(),1)[0];	//QQQQQ seems there's a much better way to do this...
	} else {
		console.log("End");
		//end the timer and display the time
		window.clearInterval(timer);
		display.textContent = timeStr; 
		//have button appear to reset the array and to reset the clock
		clockTest = 1;
		console.log(clockTest);
	}
});

// function to select a random number out of the array and display
function randSelect(){
	var num = Math.floor(Math.random () * wordBank.length)
	return num
}


////////////////////////////////////////////Example Code to figure out a timer///////////////////////////

//1.)http://www.plus2net.com/javascript_tutorial/stopwatch.php

// <input type="button" name="btn" id='btn' value="Start" onclick="to_start()";>
// <br><br>
// <div id=n1 style="z-index: 2; position: relative; right: 0px; top: 10px; background-color: #00cc33; width: 100px; padding: 10px; color: white; font-size:20px; border: #0000cc 2px dashed; "> </div>





// function to_start(){

// 	switch(document.getElementById('btn').value){
// 		case  'Stop':
// 			window.clearInterval(timer); // stop the timer 
// 			//document.getElementById('btn').value='Start';
// 		break;
// 		case  'Start':
// 			timer = window.setInterval('disp()',1000);  //start the timer
// 			//document.getElementById('btn').value='Stop';
// 		break;
// 	}
// }


function disp(){
// Format the output by adding 0 if it is single digit //
	if(s<10){var s1='0' + s;}
	else{var s1=s;}

	if(m<10){var m1='0' + m;}
	else{var m1=m;}
	
	if(h<10){var h1='0' + h;}
	else{var h1=h;}
	
	// Display the output //
	timeStr = h1 + ':' + m1 +':' + s1 ;
	//document.getElementById('n1').innerHTML = timeStr;  //ni would be my "display variable to show the time once the array length reaches 0"
														//display.textContent = timeStr; for example
	// Calculate the stop watch // 
	if(s<59){ 
		s=s+1;
	}else{
		s=0;
		m=m+1;

	if(m==60){
		m=0;
		h=h+1;
	} // end if  m ==60
	}// end if else s < 59
	// end of calculation for next display
}


// 2.) https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
// <!DOCTYPE html>
// <html>
// <head>
// <script>
// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
// </script>
// </head>

// <body onload="startTime()">

// <div id="txt"></div>

// </body>
// </html>