const numTit = document.querySelector(".tit-game .num-range");
const numGuess = document.querySelector(".cont-game .num-guess");

const btnPlay = document.querySelector(".btn-submit");
const resultTxt = document.querySelector(".txt-result");
const resultTit = document.querySelector(".tit-result");

function handelGame(){
    if(numTit.value === "" || numGuess.value === ""){
        alert("숫자를 입력하세요!")
    }else if(numTit.value < 0 || numGuess.value < 0){
        alert("0보다 높은 숫자를 입력하세요!")
    }else{
        handleRandom();
    }
}
function handleRandom(){
    const numRandom = Math.ceil(Math.random() * numTit.value)
    resultTxt.innerText = `You chose : ${numGuess.value}, the machine chose : ${numRandom}`
    if(numGuess.value == numRandom){
        resultTit.innerText = "You Won!"
    }else{
        resultTit.innerText = "You lost!"
    }
}
btnPlay.addEventListener("click",handelGame);
