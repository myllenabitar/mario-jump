const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');    
const container = document.querySelector('.container');
const pontuacao = document.getElementById('pontuacao');


let pontuacaoAtual = 0

function jump() {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
   
}
const loop = setInterval(() => {  
    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = "/mario-jump-images/game-over.png";
        mario.style.width = '75px'
        mario.style.margin.Left = '50px'

        container.style.display = 'block';
        
        clearInterval(loop);
    }
})

const pontos = setInterval (() => {
    console.log('pontos')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (marioPosition > 80 && pipePosition <= 0 && pipePosition <= 120){
        pontuacaoAtual += +1;
        pontuacao.textContent = pontuacaoAtual;
          setInterval(() => {
            pontos =  setInterval(pontuacao, 500); 
          })
         
        }
})

document.addEventListener('keydown', jump);
pontos =  setInterval(pontuacao, 500);
        
document.addEventListener('keydown', jump);
checarsePulouDoCano =  setInterval(pontuacao, 1000);     


