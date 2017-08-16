var wrong = "Please enter a valid email address";
var correct = "Thanks! We'll be in touch.";

function validate() {
	'use strict';
	var email = document.getElementById('email'), regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (regex.test(email.value)) {		
		document.getElementById('wrong').innerHTML = "";
		document.getElementById('correct').innerHTML = correct;
		return true;
	} else {
		document.getElementById('correct').innerHTML = "";
		document.getElementById('wrong').innerHTML = wrong;
		email.focus;
		return false;	
	}
	console.log('tex');
}