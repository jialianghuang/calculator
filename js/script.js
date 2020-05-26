let ops = document.getElementsByClassName("ops");
Array.from(ops).forEach(function(element) {
  element.addEventListener('click', function(){
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
Array.from(num).forEach(function(element) {
  element.addEventListener('click', function(){
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