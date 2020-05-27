"use strict";

let ops = document.getElementsByClassName("ops");
[...ops].forEach(function(el) {
  el.addEventListener('click', function(){
       let result = document.querySelector("#result").value;
        if(result.slice(-1) != "+" && result.slice(-1) != "-" && result.slice(-1) != "*"&& result.slice(-1) != "/")
        {
        document.querySelector("#result").value += this.innerText;     
    }
})});
//dot
document.querySelector(".dot").addEventListener("click",function(){
  let result = document.querySelector("#result").value;
  let checkstr = result.slice(result.lastIndexOf("."),result.length);
  if(result.lastIndexOf(".")== -1||checkstr.includes("+")||checkstr.includes("-")||checkstr.includes("*")||checkstr.includes("/"))
   {
     
     if(result.slice(-1) != ".")
   {document.querySelector("#result").value += ".";    
}
  }
});

let num = document.getElementsByClassName("num");
[...num].forEach(function(el) {
  el.addEventListener('click', function(){
    document.querySelector("#result").value += this.innerText;             
       });
});


document.querySelector("#equals").addEventListener("click",function(){
  document.querySelector("#result").value = eval(document.querySelector("#result").value);
     });
     
     document.querySelector(".clear").addEventListener("click",function(){
      document.querySelector("#result").value = "";           
      });

//sqrt
document.querySelector(".sqrt").addEventListener("click",function(){

  document.querySelector("#result").value = Math.sqrt(document.querySelector("#result").value);
});
//square
document.querySelector(".sq").addEventListener("click",function(){
  document.querySelector("#result").value = Math.pow(document.querySelector("#result").value,2);
});
//keypress
document.onkeypress = Key;
function Key(e) {
switch(e.code){
  case "Digit1":
    Enter(1);
    break;
  case "Digit2":
    Enter(2);
    break;
  case "Digit3":
    Enter(3);
    break;
  case "Digit4":
    Enter(4);
    break;
  case "Digit5":
    Enter(5);
    break;
  case "Digit6":
    Enter(6);
    break;
  case "Digit7":
    Enter(7);
    break;
  case "Digit8":
    Enter(8);
    break;
  case "Digit9":
    Enter(9);
    break;
  case "Digit0":
    Enter(0);
    break;
  default:
    break;
}
}
function Enter(num){
  document.querySelector("#result").value += num;     
}