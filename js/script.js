$( document ).ready(function() {
    $(".ops").click(function(){
       let result = $("#result").val();
        if(result.slice(-1) != "+" && result.slice(-1) != "-" && result.slice(-1) != "*"&& result.slice(-1) != "/")
        {$("#result").val($("#result").val()+$(this).html());       
    }
});
//dot
$(".dot").click(function(){
  let result = $("#result").val();
  let checkstr = result.slice(result.lastIndexOf("."),result.length);
  if(result.lastIndexOf(".")== -1||checkstr.includes("+")||checkstr.includes("-")||checkstr.includes("*")||checkstr.includes("/"))
   {
     
     if(result.slice(-1) != ".")
   {$("#result").val($("#result").val()+$(this).html());       
}
  }
});
$(".num").click(function(){
  $("#result").val($("#result").val()+$(this).html());             
     });
     $("#equals").click(function(){
     $("#result").val(eval($("#result").val()));
     });
     $(".clear").click(function(){
        $("#result").val("");             
      });
});
//sqrt
$(".sqrt").click(function(){
  $("#result").val(Math.sqrt($("#result").val()));
});
//square
$(".sq").click(function(){
  $("#result").val(Math.pow($("#result").val(),2));
});