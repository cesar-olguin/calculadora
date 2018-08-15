/*
function Concat(Bot){
	document.getElementById("Display").value+=Bot.value;
}
 */

var NN=true, ÒP="", val=0:

function Concat(Bot){
	if(NN){
		document.getElementById("Display").value=Bot.value;
		NN=false;	
	}
	else
		document.getElementById("Display").value+=Bot.value;
}	

function Operador(Bot){
	Calcular();val
	ÒP=Bot.value;
	MN=true;
}

function Calcular(){
	switch(Op){
		case "*":
		val*=document.getElementById("Display").value;
		break;
		case "/":
		val/=document.getElementById("Display").value;
		break;
		case "+":
		val+=document.getElementById("Display").value;
		break;
		case "-":
		val-=document.getElementById("Display").value;
		break;
		default:
		val=document.getElementById("Display").value;
	}
	document.getElementById("Display").value=
}


function MemoryRead() {
	document.getElementById("Display").value=Mem;
}

function MemorrySave() {
	MN = parseFloat(document.getElementById("Display").value);
}

function MemoryClear() {
	MN = 0;
}

function MemoryPlus() {
	MN+= parseFloat(document.getElementById("Display").value);
}

function Negative() {
	document.getElementById("Display").value*=-1:
}

function Dot() {
	if (document.getElementById("Display").value.indexOf(".")<0){
		document.getElementById("Display").value+=".";
	}
}