
$(function(){
	$(window).scroll(function(){	
		topp = $(this).scrollTop();
		alt = $(this).height();
		if(topp > (alt - 10)){
			$("section.linha-do-tempo").addClass("up");
		}else if(topp < (alt - 10)){
			$("section.linha-do-tempo").removeClass("up");
		}
		if(topp > ((alt*2) - 20)){
			$("section.portfolio").addClass("up");
		}else if(topp < ((alt*2) - 20)){
			$("section.portfolio").removeClass("up");
		}
	});
	
	$("section.linha-do-tempo ul li").click(function(){
		$("section.linha-do-tempo ul li").removeClass("ativo");
		$(this).addClass("ativo");
	});
	
	$("section.portfolio div.detalhes img").click(function(){
		$("div.img-container img").attr('src', $(this).attr('src').replace("mini", "big"));
		$("div.img-container").addClass("up");
		$("section").addClass("blurred");
	});
	
	$("div.img-container").click(function(){
		$(this).removeClass("up");
		$("section").removeClass("blurred");
	});
});