
const fotos = Array.from(
    document.querySelectorAll('.foto img')
);

const visor = document.getElementById('visor');
const imagenGrande = document.getElementById('imagenGrande');

const cerrar = document.getElementById('cerrar');
const minimizar = document.getElementById('minimizar');

const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

const contador = document.getElementById('contador');

let indiceActual = 0;

// MOSTRAR FOTOGRAFÍA

function mostrarFoto(indice) {

    if (fotos.length === 0) return;

    indiceActual = (indice + fotos.length) % fotos.length;

    imagenGrande.src = fotos[indiceActual].src;
    imagenGrande.alt = fotos[indiceActual].alt;

    contador.textContent =
        `${indiceActual + 1} / ${fotos.length}`;

    visor.classList.add('activo');
}

// ABRIR FOTOGRAFÍA

fotos.forEach((foto, indice) => {

    foto.parentElement.addEventListener('click', () => {
        mostrarFoto(indice);
    });

});

// FOTO ANTERIOR

anterior.addEventListener('click', () => {
    mostrarFoto(indiceActual - 1);
});

// FOTO SIGUIENTE

siguiente.addEventListener('click', () => {
    mostrarFoto(indiceActual + 1);
});

// CERRAR VISOR

function cerrarVisor() {
    visor.classList.remove('activo');
}

cerrar.addEventListener('click', cerrarVisor);

// MINIMIZAR VISOR

minimizar.addEventListener('click', cerrarVisor);

// CERRAR AL HACER CLIC FUERA DE LA FOTO

visor.addEventListener('click', (e) => {

    if (e.target === visor) {
        cerrarVisor();
    }

});

// NAVEGACIÓN CON TECLADO

document.addEventListener('keydown', (e) => {

    if (!visor.classList.contains('activo')) return;

    if (e.key === 'ArrowRight') {
        mostrarFoto(indiceActual + 1);
    }

    if (e.key === 'ArrowLeft') {
        mostrarFoto(indiceActual - 1);
    }

    if (e.key === 'Escape') {
        cerrarVisor();
    }

});
