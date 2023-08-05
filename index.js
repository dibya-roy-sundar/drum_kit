// document.querySelectorAll(".drum")[0].addEventListener("click",function(){alert("i got clicked!");})
// detecting button press-add event listener to a specific element
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    // var j=i-2;
    // var sound="./sounds/tom-"+j+".mp3";
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // this same as use in c++;it stores the button element
        // it retuns all of the element of drum class
        // console.log(this);
        // this.innerHTML returns the text wrote at that element
        // this.style.color="white";
    // var audio=new Audio(sound);
    // audio.play();
    var buttonhtml=this.innerHTML;
    makesound(buttonhtml);
    animation(buttonhtml);
    })
}
// constructor function 
// function Bellboy(name,age,hasworkpermit,languages){
//     // properties
//     this.name=name;
//     this.age=age;
//     this.hasworkpermit=hasworkpermit;
//     this.languages=languages;
//     // create method=function thats associates with object
//     this.movesuitcase=function(){
//         alert("may i take your suitcae?");
//         pickupsuitcase();
//         move();
//     }
// }
// // initialise object
// var bellboy1=new Bellboy("james",19,true,["french","english","hindi"]);
// // calling methods
// bellboy1.movesuitcase();
// // calling properties
// bellboy1.name;
// // connecting drum with the keyboard
// // keypress is depricated
// detecting keyboard press-add event listener to entire document
// we can add event listener to entire document or a specific element too
document.addEventListener("keydown",function(event){
// KeyboardEvent.key  Returns a string representing the key value of the key represented by the event.
//   console.log(event);
    // it shows the event that triggered the anonymous function
    // that means whick key press triggered the the function and shows whole event in console
    // key is a property of event so we can call like this event.key
   makesound(event.key);
   animation(event.key);
})

function makesound(key){
    switch(key){
        case "w":
              var audio=new Audio("./sounds/crash.mp3");
              audio.play();
              break;
         case "a":
             var audio=new Audio("./sounds/kick-bass.mp3");
             audio.play();
             break;
         case "s":
                 var audio=new Audio("./sounds/snare.mp3");
                 audio.play();
                 break;
         case "d":
                     var audio=new Audio("./sounds/tom-1.mp3");
                     audio.play();
                     break;
         case "j":
                         var audio=new Audio("./sounds/tom-2.mp3");
                         audio.play();
                         break;
          case "k":
                             var audio=new Audio("./sounds/tom-3.mp3");
                             audio.play();
                             break;
          case "l":
                                 var audio=new Audio("./sounds/tom-4.mp3");
                                 audio.play();
                                 break;
          default:console.log(key);

 }
}
function animation(currentkey){
var activebutton=document.querySelector("."+currentkey);

activebutton.classList.add("pressed");
setTimeout(function(){activebutton.classList.remove("pressed");},100);

}