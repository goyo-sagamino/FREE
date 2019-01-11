var target1 = document.getElementById("personal");
var target2 = document.getElementById("gate");
var button = document.getElementById("submitPass");

var target1_1 = document.getElementById("pass");

target1.style.display = "none";
target2.style.display = "block";

button.onclick = function(){
	var pass = target1_1.value;
	if (pass === "password"){
		target1.style.display = "block";
		target2.style.display = "none";
	};
};