var points = 0;
var all = 0;

function next(){
  var index = $("article.show").index() +1;

  $("article").removeClass("show");
  $("article:nth-child("+(index+1)+")").addClass("show");
}

function nextAnimation(){
  all++;
  var height = $("div.inner div.question.stuck").size()*75;
  if(height+75<$(".content.play").outerHeight()){
    $("div.inner div.question:not(.stuck):not(.correct)").first().addClass("current").animate({bottom: height}, 5000, "linear", function(){
      $(this).addClass("stuck");
      nextAnimation();
    });
  }else{
    setTimeout(function(){
      $("article").removeClass("show");
      $("article:nth-child(4)").addClass("show");
    }, 2500);
  }
  
  if($("div.inner div.question:not(.stuck):not(.correct)").size()==0){
    setTimeout(next, 2500);
    
  }
}

function increasePoints(){
  points = points+1;
  $("span.points").text(points);
}

$(function(){
  
  $("div.inner div.question").css("bottom", $(".content.play").outerHeight());
  $("button.start").click(function(){
    next();
    nextAnimation();
  });
  
  $("div.question:not(.stuck) ul li.correct").click(function(){
    if(!$(this).parents(".question").hasClass("stuck")){
      increasePoints();
      $(this).parents("div.question").stop(true, false).addClass("correct");
      nextAnimation();
    }
  });
  
  $("a.call").click(function(){
    $(this).text("(22) 2725-0872");
  });
});