function highlightText(txtVal, inHTML){
	var regexsrc = new RegExp(txtVal, "g");
	document.getElementById('srcDiv').innerHTML = inHTML.replace(regexsrc, "<mark>" + txtVal + "</mark>");
}