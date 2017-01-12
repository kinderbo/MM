
function random(){

	var i=0;
	var letters=document.getElementById("random").rows[0];
	for ( i=0; i< 5; i++){
		input = letters. insertCell(i);
		input.innerHTML="_";
	}
}


function typeLetters(e){
	
	var key = e.keyCode;
	var letters = document.getElementById("random").rows[0].cells;
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
function labelgenerate(number){

	var letters = new Array(number);
	for(var i=0;i<number;i++){
		letters[i]=("_ _ _ "+"<br>");
		}
	return letters;

}
function myFunction(id){
	document.getElementById(id).innerHTML="Paragraph changed";
	var str=labelgenerate(3);
	document.getElementById(id).innerHTML=str[0]+str[1]+str[2];

}

