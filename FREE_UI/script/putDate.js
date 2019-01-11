var tit = function(num){
	
	var date = new Date();
	var dt = new Date(date.getFullYear(), date.getMonth()+num);
	var year = dt.getFullYear();
	var month = dt.getMonth();
	var p = document.createElement("p");
	p.setAttribute("id","tit");
	var hoge = document.getElementById("hoge");
	var text = document.createTextNode(year+"年"+(month+1)+"月カレンダー");
	p.appendChild(text);
	hoge.appendChild(p);
};


var mark = function () {
        let day = new Date();
        let obj = document.getElementById("td" + day.getDate());
        var parent = obj.parentNode;
        parent.style.backgroundColor = "rgba(0,128,128,0.3)";
        
        
		var elementClass = document.getElementsByClassName("d");
        var elements = Array.prototype.slice.call(elementClass);
        console.log(elementClass);
};

var build = function () {
	var base = document.getElementById("calenderBase");
    var table = document.createElement("table");
    table.classList.add("table","table-bordered","table-striped","col-md-12");
        table.setAttribute("id","calender")
        base.appendChild(table);
        
        var head = document.createElement("tr");
        head.setAttribute("id","chead");
        table.appendChild(head);
                                		
        var jpn = ['日','月','火','水','木','金','土'];
        var days = ['sun','mon','tue','wed','thu','fri','sat'];
        for (var count in days){
            var th = document.createElement("th");
            th.setAttribute("scope","col");
            th.classList.add(days[count]);
            var text = document.createTextNode(jpn[count]);
            th.appendChild(text);
            head.appendChild(th);
        };

        var weeks = ["zer","one","two","thr","fou","fiv"];
        var num = [[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28],[29,30,31,32,33,34,35],[36,37,38,39,40,41,42]];
        for (var count1 in weeks){
        var memo = num[count1];
            var tr = document.createElement("tr");
            tr.setAttribute("id",weeks[count1]);
            table.appendChild(tr);
                                			
            for (var count2 in memo){
                var number = document.createElement("div");
                number.classList.add("box");
                var td = document.createElement("td");
                //var p = document.createElement("p");
                td.classList.add(days[count2]);
                td.appendChild(number);
                tr.appendChild(td);
                //td.appendChild(p);
            };
        };
};

//_________________________________________________________________カレンダーの基盤_____________________________________________________________________________________

var put = function(con){
		var dt = new Date();
		console.log(dt);
		var firstDt = new Date(dt.getFullYear(), dt.getMonth() + con, 1); // 指定した月の初日を参照
		var lastDt = new Date(dt.getFullYear(), dt.getMonth() + con + 1, 0); //　指定した月の末日を参照

		var num = [1]
		for (var i = 2; i < lastDt.getDay()+1; i++) {
		    num.push(i);
		};
		var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		var weeks = ["zer", "one", "two", "thr", "fou", "fiv"];

		var tr = document.getElementById("zer");  //カレンダーの一週目を取得
		var children = tr.childNodes;  //一週目のtr要素の子要素すべてを取得
		var day = [];
		for (var j = 1; j < lastDt.getDate()+1; j++) {
		    day.push(j);
		};
		console.log(day)

		for (var count1 = firstDt.getDay(); count1 < 7; count1++) {
		    var grandsons = children[count1].childNodes;
            grandsons[0].setAttribute("id", "td" + day[0]);
		    var p = document.createElement("p")
		    p.classList.add("d")
		    p.classList.add("dt");
		    var text = document.createTextNode(day[0]);
		    grandsons[0].appendChild(p);
            p.appendChild(text);
            day.shift();
		};
		console.log(day);

		var s1 = weeks.slice(1,7);
		for (var count in s1) {
		    var tr = document.getElementById(s1[count]);
		    var children1 = tr.childNodes;
		    for (var count2 in days){
		    	var grandson1 = children1[count2].childNodes;
		    	if (day[0] > 0 && day[0] < lastDt.getDate()+1){
		    		var p = document.createElement("p");
		  			p.classList.add("d")
		    		p.classList.add("dt");
		    		var text1 = document.createTextNode(day[0]);
		    		grandson1[0].appendChild(p);
		    		p.appendChild(text1);
                    grandson1[0].setAttribute("id", "td" + day[0]);
		    		day.shift();
		    	}
		    	
		    };
		    console.log(children);
		};
		
		
	};

//_________________________________________________________________日付の書き込み___________________________________________________________________________

var del = function(){
	var target1 = document.getElementById("calender");
	target1.remove();
	
	var target2 = document.getElementById("tit");
	target2.remove();
	
};

