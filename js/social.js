// boton de FaceBook
var btnFacebook = document.getElementById('face'),
    cntFB = 0;

function irF() {
    if (cntFB == 0) {
        cntFB = 1;
        window.location.href = "https://www.facebook.com/MZLK26";


    } else {
        cntFB = 0;
        Swal.fire({

            position: 'center',
            // background: '#b2eaa7ab',
            background: '#eabba7ab',
            toast: 'false',
            icon: 'error',
            title: 'Sorry, the page is not found',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })


    }

}

btnFacebook.addEventListener('click', irF, true)

// fin boton de FaceBook


// boton de Instagram
var btnInstagram = document.getElementById('instagram'),
    cntIN = 0;

function irI() {
    if (cntIN == 0) {
        cntIN = 1;
        window.location.href = "https://www.instagram.com/petit_luke/";

    } else {
        cntIN = 0;
        Swal.fire({

            position: 'center',
            // background: '#b2eaa7ab',
            background: '#eabba7ab',
            toast: 'false',
            icon: 'error',
            title: 'Sorry, the page is not found',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }

}

btnInstagram.addEventListener('click', irI, true)

// fin boton de Instagram



// boton de Twitter
var btnTwitter = document.getElementById('twitt'),
    cntTw = 0;

function irT() {
    if (cntTw == 0) {
        cntTw = 1;
        window.location.href = "https://twitter.com/LukeMndz";
    } else {
        cntTw = 0;
        Swal.fire({

            position: 'center',
            // background: '#b2eaa7ab',
            background: '#eabba7ab',
            toast: 'false',
            icon: 'error',
            title: 'Sorry, the page is not found',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }

}

btnTwitter.addEventListener('click', irT, true)

// fin boton de Twitter

// boton de GitHub
var btnGitHub = document.getElementById('gitH'),
    cntGH = 0;

function irG() {
    if (cntGH == 0) {
        cntGH = 1;
        window.location.href = "https://github.com/Samuelluke";
    } else {
        cntGH = 0;
        Swal.fire({

            position: 'center',
            // background: '#b2eaa7ab',
            background: '#eabba7ab',
            toast: 'false',
            icon: 'error',
            title: 'Sorry, the page is not found',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }

}

btnGitHub.addEventListener('click', irG, true)

// fin boton de GitHub



// boton de WhatsApp
var btnWhatsApp = document.getElementById('WA'),
    cntWA = 0;

function irW() {
    if (cntWA == 0) {
        cntWA = 1;
        window.location.href = "https://api.whatsapp.com/send?phone=7227922843&text=¡Hola, Nececito mas informacion!";
    } else {
        cntWA = 0;
        Swal.fire({

            position: 'center',
            // background: '#b2eaa7ab',
            background: '#eabba7ab',
            toast: 'false',
            icon: 'error',
            title: 'Sorry, the page is not found',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }

}

btnWhatsApp.addEventListener('click', irW, true)

// fin boton de WhatsApp