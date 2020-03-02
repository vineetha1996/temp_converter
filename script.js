

function convoKel(tempvalue) {
	if (tempvalue == "") {} else {
	tempvalue = parseFloat(tempvalue);
	document.getElementById("outputKel").innerHTML=(tempvalue).toFixed(2) + ' K';
	document.getElementById("outputCel").innerHTML=((tempvalue-273.15)).toFixed(2) + ' &degC';
	document.getElementById("outputFahr").innerHTML=((tempvalue*(9/5)-459.67)).toFixed(2) + ' &degF';
	document.getElementById('inputCel').value = "";
	document.getElementById('inputFahr').value = "";
	}
}