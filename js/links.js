particlesJS("particles-js", {
    particles: {
        number: { value: 6, density: { enable: true, value_area: 1000 } },
        color: { value: "#ebebeb" },
        shape: {
            type: "polygon",
            stroke: { width: 0, color: "transparent" },
            polygon: { nb_sides: 6 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.1,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 160,
            random: true,
            anim: { enable: true, speed: 10, size_min: 40, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 400,
            color: "#000",
            opacity: 1,
            width: 2
        },
        move: {
            enable: true,
            speed: 24,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "grab" },
            onclick: { enable: false, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);






// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
//     button.addEventListener('click', seatFunction, false);
// });

// function seatFunction() {
//     buttons.forEach(btn => btn.classList.remove('active'));
//     this.classList.add('active');
// }

// redirect to home

// var a = document.getElementById('Home'),
//     b = document.getElementById('About'),
//     c = document.getElementById('Services'),
//     d = document.getElementById('Portfolio'),
//     e = document.getElementById('ContactUs'),
//     contador = 0;


// document.getElementById("Hm").onclick = function() {
//     location.href = "#Home";
//     history.pushState(null, "", "#Home");
//     a.classList.add('ok');
//     b.classList.remove('ok');
//     c.classList.remove('ok');
//     d.classList.remove('ok');
//     e.classList.remove('ok');
//     contador = 0;

// }



// document.getElementById("Ab").onclick = function() {
//     location.href = "#About";
//     b.classList.add('ok');
//     history.pushState(null, "", "#Home");
//     b.classList.add('ok');
//     a.classList.remove('ok');
//     c.classList.remove('ok');
//     d.classList.remove('ok');
//     e.classList.remove('ok');
//     contador = 1;
// }

// document.getElementById("Ss").onclick = function() {
//     location.href = "#Services";
//     history.pushState(null, "", "#Home");
//     c.classList.add('ok');
//     a.classList.remove('ok');
//     b.classList.remove('ok');
//     d.classList.remove('ok');
//     e.classList.remove('ok');
//     contador = 2;

// }

// document.getElementById("Pf").onclick = function() {
//     location.href = "#Portfolio";
//     history.pushState(null, "", "#Home");
//     d.classList.add('ok');
//     a.classList.remove('ok');
//     b.classList.remove('ok');
//     c.classList.remove('ok');
//     e.classList.remove('ok');
//     contador = 3;

// }

// document.getElementById("Ct").onclick = function() {
//     location.href = "#ContactUs";
//     history.pushState(null, "", "#Home");
//     e.classList.add('ok');
//     a.classList.remove('ok');
//     b.classList.remove('ok');
//     c.classList.remove('ok');
//     d.classList.remove('ok');
//     contador = 4;

// }

// dark mode



// fin dark mode

// botton que muestra todo el menú y cambia de imagen al seleccionarlo

// var bMain = document.getElementById('btnMenu'),
//     menuA = document.getElementById('menu'),
//     Home = document.getElementById('Hm'),
//     cnt = 0;
// CAct = 0;

// function abrir() {
//     if (cnt == 0) {

//         cnt = 1;
//         CAct = 0;

//         menuA.classList.add('At');

//         if (CAct == 0) {
//             CAct = 1;
//             Home.classList.add('ok');
//             bMain.innerHTML = `<img  src="img/card.png" width="30" height="30"></img>`

//         }

//     } else {
//         cnt = 0;
//         bMain.innerHTML = `<img  src="img/roof.png" width="30" height="30"></img>`
//         menuA.classList.remove('At');
//     }
// }

// bMain.addEventListener('click', abrir, true)


// botton que muestra todo el menú y cambia de imagen al seleccionarlo end


// function cambiar() {
//     if (contador == 0) {
//         cajas.classList.add('one');
//         contador = 1;
//         localStorage.setItem('one', 'true');

//     } else if (contador == 1) {

//         cajas.classList.add('two');
//         contador = 2;
//         localStorage.setItem('two', 'true');

//         cajas.classList.remove('one');
//         localStorage.setItem('one', 'false');

//     } else if (contador == 2) {

//         cajas.classList.add('three');
//         contador = 3;
//         localStorage.setItem('three', 'true');

//         cajas.classList.remove('two');
//         localStorage.setItem('two', 'false');

//     } else if (contador == 3) {

//         cajas.classList.add('four');
//         contador = 4;
//         localStorage.setItem('four', 'true');

//         cajas.classList.remove('three');
//         localStorage.setItem('three', 'false');

//     } else {
//         cajas.classList.remove('four');
//         contador = 0;
//         localStorage.setItem('four', 'false');
//     }
// }

// btns.addEventListener('click', cambiar, true)



// if (localStorage.getItem('one') === 'true') {
//     document.body.classList.add('one');

// } else if (localStorage.getItem('two') === 'true') {
//     document.body.classList.add('two');

//     document.body.classList.remove('one');

// } else if (localStorage.getItem('three') === 'true') {
//     document.body.classList.add('three');

//     document.body.classList.remove('two');

// } else if (localStorage.getItem('four') === 'true') {
//     document.body.classList.add('four');

//     document.body.classList.remove('three');


// } else {
//     document.body.classList.remove('four');
// }