//geting user input
let userChoice = prompt("Rock Paper Scissor");

// array for selecting
const choice =["rock","paper","scissor"];

// generating random number

let compChoice = choice[Math.floor(Math.random()*3)+1];


if(userChoice){
    userChoice = userChoice.toLowerCase();
    if(userChoice === "rock" || userChoice === "siccor" || userChoice === "papper"){
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                alert("You lost! HAHAHA")
            }
            else if(compChoice==="scissor"){
                alert("huh, U just got lucky");
            }
            else{
                alert("Stop copying me!!");
            }
        }
        if(userChoice==="paper"){
            if(compChoice==="scissor"){
                alert("You lost! HAHAHA")
            }
            else if(compChoice==="rock"){
                alert("huh, U just got lucky");
            }
            else{
                alert("Stop copying me!!");
            }
            if(userChoice==="scissor"){
                if(compChoice==="rock"){
                    alert("You lost! HAHAHA")
                }
                else if(compChoice==="paper"){
                    alert("huh, U just got lucky");
                }
                else{
                    alert("Stop copying me!!");
                }
            }
        }
        document.querySelector("h1").innerText = compChoice;
    }
    else{
        alert("Enter Rock, Paper or Scissors");
    }
}
else{
    alert("Enter choice");
}
