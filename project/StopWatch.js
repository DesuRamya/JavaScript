let b1=document.getElementById('start');
let b2=document.getElementById('stop');
let b3=document.getElementById('reset');
// let hr=00;
let min=00;
let sec=00;
let ms=00;
b1.addEventListener('click',function () {
	b=true;
	stopWatch();
});
b2.addEventListener('click',function(){
	b=false;
});
b3.addEventListener('click',function(){
	b=false;
	// hr=0;
	min=0;
	sec=0;
	ms=0;
	//document.getElementById('hr')="00";
	document.getElementById('min')="00";
	document.getElementById('sec')="00";
	document.getElementById('ms')="00";
});
function stopWatch(){
	if (b) {
		ms++;
	}
	if(ms==100){
		sec++;
		ms=0;
	}
	if(sec==60){
		min++;
		sec=0;
	}
	// if(min==60){
	// 	hr++;
	// 	min=0;
	// 	sec=0;
	// }
	//let hrs=hr;
	let mins=min;
	let secs=sec;
	let msecs=ms;
	// if(hr<10){
	// 	hrs="0"+hrs;
	// }
	if(min<10){
		mins="0"+mins;
	}
	if(sec<10){
		secs="0"+secs;
	}
	if(ms<10){
		msecs="0"+ms;
	}
	//document.getElementById('hr').innerHTML=hrs;
	document.getElementById('min').innerHTML=mins;
	document.getElementById('sec').innerHTML=secs;
	document.getElementById('ms').innerHTML=msecs;
	setTimeout(stopWatch,10);
}