// document.querySelector("button").addEventListener("click", handleClick);

//My tutors method

//Detect button press through clicks

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
});

}
    // this.style.color = "white"; /*to change color of innerhtml*/

    
    // alert("I got clicked!")

//Detect Keybaoard press

document.addEventListener("keypress", function(event) { 
    makeSound(event.key); 
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

    default: console.log(buttonInnerHTML)
        break;
 }

}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}































//OR


// document.querySelector(".set").addEventListener("click", function() {
//     alert("I got clicked!");
// });

// function (){
//     alert("I got clicked!");
// }


// document.querySelector(".set").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }


// function HouseKeeper1 (name, age, indigene, favourite) {
//     this.name = "John";
//     this.yearsOfExperience = 12;
//     this.indigene = true;
//     this.favourite = ["bathroom","lobby"];
//   }

// function HouseKeeper1 (name, age, indigene, favourite) {
//     this.name = "John";
//     this.age = "12";
//     this.indigene = true;
//     this.favourite = ["bathroom","lobby"];
//   }