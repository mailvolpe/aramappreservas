$(document).ready( function(){
	/*setInterval(function(){ 
		$("#layer").delay(2000).fadeOut("slow");
		//alert("Mostra iframe")
	 }, 5000);*/
	$('#my_iframe').on("load" , function(){
		$("#layer").delay(2000).fadeOut("slow");
	})
});

