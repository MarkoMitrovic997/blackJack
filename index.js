let firstCard = 10; /*Math.floor(Math.random() * 10) + 2;*/
let secondCard = 4; /*Math.floor(Math.random() * 10) + 2;*/
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.getElementById("sum-el");
console.log(sumEl);

function startGame(){

    sumEl.textContent = "Sum: " +sum;
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "You won";
        hasBlackJack = true;
    }
    else{
        message = "You are over 21";
        isAlive = false;
    }
    messageEl.textContent = message;
}




