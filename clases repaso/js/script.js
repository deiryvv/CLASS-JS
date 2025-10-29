function iniciarjuego() {
    let botonMascotajugador = document.getElementById("boton-mascota");
    botonMascotajugador.addEventListener('click', seleccionarMascotajugador);
}

function seleccionarMascotajugador() {
    ("seleccionaste tu mascota")

    if(document.getElementById("hipoge").checked) {
         mascotajugador.innerHTML = 'Hipodoge'
    } else if(document.getElementById("capipepo").checked) {
         mascotajugador.innerHTML = 'Capipepo'
    } else if(document.getElementsById("ratigueya").checked) {
         mascotajugador.innerHTML = 'Ratigueya'
    } else {

    }   
    
}

window.addEventListener('load', iniciarjuego);

