var wrong = "Please enter a valid email address";
var correct = "Thanks! We'll be in touch.";
var email = document.getElementById('email'), regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// jQuery; avoids redirect.

$(document).ready(function () {
	'use strict';
    $("#submit").click(function (event) {
        event.preventDefault();
		if (!regex.test(email.value)) {
			$('#correct').html("");
			$('#wrong').html(wrong);
		} else {
			$('#wrong').html("");
			$('#correct').html(correct);
		}
		$("form").submit();
    });
});

// Vanilla Javascript

/*function validate() {
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
}

var sub = document.querySelector("#submit");
sub.addEventListener("click", validate);*/