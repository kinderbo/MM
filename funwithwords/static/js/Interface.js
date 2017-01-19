// SET VARIABLES HERE
var count = 120; // number of seconds allowed at the start of the game

// When page loads
$(document).ready(function () {
	window.addEventListener("keydown", typeLetters, false);
	create_labels("typed"); // Create the labels that hold the characters typed
	create_labels("random"); // Create the labels that hold the key from the model
	setInterval(timer, 1000);
	display_key(key);
	generate_labels_for_key(3, three.length, "words3","words32");
	generate_labels_for_key(4, four.length, "words4","words42");
	generate_labels_for_key(5, five.length, "words5","words52");
	generate_labels_for_key(6, six.length, "words6","words62");
});


// This function creates 6 squares at the start of the game, each holding an underscore as a blank
function create_labels(id) {
	var letters = document.getElementById(id).rows[0];
	for (i = 0; i < 6; i++) {
		input = letters.insertCell(i); // TODO: see how to do this in jquery
		input.style.width = 50;
		input.innerHTML = "_";
	}
}

// This function displays the specified key on the screen
function display_key(key) {
	var table = $('#random')[0]; // the HTML table that contains the key
	var letters = table.rows[0].cells;
	for (i = 0; i < 6; i++) {
		letters[i].innerHTML = String(key[i]);
	}
}


// This function processes the key input by the user
// Backspace key: put back the most recently typed letter
// Any character: display it only if it is a valid character to be played
function typeLetters(e) {
	var typed = String.fromCharCode(e.keyCode);
	typed = typed.toLowerCase();
	var table = $('#typed')[0]; // the HTML table that contains the key
	var letters = table.rows[0].cells;
	var i = 0;

	// if the key contains the input character
	if (key.includes(typed)) {
		while (letters[i].innerHTML !== "_") {
			i++;
		}
		letters[i].innerHTML = typed;
		key = key.replace(typed, "_");
		display_key(key);
	}
	else if (e.keyCode === 8) { // backspace key
		var i = 5;
		while (i >= 0 && letters[i].innerHTML === "_") { // find the position of the character last typed
			i = i - 1;
		}
		if (i >= 0) {
			var c = letters[i].innerHTML;
			key = key.replace("_", c);
			display_key(key);
			letters[i].innerHTML = "_";
		}
	}
}

// Create the labels for the words depending on how many words can be formed from the key
function generate_labels_for_key(letters, words, id, id2) {
	var letter = document.getElementById(id);
	// var letter = $("#" + id);
	var i = 0;
	var j = 0;
	if(words>12){
	for (i = 0; i < 12; i++) {
		var row = letter.insertRow(i); // TODO: see how to do this in jquery
		for (j = 0; j < letters; j++) {
			var word = row.insertCell(j);
			word.style.background = "#161981"; // TODO: use constants to keep track of the colors
			word.style.width = 13;
			word.innerHTML = "_";
		}
	}
	for(i=0;i<words-12;i++){
		letter = document.getElementById(id2);
		var row = letter.insertRow(i); // TODO: see how to do this in jquery
		for (j = 0; j < letters; j++) {
			var word = row.insertCell(j);
			word.style.background = "#161981"; // TODO: use constants to keep track of the colors
			word.style.width = 13;
			word.innerHTML = "_";
		}
	}
}else{
	for (i = 0; i < words; i++) {
		var row = letter.insertRow(i); // TODO: see how to do this in jquery
		for (j = 0; j < letters; j++) {
			var word = row.insertCell(j);
			word.style.background = "#161981"; // TODO: use constants to keep track of the colors
			word.style.width = 13;
			word.innerHTML = "_";
		}
	}
}
}

// This function operates the timer
function timer() {
  count = count - 1;
	var t = convertTime(count);
  if (count <= 0) {
     clearInterval(counter);
     return;
	}
	$("#timer").html(t); // watch for spelling
}

// This function converts a number of seconds to the format of minute: second
function convertTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var seconds = seconds - minutes * 60;
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
  return minutes + ':' + seconds;
}

// TODO: Implement this function
// This function randomly shuffles the key and displayed the new key on the screen.
function shuffle_key() {

}

// TODO: Implement this function
// This function checks if the word played is valid and has not been played.
// If so, the word is displayed on the screen, the score and the time will be increased accordingly.
// Otherwise, feedback the player.
function play_word(word) {

}

// TODO: Implement this function
// This function checks if the player has achieved 200 points with the current key.
// If so, get another key from the model and display it, generate the labels accordingly
// Otherwise, feedback the player
function change_key() {

}

// TODO: Implement this function
// This function increases the player's score by the specified amount
function increase_score(amount) {

}

// TODO: Implement this function
// This function increases the player's time by the specified amount
function increase_time(amount) {

}

// function move() {
//   var elem = document.getElementById("timer");
//   var width = 0;
//   var id = setInterval(frame, 100);
//   function frame() {
//     if (width == 100) {
//       clearInterval(id);
//     }else if(width==70){
// 			elem.style.background="#660033";
// 			width++;
//       elem.style.width = width + '%';
// 		} else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// }
