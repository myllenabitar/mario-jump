const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');    
const container = document.querySelector('.container');
const pontuacao = document.getElementById('pontuacao');
const startButton = document.getElementById('startButton');
let pontuacaoAtual = 0; // tentar zerar pontuação e jogo pra funcionar com start
let loop;
let obstaculoPassado = false;

function jump() {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); 
}

function game() { 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Colisão com o cano: game over
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "/mario-jump-images/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        container.style.display = 'block';
        clearInterval(loop);
    } else if (pipePosition < 0 && !obstaculoPassado) {
        // O Mario passou pelo cano com sucesso, incrementa pontuação
        pontuacaoAtual += 1;
        pontuacao.textContent = pontuacaoAtual;
        obstaculoPassado = true;
    } else if (pipePosition > 120) {
        // Reset para próximo obstáculo
        obstaculoPassado = false;
    }
}


// Iniciar o loop do jogo
loop = setInterval(game, 20); // Executa a função game a cada 20ms

document.addEventListener('keydown', jump);



  


