const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');    
const container = document.querySelector('.container');
const pontuacao = document.getElementById('pontuacao');
let loop;
let pontuacaoAtual = 0

function jump() {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); 
}
function game(){ 
    //console.log(game);
    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetTop;
    
    //console.log(pipe.style.animation)
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
       // console.log(game);
    } else {
            // Se o Mario não bateu no cano, ele passou e você pode contar pontos
            pontos();
        }
    }
    
function pontos() {
    // console.log('pontos', pontuacaoAtual)

    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetTop;
    
    
    if (marioPosition > 80 && pipePosition <= 120){
        console.log('pontou', marioPosition, pipePosition)
        pontuacaoAtual += +1;
        pontuacao.textContent = pontuacaoAtual;
        //console.log(pontuacaoAtual);
        }
}
        
document.addEventListener('keydown', jump);

  


