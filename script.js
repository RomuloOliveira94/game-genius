
let order = [];
let clickedOrder = [];
let score = 0;

//0 = green, 1 = red, 2 = yellow, 3 = blue

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

//Cria a ordem aleatória de cores
let shuffleOrder = () => {

    let randomColor = Math.floor(Math.random()*4);

    order[order.length] = randomColor;

    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+ 1);
    }

}

//acente a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(()=>{
        element.classList.remove('selected');
    })    
}

//checa se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nivel!`)
        nextLevel();
    }
}

//função para o clique do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    })
}

//criar a função que retorna a cor

let createColorElement = (color) => {
    if(color == 0){
        return green
    } else if(color == 1){
        return red
    } else if(color == 2){
        return yellow
    } else if(color == 3){
        return blue
    }
}

//função para o proximo nivel do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para o jogador que perde o jogo

let gameOver = () =>{
    alert(`Pontuação: ${score}\nVocê perdeu\nClique em OK para iniciar um novo jogo`)
    order = [];
    clickedOrder();

    playGame();
}

//inicio do game
let playGame = () =>{
    alert('Bem vindo ao Genesis')
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)


//invocação da função
playGame();