var layer = function(num){

	var date = new Date();
	var dt = new Date(date.getFullYear(), date.getMonth()+num);
	
	var target = document.getElementsByClassName("d");
	for (var count in target){
		target[count].onclick = function(){
			
			day = this.innerHTML;
			
			var base = document.getElementById("calenderBase");
			var layer = document.createElement("div");
			layer.setAttribute("id","layerBase");
			
			var div1 = document.createElement("div");
			div1.setAttribute("id","firstDiv");
			
			var text = document.createTextNode(dt.getFullYear()+"年"+(dt.getMonth()+1)+"月"+day+"日がクリックされました。");
			
			var br = document.createElement("br");
			br.setAttribute("class","onTheLayer");
			
			var button1 = document.createElement("button");
			var button2 = document.createElement("button");
			var button3 = document.createElement("button");
			button1.setAttribute("id","returnFromLayer");
			button2.setAttribute("id","setReminder");
			button3.setAttribute("id","printReminder");
			button1.setAttribute("class","onTheLayer");
			button2.setAttribute("class","onTheLayer");
			button3.setAttribute("class","onTheLayer");
			
			var text5 = document.createTextNode("戻る");
			var text6 = document.createTextNode("リマインダーを設定");
			var text7 = document.createTextNode("リマインダーの確認");
			
			layer.appendChild(text);
			div1.appendChild(br);
			div1.appendChild(br);
			button1.appendChild(text5);
			button2.appendChild(text6);
			button3.appendChild(text7);
			div1.appendChild(button1);
			div1.appendChild(button2);
			div1.appendChild(button3);
			layer.appendChild(div1);
			base.appendChild(layer);
			
			//______________________________________________________________________
			var div2 = document.createElement("div");
			div2.setAttribute("id","secondDiv");
			
			var textArea = document.createElement("textarea");
			textArea.setAttribute("id","subject");
			
			var button1 = document.createElement("button");
			var text1 = document.createTextNode("リマインダーの登録");
			
			div2.appendChild(textArea);
			
			button1.appendChild(text1);
			div2.appendChild(button1);
			
			layer.appendChild(div2);
			
			div1.style.display = "block";
			div2.style.display = "none";
			
			returnFromLayer.onclick = function(){
				layer.remove();
			};
			
			setReminder.onclick = function(){
				
				var target1 = document.getElementById("firstDiv");
				var target2 = document.getElementById("secondDiv");
				
				target1.style.display = "none";
				target2.style.display = "block";
				
				button1.onclick = function(){
					console.log(day);
					var rem = document.getElementById("reminder");
					var getValue = document.getElementById("subject").value;
					
					var text = document.createTextNode(getValue);
					rem.appendChild(text);
					
					var target1 = document.getElementById("firstDiv");
					var target2 = document.getElementById("secondDiv");
					
					target1.style.display = "block";
					target2.style.display = "none";
				};
			};
		};
	};
};

//_________________________________________________________________削除_____________________________________________________________________________________

var dt = new Date();

var back = document.getElementById("before");
var ret = document.getElementById("return");
var next = document.getElementById("next");

var title = document.getElementById("print");
var countn = 0;
tit(0);
put(0);
mark();
var firstDt = new Date(dt.getFullYear(), dt.getMonth() + 0, 1);
var title = document.createElement("p");
title.setAttribute("id","month");
var text4 = document.createTextNode(firstDt.getFullYear()+"年"+(firstDt.getMonth()+1)+"月");
var year = firstDt.getFullYear();
title.appendChild(text4);
layer(0);
console.log(year);

back.onclick = function(){
	countn --;
	del();
	tit(countn);
	build();
    put(countn);
    if (countn === 0) {
        mark();
    };
    layer(countn);
	var firstDt = new Date(dt.getFullYear(), dt.getMonth() + countn, 1);
	var text4 = document.createTextNode(firstDt.getFullYear()+"年"+(firstDt.getMonth()+1)+"月");
	title.appendChild(text4);
};

next.onclick = function(){
	countn ++;
	del();
	tit(countn);
	build();
    put(countn);
    if (countn === 0) {
        mark();
    };
    layer(countn);
	var firstDt = new Date(dt.getFullYear(), dt.getMonth() + countn, 1);
	var text4 = document.createTextNode(firstDt.getFullYear()+"年"+(firstDt.getMonth()+1)+"月");
	title.appendChild(text4);
};

ret.onclick = function(){
	countn = 0;
	del();
	tit(countn);
	build();
    put(0);
    mark();
    layer(countn);
	var firstDt = new Date(dt.getFullYear(), dt.getMonth() + 0, 1);
	var text4 = document.createTextNode(firstDt.getFullYear()+"年"+(firstDt.getMonth()+1)+"月");
	title.appendChild(text4);
};
