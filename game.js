var wordBank = ["the", "on", "of", "no", "could"]
var wordBank2 = ["the", "on", "of", "no", "could", "was", "they", "one", "in", "good", "this", "their", "we", "all", "been", "her", "from", "be", "you", "only", "can", "with", "is", "make", "so", "like", "said", "to", "what", "that", "me", "walk", "about", "our", "his", "little", "less", "eat", "when", "soon", "what", "I", "yes", "are", "see", "or", "them", "any", "say", "am", "a", "for", "it", "play", "come", "go", "eye", "look", "fly", "here", "does", "out", "from", "ate", "my", "and", "who", "do", "love", "more", "by"]
var i = 0;

//set up space bar key press to change background color
//document.getElementById('wordSpace').innerHTML = "Hello World!"

var word = document.querySelector("p");
document.body.addEventListener("keydown", function(){  //had word.eventlistner but when switched to document.body.eventlistener it worked!  Why?
	// if(i = 0) {
	// 	//start the timer //setTimeout
	// }  

	word.textContent = wordBank2[i];
	i++;

	if(i > wordBank2.length){
		alert("End Game")  //maybe call an end game function?
		//stop the timer and display the time  //clearTimeout
	}
});

//cycles through the wordBank words
function cycle(arr){
	
	word.textContent = arr[i];
	i++;

	if(i > wordBank.length){
		alert("End Game")  //maybe call an end game function?
	}
}

// initialize your variables outside the function var count = 0; var clearTime; var seconds = 0, minutes = 0, hours = 0;
//var clearState; var secs, mins, gethours ; 
//function startWatch( ) { /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */
//			if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1; } /* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */
//			mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); /* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */
//			if ( minutes === 60 ) { minutes = 0; hours = hours + 1; } /* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */
//			gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); // display the stopwatch var x = document .getElementById("timer"); x.innerHTML = 'Time: ' + gethours + mins + secs; /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */ seconds++; /* call the setTimeout( ) to keep the stop watch alive ! */ clearTime = setTimeout( "startWatch( )", 1000 ); } // startWatch( ) //create a function to start the stop watch 
 //function startTime( ) { /* check if seconds, minutes, and hours are equal to zero and start the stop watch */ 
 //if ( seconds === 0 && minutes === 0 && hours === 0 ) { /* hide the fulltime when the stop watch is running */ var fulltime = document.getElementById( "fulltime" ); fulltime.style.display = "none"; /* hide the start button if the stop watch is running */ this.style.display = "none"; /* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */ startWatch( ); } // if () } // startTime() /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */ window.addEventListener( 'load', function ( ) { var start = document .getElementById("start"); start.addEventListener( 'click', startTime ); }); // startwatch.js end 
