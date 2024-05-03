// for calculate the score
let userScore=0;
let compScore=0;

// for choices
const choices=document.querySelectorAll("img");


//for random choice for computer
const genCompChoice =()=>
{
    const options =["rock","paper","scissors"];
    const randInx= Math.floor(Math.random() *3);
    return options[randInx];
}
//function for draw game
const drawGame= ()=>{
    console.log("game was draw");
}
//function for win




//who choose what
const playGame = (userChoices)=>
{
    console.log("userChoice=",userChoices);
    //generate computer choice-->modular 
    const CompChoice = genCompChoice();
    console.log("computer choice=",CompChoice);
    if(userChoices == CompChoice)
    {
        drawGame();
    }
    else{
        let userWin=true; //when the user can win
        if(userChoices ==  "rock"){
            //two case for computer scissor and paper
            userWin =CompChoice=="paper" ? false:true;
        }
        else if(userChoices=="paper")
        {
            //computer has two choice scissor or rock
            userWin = CompChoice=="scissor" ? false:true;
        }
        else{
            //rock paper
            userWin = CompChoice == "rock"?false:true;
        }
    }
}

choices.forEach((choices) =>{
    // console.log(choices);
    choices.addEventListener("click",()=>{
        //which specific id is choose
        const userChoices=choices.getAttribute("id");
        // console.log("choices was clicked",choiceId);
        //call playGame
        playGame(userChoices);

    });
});