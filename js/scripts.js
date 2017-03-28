$(function() {
  $("form").submit(function(e){
    e.preventDefault();
    var count = 0;
    $("input:checkbox[name=question]:checked").each(function() {
      count += 1;
    });
    if(count >= 5 ){
      $(".output").show().append("You are CRAZY STRESSED!");
    }
    else if(count < 5 && count >= 3 ) {
      $(".output").show().append("You could use a break!");
    }
    else {
      $(".output").show().append("You're so mellow. How do you do it???");
    }
    $("form").hide();
  });
});
