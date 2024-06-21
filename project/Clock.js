b1=document.getElementById("button1")
b2=document.getElementById("button2")
function twelveHourFormat() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var meridian = "AM";
	if (h==0){
		h = 12;
	}
	if (h>12){
		h = h-12;
		meridian = "PM";
	}
	h=(h<10)?"0"+h:h;
	m=(m<10)?"0"+m:m;
	s=(s<10)?"0"+s:s;
	var t=h+":"+m+":"+s+" "+meridian;
	document.getElementById("print").innerHTML = t;
	setTimeout(twelveHourFormat,1000);
}
function twentyFourHourFormat() {
	var d= new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	h=(h<10)?"0"+h:h;
	m=(m<10)?"0"+m:m;
	s=(s<10)?"0"+s:s;
	var t=h+":"+m+":"+s;
	document.getElementById("print").innerHTML = t;
	setTimeout(twentyFourHourFormat,1000);
}
