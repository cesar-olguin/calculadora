var NN=true,OP="",val=0;
	
function concat(Bot){
	if(NN){
		document.getElementById("Display").value=Bot.value;
		NN=false;
	}
	else
		document.getElementById("Display").value+=Bot.value;
}

function Operador(Bot){
	Calcular();
	OP=Bot.value;
	NN=true;
}

function Calcular(){
	switch(OP){
		case"*":
		val*=document.getElementById("Display").value;
		break;
		case"/":
		val/=document.getElementById("Display").value;
		break;
		case "+":
		val+=parseFloat(document.getElementById("Display").value);
		break;
		case "-":
		val-=document.getElementById("Display").value;
		break;
		default:
		val=parseFloat(document.getElementById("Display").value);
	}
	document.getElementById("Display").value=val;
}

function MemorySave(){
	Mem=parseFloat(document.getElementById("Display").value); 
}

function MemoryRead(){
	document.getElementById("Display").value=Mem;
}

function MemoryPlus(){
	Mem+=parseFloat(document.getElementById("Display").value);
}

function MemoryClear(){
	Mem=0;
}

function Clear(){
	document.getElementById("Display").value="";
}

function ClearAll(){
	NN=true,OP="",val=0;Clear();
}

function Negative(){
	document.getElementById("Display").value*=-1;
}

function Dot(){
	if(document.getElementById("Display").value.indexOf(".")<0)
	{
		document.getElementById("Display").value+=".";
	}
}