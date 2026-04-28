// the computer picks a random number less than 3, so it's between 3 options.//
function getcomputerchoice(){
let choice = Math.floor(Math.random()*3)
 if (choice == 0){
    return "rock"
} else if (choice == 1){
    return "paper"
} else if (choice == 2){
    return "scissors" 
}
}; 
// the human picks a word and the function assigns it to a number.//
function playround(Humanchoice,Computerchoice){
    if (Humanchoice == Computerchoice){
        return "tie!";
    } 
    else if ((Humanchoice == "rock" && Computerchoice == "scissors") ||
    (Humanchoice == "paper" && Computerchoice == "rock") ||
    (Humanchoice == "scissors" && Computerchoice == "paper")
    ){
        return "you win!";
    } 
    else {
        return "you lose!";
    } 
}
function checkwinner(result,Humanchoice,Computerchoice){
   if (result =="tie!"){
    console.log("It's a tie!")
    console.log(`Your score: ${humanscore}`)
    console.log(`Computer: ${computerscore}`)
   } else if (result == "you win!"){
    console.log(`You Win! ${Humanchoice} beats ${Computerchoice}.`)
    humanscore = humanscore + 1
    console.log(`Your score: ${humanscore}`)
    console.log(`Computer: ${computerscore}`)
   } else if (result =="you lose!"){
    console.log(`You lose! ${Computerchoice} beats ${Humanchoice}.`)
    computerscore = computerscore + 1
    console.log(`Your score: ${humanscore}`)
    console.log(`Computer: ${computerscore}`)
   }
}
let humanscore = 0;
let computerscore= 0;
for (let i = 0; i < 5; i++) {
 let Humanchoice = prompt("Choose rock, paper or scissors!");
 if (!Humanchoice) break;
  Humanchoice = Humanchoice.toLowerCase();
 let Computerchoice = getcomputerchoice();
 const result = playround(Humanchoice,Computerchoice);
 checkwinner(result, Humanchoice, Computerchoice);
 console.log(`Your choice: ${Humanchoice}`)
 console.log(`Computer's choice: ${Computerchoice}`)
}


