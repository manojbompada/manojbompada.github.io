
// check of specific todos by clicking
$("ul").on("click","li",function(){
	// // if li is gray 
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	// turn it black
	// 	$(this).css(
	// 	{ color:"black",
	//       textDecoration:"none"
	//     });
	// }
	// // else
	// else{		
	// 	// turn it gray
	// 	$(this).css(
	// 	{color:"gray",
	// 	 textDecoration:"line-through"
	// 	});
	// }
	$(this).toggleClass("completed");
	
});

// click on x's to delete todo.............stop event bubbiling
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotxt = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todotxt+"</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
