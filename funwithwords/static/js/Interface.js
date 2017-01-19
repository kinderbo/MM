$(document).ready(function () {
	window.addEventListener("keydown", typeLetters, false);
	random("typed");
	random("random");

	setInterval(timer, 1000);
	// move();
	display_key(key);
	// alert(six);
});
var key = "{{ key }}";
var three = "{{three|safe}}"
var four = "{{four|safe}}"
var five = "{{five|safe}}"
var six = "{{six|safe}}"

// This function creates 6 squares, each holding an underscore as a blank
function random(id){
	var letters = document.getElementById(id).rows[0];
	for (i = 0; i < 6; i++) {
		input = letters.insertCell(i);
		input.style.width = 50;
		input.innerHTML = "_";
	}
}

function display_key(key) {
	var letters=document.getElementById("random").rows[0].cells;
	for (i = 0; i < 6; i++) {
		letters[i].innerHTML=String(key[i]);
	}
}


function typeLetters(e) {
	var typed = String.fromCharCode(e.keyCode);
	typed=typed.toLowerCase();
	var letters = document.getElementById("typed").rows[0].cells;
	var i = 0;
	if (key.includes(typed)) {
		while (letters[i].innerHTML !== "_") {
			i++;
		}
		letters[i].innerHTML = typed;
		key=key.replace(typed,"_");
		display_key(key);
	}else if(e.keyCode === 8) {
		var i = 5;
		while (letters[i].innerHTML === "_" && i >= 0){
			i = i-1;
		}
		if(i >= 0){
			var c =letters[i].innerHTML;
				key = key.replace("_" ,c);
				display_key(key);
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
var count=120;
function timer()
{
  count=count-1;
	var t=convertTime(count);
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=t; // watch for spelling
}
function convertTime(seconds) {
  var minutes = Math.floor(seconds/60);
  var seconds = seconds - minutes * 60;
	if(minutes<10){
		minutes="0"+minutes;
	}
	if(seconds<10){
		seconds="0"+seconds;
	}
  return  minutes + ':' + seconds;
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
