//Player 1

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "images/dice" + n + ".png");

//Player 2

var v = Math.random();
v = v * 6;
v = Math.floor(v) + 1;
console.log(v);



var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "images/dice" + v + ".png");

//Conditionals

if (n > v){
    document.querySelector("h2").innerHTML = "Player 1 wins! 👏"
}

else if (v > n){
    document.querySelector("h2").innerHTML = "Player 2 wins! 👏"
}

else{
    document.querySelector("h2").innerHTML = "Draw! 👏"
}
