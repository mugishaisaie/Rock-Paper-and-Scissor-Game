  // const score ={
        //     wins: 0,
        //     losses: 0,
        //     ties:0

        // }




        const score =JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties:0

        }

//  if (!score) {
    
//     const score ={
//     wins: 0,
//     losses: 0,
//     ties:0

// }
//  }

let isAutoPlaying = false;
let intervalId;

function autoPlay(){

    if(!isAutoPlaying){
    intervalId=    setInterval(() => {
            const playerMove=PickComputerMove()
            playGame(playerMove);
            
        }, 2000);

        isAutoPlaying= true;
    }else {
        clearInterval(intervalId);
        isAutoPlaying= false;
    }
}
displayUpdateScore ();


document.querySelector('.js-rock').addEventListener('click', () => {
    playGame('Rock');
});
document.querySelector('.js-paper').addEventListener('click', () => {
    playGame('Paper');
});
document.querySelector('.js-scissors').addEventListener('click', () => {
    playGame('Scissors');
});

document.body.addEventListener('keydown',(event)=>{
    if(event.key ==='r'){
        playGame('Rock');
    }else if(event.key ==='p'){
        playGame('Paper');
    }else if(event.key ==='s'){
        playGame('Scissors');

    }else{
        alert("⛔🔕Please For KeyBoard R For Rock - P for Paper - S for Scissors")
    }
})



function playGame(playerMove){

   
    const computerMove= PickComputerMove();
    if(playerMove === 'Rock'){

        if(computerMove === 'Rock'){
        result= ' You Tie.';
    }else if(computerMove === 'Paper'){
        result= ' You Loose.';
    }else if(computerMove === 'Scissors'){
        result= ' You   Win.';
    }

    // alert(` You Picked ${playerMove} and Computer Picked ${computerMove}, So ${result}`);

    }
    else if(playerMove=== 'Paper'){

        if(computerMove === 'Rock'){
    result= ' You Win.';
}else if(computerMove === 'Paper'){
    result= ' You Tie.';
}else if(computerMove === 'Scissors'){
    result= ' You Loose.';
}

// alert(` You Picked ${playerMove} and Computer Picked ${computerMove}, So ${result}`);


    }else if(playerMove==='Scissors'){
        if(computerMove === 'Rock'){
    result= ' You Loose.';
}else if(computerMove === 'Paper'){
    result= ' You Win.';
}else if(computerMove === 'Scissors'){
    result= ' You Tie.';
}


}
if(result === ' You Win.'){
score.wins += 1;
}else if(result === ' You Loose.'){
score.losses += 1;
}else if(result === ' You Tie.') {
score.ties += 1;
}


displayUpdateScore ();
const resultEl = document.querySelector('.result').innerHTML= result;
const movesEl = document.querySelector('.moves').innerHTML=
`You <img src="images/${playerMove}-emoji.png" class="icon-moves" alt="">

<img src="images/${computerMove}-emoji.png" alt="">Computer`


localStorage.setItem('score', JSON.stringify(score))
//alert(`You Picked ${playerMove} and Computer Picked ${computerMove}, So ${result}`);

}

function displayUpdateScore (){
    const  scoreEl = document.querySelector('.score').innerHTML= 
    `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;


}

function PickComputerMove (){
const randomNumber = Math.random();

    let computerMove=' ';

    if (randomNumber  >=0  && randomNumber < 1/3){

        computerMove='Rock'
    }else if(randomNumber > 1/3 && randomNumber < 2/3){
        computerMove='Paper'
    
    }else if(randomNumber > 2/3 && randomNumber < 1){
        computerMove='Scissors'

}
return computerMove;

}
