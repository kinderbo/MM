
function random(id){

	var i=0;
	var letters=document.getElementById(id).rows[0];
	for ( i=0; i< 6; i++){

		input = letters. insertCell(i);
		input.style.width=50;
		input.innerHTML="_";
	}
}


function typeLetters(e){
	
	var key = e.keyCode;
	var letters = document.getElementById("typed").rows[0].cells;
	var i = 0;
	if(e.keyCode !==8){
		while( letters[i].innerHTML !== "_"){
			i++;
		}
		letters[i].innerHTML=String.fromCharCode(key);
	}else{
		var i = 5;
		while( letters[i].innerHTML === "_"){
			i--;
		}
		if(i>=0){
		letters[i].innerHTML = "_";
	}
	}

	
}

function wordsSupport(letters , words, id){
	var letter = document.getElementById(id);
	var i=0;
	var j=0;

	for( i = 0; i<words; i++){
		
		var row=letter.insertRow(i);
		for(j=0; j<letters; j++){
			
			var word=row.insertCell(j);
			word.style.background="#08195F";
			word.style.width=13;
			word.innerHTML="_";
		}

	}
}

