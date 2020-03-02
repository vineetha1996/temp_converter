

function convoKel(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputKel").innerHTML=(tempvalue).toFixed(2) + ' K';
	document.getElementById('inputCel').value = "";
	
	}
}