var input = document.getElementById("myInput");
var text = document.getElementById("text");

input.addEventListener("keyup", function (event) {
    
  if (event.getModifierState("CapsLock")) 
  {
    text.style.display = "block";
  } 
  else {
    text.style.display = "none";
  }
  
});

document.getElementById("text").style.color = "rgb(240, 34, 34)";

