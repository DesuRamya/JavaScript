const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');
function addTask() {
	if (inputBox.value==='') {
		alert("you must add something");
	}	
	else{
		let li=document.createElement("li");
		li.innerHTML=inputBox.value;
		list.appendChild(li);
		let span =document.createElement("span");
		span.innerHTML="\u00d7";
		li.appendChild(span);
	}
	inputBox.value="";
	save();
}
list.addEventListener("click",function(e){
	if (e.target.tagName==="LI"){
		e.target.classList.toggle("checked");
		save();
	}
	else if(e.target.tagName==="SPAN"){
		e.target.parentElement.remove();
		save();
	}

},false);

function save(){
	localStorage.setItem("data",list.innerHTML);
}
function tasks() {
	list.innerHTML=localStorage.getItem("data")
}
tasks()