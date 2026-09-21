const boton = document.getElementById("btnIniciar");
const musica = document.getElementById("musica");
const inicio = document.getElementById("inicio");

boton.addEventListener("click", async () => {
    try {
        await musica.play();

        // Iniciar las animaciones
        document.body.classList.remove("container");

        // Ocultar el botón
        inicio.classList.add("ocultar");

        setTimeout(() => {
            inicio.style.display = "none";
        }, 1000);

    } catch (error) {
        console.error("No se pudo reproducir la música:", error);
    }
});