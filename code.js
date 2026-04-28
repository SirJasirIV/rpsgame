// the computer picks a random number less than 3, so it's between 3 options.//
function getcomputerchoice(choice){
 choice = Math.floor(Math.random()*3)
 console.log(choice)
};
// the human picks a word and the function assigns it to a number.//
function gethumanchoice(Hchoice){
 let answer = prompt("Choose between rock, paper, and scissors!")
 if (answer == "rock"){
 Hchoice = 0;
 } else if (answer == "paper"){
    Hchoice = 1;
 } else if (answer == "scissors"){
    Hchoice = 2;
 }   else {
    console.log("Not a choice!")
 }
console.log(Hchoice)
};