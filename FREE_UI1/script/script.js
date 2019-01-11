window.onload = function(){

    
    var top = document.getElementById("top");
    var form = document.getElementById("form");
    var report = document.getElementById("report");
    var help = document.getElementById("help");
    
    var label = document.getElementById("label2");
    var one = document.getElementById("yi");
    var two = document.getElementById("er");
    var three = document.getElementById("san");
    var four = document.getElementById("su");
	var target2 = document.getElementById("gate");
	var button = document.getElementById("submitPass");

	var target1_1 = document.getElementById("pass");

	label.style.display = "none";
	one.style.display = "none";
	target2.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

	button.onclick = function(){
		var pass = target1_1.value;
		if (pass === "password"){
			label.style.display = "block";
			one.style.display = "block";
			target2.style.display = "none";
		    two.style.display = "none";
		    three.style.display = "none";
		    four.style.display = "none";
		    
		    let obj1 = document.getElementById("top");
	        obj1.style.backgroundColor = "rgba(0,128,128,0.3)";
	        let obj2 = document.getElementById("form");
	        obj2.style.backgroundColor = "rgba(176,196,222,0.8)";
	        let obj3 = document.getElementById("report");
	        obj3.style.backgroundColor = "rgba(176,196,222,0.8)";
	        let obj4 = document.getElementById("help");
	        obj4.style.backgroundColor = "rgba(176,196,222,0.8)";
		};
	};
    
    top.onclick = function(){
    	label.style.display = "block";
		one.style.display = "block";
		target2.style.display = "none";
		two.style.display = "none";
		three.style.display = "none";
		four.style.display = "none";
		
		let obj1 = document.getElementById("top");
        obj1.style.backgroundColor = "rgba(0,128,128,0.3)";
        let obj2 = document.getElementById("form");
        obj2.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj3 = document.getElementById("report");
        obj3.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj4 = document.getElementById("help");
        obj4.style.backgroundColor = "rgba(176,196,222,0.8)";
    };
    
    form.onclick = function(){
    	label.style.display = "block";
    	one.style.display = "none";
    	two.style.display = "block";
    	three.style.display = "none";
    	four.style.display = "none";
    	
    	let obj1 = document.getElementById("top");
        obj1.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj2 = document.getElementById("form");
        obj2.style.backgroundColor = "rgba(0,128,128,0.3)";
        let obj3 = document.getElementById("report");
        obj3.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj4 = document.getElementById("help");
        obj4.style.backgroundColor = "rgba(176,196,222,0.8)";
    };
    
    report.onclick = function(){
    	label.style.display = "block";
    	one.style.display = "none";
    	two.style.display = "none";
    	three.style.display = "block";
    	four.style.display = "none";
    	
    	let obj1 = document.getElementById("top");
        obj1.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj2 = document.getElementById("form");
        obj2.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj3 = document.getElementById("report");
        obj3.style.backgroundColor = "rgba(0,128,128,0.3)";
        let obj4 = document.getElementById("help");
        obj4.style.backgroundColor = "rgba(176,196,222,0.8)";
    };
    
    help.onclick = function(){
    	label.style.display = "block";
    	one.style.display = "none";
    	two.style.display = "none";
    	three.style.display = "none";
    	four.style.display = "block";
    	
    	let obj1 = document.getElementById("top");
        obj1.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj2 = document.getElementById("form");
        obj2.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj3 = document.getElementById("report");
        obj3.style.backgroundColor = "rgba(176,196,222,0.8)";
        let obj4 = document.getElementById("help");
        obj4.style.backgroundColor = "rgba(0,128,128,0.3)";
    };
};
