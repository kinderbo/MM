$(document).ready(function () {
	window.addEventListener("keydown", typeLetters, false);
	random("typed");
	random("random");
});

function random(id){
	var letters = document.getElementById(id).rows[0];
	for (i = 0; i < 6; i++) {
		input = letters.insertCell(i);
		input.style.width = 50;
		input.innerHTML = "_";
	}
}


function typeLetters(e) {
	var key = e.keyCode;
	var letters = document.getElementById("typed").rows[0].cells;
	var i = 0;
	if (e.keyCode !==8) {
		while (letters[i].innerHTML !== "_") {
			i++;
		}
		letters[i].innerHTML = String.fromCharCode(key);
		letters[i].rotate(1);
	}
	else {
		var i = 5;
		while (letters[i].innerHTML === "_"){
			i--;
		}
		if(i>=0){
		letters[i].innerHTML = "_";
	}
	}
}

// Create the labels for the words depending on how many words can be formed from the key
function wordsSupport(letters, words, id) {
	var letter = document.getElementById(id);
	var i = 0;
	var j = 0;

	for (i = 0; i < words; i++) {
		var row = letter.insertRow(i);
		for (j = 0; j < letters; j++){
			var word = row.insertCell(j);
			word.style.background = "#161981";
			word.style.width = 13;
			word.innerHTML = "_";
		}
	}
}
