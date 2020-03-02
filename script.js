

function convoKel(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputKel").innerHTML=(tempvalue+273.15) + ' K';
	document.getElementById('inputCel').value = "";
	
	}
}