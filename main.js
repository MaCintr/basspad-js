function playSound(idAudio) {
    const element = document.querySelector(idAudio);

    if (element === null || element.localName !== 'audio') {
        console.log('Elemento não encontrado ou não é um elemento de áudio.');
        return;
    }

    if (element.paused) {
        element.play();
    } else {
        element.pause();
        element.currentTime = 0;
        element.play();
    }
}

const buttonList = document.querySelectorAll('.tecla');

buttonList.forEach(btn => {
    btn.onclick = function () {
        playSound('#som_' + btn.classList[1]);
    };

    btn.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            btn.classList.add('ativa');
        }
    };

    btn.onkeyup = function () {
        btn.classList.remove('ativa');
    };
});
