

function convoKel(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputKel").innerHTML=(tempvalue+283.5).toFixed(2) + ' K';
	document.getElementById('inputCel').value = "";
	
	}
}