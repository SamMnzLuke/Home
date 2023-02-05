var btsd = document.getElementById('hamburger'),
    actived = document.getElementById('main'),
    chn = document.getElementById('changed'),
    contador = 0;

function cambio() {
    if (contador == 0) {
        actived.classList.add('yw');
        chn.classList.add('active');

        contador = 1;
    } else {
        actived.classList.remove('yw');
        chn.classList.remove('active');
        contador = 0;
    }
}

btsd.addEventListener('click', cambio, true);