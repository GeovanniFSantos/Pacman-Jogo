const container = document.querySelector(".container")
const imgPacman = document.querySelector('.pacman')

let y = 0;
let x = 0;


function paraDireita (){
    x = x + 10;
    imgPacman.style.left = x + 'px';
}
function paraCima (){
    y = y + 10;
    imgPacman.style.top = y + 'px'
}
function paraEsquerda (){
    x = x - 10;
    imgPacman.style.left = x + 'px';
}
function paraBaixo (){
    y = y - 10;
    imgPacman.style.top = y + 'px';
}

function mover(event){
   if (event.keyCode == 38) { 
    paraBaixo('PARA CIMA');
   } else if (event.keyCode == 37) { 
    paraEsquerda('ESQUERDA');
   } else if (event.keyCode == 39) {
    paraDireita('DIREITA')
   } else if (event.keyCode == 40) {
    paraCima('PARA BAIXO');
   }
}

document.addEventListener('keydown', mover);