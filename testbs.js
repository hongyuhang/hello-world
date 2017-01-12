$( document ).ready(function() {
 	$('#payMethod').find(".dropdown-menu").find("li>a").each(function(i, obj) {
 		console.log(obj);
 		$(obj).on("click", function() {
 			$('#payMethodBtn').attr("value", $(this).val()).html($(this).html());
 		})
 	});
 	
});

