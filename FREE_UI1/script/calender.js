
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