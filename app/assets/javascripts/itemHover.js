$(document).ready(function(){



	$("body").on("mouseover", ".itemName", function(){
		$(this).find(".shelf-add").css("background", "rgba(0,255,0,0.5)");
		$(this).find(".shelf-delete").css("background", "rgba(255,0,0,0.5)");
	})

	$("body").on("mouseout", ".itemName", function(){
		$(this).find(".shelf-add").css("background", "transparent");
		$(this).find(".shelf-delete").css("background", "transparent");
	})

});