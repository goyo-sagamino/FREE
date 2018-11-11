window.onload = function(){

	let pathname= location.pathname;
	
	if(pathname === "/C:/Users/naito%20sho/Desktop/FREE_UI/HTML/index.html"){
		let obj =document.getElementById("top");
		obj.style.backgroundColor="rgba(0,128,128,0.3)";
	
	}else if (pathname === "/C:/Users/naito%20sho/Desktop/FREE_UI/HTML/form.html"){
		let obj =document.getElementById("form");
		obj.style.backgroundColor="rgba(0,128,128,0.3)";
		
	}else if (pathname === "/C:/Users/naito%20sho/Desktop/FREE_UI/HTML/report.html"){
		let obj =document.getElementById("report");
		obj.style.backgroundColor="rgba(0,128,128,0.3)";
		
	}else if (pathname === "/C:/Users/naito%20sho/Desktop/FREE_UI/HTML/help.html"){
		let obj =document.getElementById("help");
		obj.style.backgroundColor="rgba(0,128,128,0.3)";
		
	}
}