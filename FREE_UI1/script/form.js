var target1 = document.getElementById("firstDiv");
var target2 = document.getElementById("seconDiv");
var target3 = document.getElementById("thirDiv");

var chart = function(){
	var ctx = document.getElementById("graphField");
	var myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['睡眠', '朝食', '学校または仕事', '自主学習', '夕食', '趣味など', 'その他'],
			datasets:[{
				backgroundColor:[
					"rgba(128,0,128,0.4)",
					"rgba(220,20,60,0.4)",
					"rgba(255,165,0,0.4)",
					"rgba(255,255,0,0.4)",
					"rgba(154,205,50,0.4)",
					"rgba(102,205,170,0.4)",
					"rgba(72,61,139,0.4)"
				],
				data: [6, 1, 6, 3, 5, 1, 3]
			}]
		},
	});
};

var div2 = document.getElementById("seconDiv");
var title = ["・就寝時間", "・朝食", "・学校または仕事", "・自主学習", "・夕食", "・趣味など", "・その他"];
for (var i in title) {

	var div3 = document.createElement("div");
	div3.classList.add("col-md-6");

	var p = document.createElement("p");
	var text = document.createTextNode(title[i]);

	var div4 = document.createElement("div");
	div4.classList.add("ft");

	var timeInput1 = document.createElement("input");
	timeInput1.classList.add("new");
	timeInput1.setAttribute("type", "time");
	timeInput1.setAttribute("value", "00:00");
	timeInput1.setAttribute("class","i1");

	var mark = document.createTextNode("～");

	var timeInput2 = document.createElement("input");
	timeInput2.classList.add("new");
	timeInput2.setAttribute("type", "time");
	timeInput2.setAttribute("value", "00:00");
	timeInput2.setAttribute("class","i2");

	div3.appendChild(p);
	p.appendChild(text);

	div4.appendChild(timeInput1);
	div4.appendChild(mark);
	div4.appendChild(timeInput2);
	div3.appendChild(div4);
	div2.appendChild(div3);
};

var button1 = document.createElement("button");
button1.setAttribute("id","ret1");
var bName1 = document.createTextNode("戻る");

var button2 = document.createElement("button");
button2.setAttribute("id","sub1");
var bName2 = document.createTextNode("完了");

button1.appendChild(bName1);
button2.appendChild(bName2);

div2.appendChild(button1);
div2.appendChild(button2);

//____________________________________________________________________________________

var div2 = document.getElementById("thirDiv");
var title = ["・就寝時間", "・朝食", "・自主学習", "・夕食", "・趣味など", "・その他"];
for (var i in title) {

	var div3 = document.createElement("div");
	div3.classList.add("col-md-6");

		var p = document.createElement("p");
	var text = document.createTextNode(title[i]);

	var div4 = document.createElement("div");
	div4.classList.add("ft");

	var timeInput1 = document.createElement("input");
	timeInput1.classList.add("new");
	timeInput1.setAttribute("type", "time");
	timeInput1.setAttribute("value", "00:00");

	var mark = document.createTextNode("～");

	var timeInput2 = document.createElement("input");
	timeInput2.classList.add("new");
	timeInput2.setAttribute("type", "time");
	timeInput2.setAttribute("value", "00:00");

	div3.appendChild(p);
	p.appendChild(text);

	div4.appendChild(timeInput1);
	div4.appendChild(mark);
	div4.appendChild(timeInput2);
	div3.appendChild(div4);
	div2.appendChild(div3);
};

var button1 = document.createElement("button");
button1.setAttribute("id","ret2");
var bName1 = document.createTextNode("戻る");

var button2 = document.createElement("button");
button2.setAttribute("id","sub2");
var bName2 = document.createTextNode("完了");

button1.appendChild(bName1);
button2.appendChild(bName2);

div2.appendChild(button1);
div2.appendChild(button2);



//__________________________________________________________________________________

target1.style.display = "block";
target2.style.display = "none";
target3.style.display = "none";

document.getElementById("weekdays").onclick = function () {
	target1.style.display = "none";
	target2.style.display = "block";
	target3.style.display = "none";
	
	var forms1 = document.getElementsByClassName("i1");
	var forms2 = document.getElementsByClassName("i2");
	for (var count in forms1){
		if (count === "length"){
			break;
		}; 
		console.log(count);
		var valform1 = forms1[count].value;
		var valform2 = forms2[count].value;
		console.log(valform2-valform1);
	};
	chart();

	
	document.getElementById("ret1").onclick = function(){
		target1.style.display = "block";
		target2.style.display = "none";
		target3.style.display = "none";

	};
};

document.getElementById("holidays").onclick = function () {
	target1.style.display = "none";
	target2.style.display = "none";
	target3.style.display = "block";
	chart();

	
	document.getElementById("ret2").onclick = function(){
		target1.style.display = "block";
		target2.style.display = "none";
		target3.style.display = "none";

	};
};

