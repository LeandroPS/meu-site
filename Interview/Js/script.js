var points = 50;

function nextBaloon(){
  var curr = $("div.question.show");
  if(curr.next(".question").length){
    curr.removeClass("show");
    curr.next(".question").addClass("show");
  }else{
    nextScreen();
  }
}

function nextScreen(){
  var curr = $("article.show");
  if(curr.next().length){
    curr.removeClass("show");
    curr.next().addClass("show");
  }
}

function updatePoints(){
  console.log(points);
  return false;
}

$(function(){
  $.each(questions, function( index, question ) {
    var cont = jQuery("<div></div>").addClass("question");
    
    var text = jQuery("<div></div>").addClass("balloon balloon-question").text(question.question).appendTo(cont);
    
    var options = jQuery("<div></div>").addClass("balloon balloon-answer");
    
    var ul = jQuery("<ul></ul>");
    
    $.each(question.options, function( index, option ) {
      var li = jQuery("<li></li>").addClass(option.correct? "correct": "wrong").text(option.text).appendTo(ul);
    });
    
    ul.appendTo(options);
    options.appendTo(cont);

    cont.appendTo("div.balloons");
  });
  
  $("div.balloons div.question:first-child").addClass("show");
  
  $("div.balloons div.question ul li").click(function
(){
    if($(this).hasClass("correct")){
      if(points<100){
        points = points+10;
        updatePoints();
      }
    }else{
      if(points>0){
        points = points-10;
        updatePoints();
      }
    }
    nextBaloon();
  });
  
  $("button.nextScreen").click(nextScreen);
});