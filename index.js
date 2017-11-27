function showTabCont(e, name) {
	var tablink;
	var tabcontent;
	var i;
	
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	tablink = document.getElementsByClassName("tablink");
	for(i = 0; i < tablink.length; i++) {
		tablink[i].className = tablink[i].className.replace(" active", "");
	}
	
	document.getElementById(name).style.display = "block";
	e.currentTarget.className += " active";
	
}

function showTabCont2(e, name) {
	var tablink2;
	var tabcontent2;
	var i;
	
	
	tabcontent2 = document.getElementsByClassName("tabcontent2");
	for(i = 0; i < tabcontent2.length; i++) {
		tabcontent2[i].style.display = "none";
	}
	
	tablink2 = document.getElementsByClassName("tablink2");
	for(i = 0; i < tablink2.length; i++) {
		tablink2[i].className = tablink2[i].className.replace(" active", "");
	}
	
	document.getElementById(name).style.display = "block";
	e.currentTarget.className += " active";
	
}



function numGen(name, dices, highest) {
	var currentTag = document.getElementById(name);
	var dices = parseInt(dices);
	var highest = parseInt(highest);
	var result = 0; 
	var i;
	for(i = 0; i < dices; i++) {
		result += Math.floor(Math.random() * highest) + 1;
	}
	
	
	showSpan = document.getElementById(name);
	showSpan.innerHTML = result;
}

function numGenCust() {
	var diceNum = document.getElementById("diceNum").value;
	var dices = parseInt(diceNum);
	var diceHighest = document.getElementById("diceHighest").value;
	var highest = parseInt(diceHighest);
	var diceCustom = document.getElementById("diceCustom");
	var result = 0;
	for(i = 0; i < dices; i++) {
		result += Math.floor(Math.random() * highest) + 1;
	}
	
	showSpan = diceCustom;
	showSpan.innerHTML = result;
	
}

function randNumGen() {
	var randIntLow = document.getElementById("randIntLow").value;
	var low = parseInt(randIntLow);
	var randIntHigh = document.getElementById("randIntHigh").value;
	var high = parseInt(randIntHigh);
	var result = Math.floor(Math.random() * (high - low + 1)) + low;
	
	var randNum = document.getElementById("randNumGen");
	showSpan = randNum;
	showSpan.innerHTML = result;
}

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function randLetter() {
	var getI= Math.floor(Math.random() * letters.length);
	document.getElementById("randLetterGen").innerHTML = letters[getI];
}
