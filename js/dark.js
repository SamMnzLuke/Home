var btndrk = document.getElementById('md'),
    btndrkB = document.getElementById('mdB'),
    cajas = document.getElementById('fond'),
    contador = 0;

function cambiar() {
    if (contador == 0) {
        cajas.classList.add('blue');
        contador = 1;
        localStorage.setItem('blue', 'true');
    } else {
        cajas.classList.remove('blue');
        contador = 0;
        localStorage.setItem('blue', 'false');
    }
}

btndrk.addEventListener('click', cambiar, true)
btndrkB.addEventListener('click', cambiar, true)

if (localStorage.getItem('blue') === 'true') {
    document.body.classList.add('blue');
} else {
    document.body.classList.remove('blue');
}