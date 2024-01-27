

for(i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      this.style.color = "green";
      var btn = this.innerHTML;
      makeSound(btn);
      btnAnimation(btn);

    });
}

// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();

document.addEventListener("keypress",function(e) {
  makeSound(e.key);
  btnAnimation(key);
});

function makeSound(key) {
  switch(key){
    case "w":
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
    
    case "j":
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;

    default: console.log(btn);
  }
}


function btnAnimation(currentKey){
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");

  setTimeout(function(){
    activeBtn.classList.remove("pressed")
  },1000);
}
