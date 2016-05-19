
	function nxtSection(){
		if($("section:not(.introducao, .up)").size() > 0){
			//console.log("foi");
			$("section:not(.introducao, .up)").first().addClass("up");
			/*$('section.up').animate({
			  scrollTop: 0
			}, 1000);*/
			$('section.up').delay(1000).addClass("scrollable");
		}
	}

	function prevSection(){
		if($("section.up:not(.introducao)").size() > 0){
			//console.log("foi");
			$("section.up:not(.introducao)").last().removeClass("up");
//			$('section.up').animate({
//			  scrollTop: 0
//			}, 1000);
			$('section.up').delay(1000).addClass("scrollable");
		}
	}

$(function(){
	terminou = true;
	var timer;
	
	$( document ).on( "mobileinit", function() {
		$.mobile.loader.prototype.options.disabled = true;
	});

	$(window).bind('mousewheel DOMMouseScroll', function(event){
		if ((event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) && terminou) {
			$(this).trigger("upscroll");
			
		}
		else if(terminou && ($("section.up:last-child div.container").scrollTop() == $("section.up:last-child div.container").height())){
			$(this).trigger("downscroll");
			
		}
		terminou = false;
		clearTimeout($.data(this, 'timer'));
		$.data(this, 'timer', setTimeout(function() {
			terminou = true;
		}, 75));
	});
	

	
	lastScrollTop = 0;
	
	$(window).scroll(function(){
		//top = document.scrollTop;
		topp = $(this).scrollTop();
		alt = $(this).height();
		console.log(topp+"   ");
		if(topp > (alt - 10)){
			//$("section.linha-do-tempo").css({"position":"fixed", "top": "10px"});
			$("section.linha-do-tempo").addClass("up");
		}else if(topp < (alt - 10)){
			//$("section.linha-do-tempo").css({"position":"fixed", "top": "10px"});
			$("section.linha-do-tempo").removeClass("up");
		}
		
		if(topp > ((alt*2) - 20)){
			//$("section.linha-do-tempo").css({"position":"fixed", "top": "10px"});
			$("section.portfolio").addClass("up");
		}else if(topp < ((alt*2) - 20)){
			//$("section.linha-do-tempo").css({"position":"fixed", "top": "10px"});
			$("section.portfolio").removeClass("up");
		}
		
	});
	/*
	$(window).on("scrollstart", function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
		   $(this).trigger("downscroll");
	   } else {
		   $(this).trigger("upscroll");
	   }
	   lastScrollTop = st;
	});
	*/
	
	$(window).on('swipedown',function(){ 
		//nxtSection();
		console.log("swipedown");
	});
	$(window).on('swipeup',function(){
		//prevSection();
		console.log("swipeup");
	});
	
	$(window).on("downscroll", function(){
		//nxtSection();
	});
	
	$(window).on("upscroll", function(){
		//prevSection();
	});
	
	$(document).keydown(function(e) {
		switch(e.which) {
			case 38:
				// up
				//prevSection();
				break;

			case 40:
				// down
				//nxtSection();
				break;

			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
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