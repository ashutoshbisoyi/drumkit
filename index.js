// -------------------to act on click------------------
var nod=document.querySelectorAll(".drum").length;
for(i=0;i<nod;i++){
  var bih=document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var bih=this.innerHTML;
    makesound(bih);
  });}
// ----------------------------to act on key press--------------------  
document.addEventListener("keypress",function(event){
  makesound(event.key);
})
// ------------------------------------sound funtion--------------------
function makesound(input){
  switch(input){
    case "a":var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;
    case "s":var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;
    case "d":var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;
    case "f":var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;
    case "j":var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
             break;
    case "k":var snare = new Audio("sounds/snare.mp3");
             snare.play();
             break;
    case "l":var crash = new Audio("sounds/crash.mp3");
             crash.play();
             break;                                    
  }
}
