$(document).ready(function(){
	alert("Cargada");
	$("div").text("Soy un div");
	$(".DivUnico").text("Yo tengo Clase");
	$(".ElMeroMero").text("Yo tengo un ID");
	//$(this)
	$("[type='button']").click(function(){
		alert("Funciono con JQuery")
	});

	$("div").mouseenter(function(){
		$(this).text("Entra");
	});

	$("div").mouseenter(function(){
		$(this).text("Entra");
	});

	$("input").focus(function(){
		$(this).css("background-color","#AAFF00");
	});

	$("input").blur(function(){
		$(this).css("background-color","#FFFFFF");
	});

	$("[type='range']").on("input",function(){
		$("[type='text']").val($(this).val());},
		change:function(){
			alert("Ya");
		});

	$("hide").click(function(){
		$("div").hide();
	});

})