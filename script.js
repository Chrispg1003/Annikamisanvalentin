// Función para mostrar la imagen sorpresa, descargar el PDF y abrir una nueva pestaña
function showSurprise() {
    let image = document.getElementById("loveImage");
    image.classList.add("visible");

    // Esperar 2 segundos antes de descargar el PDF
    setTimeout(() => {
        let link = document.createElement("a");
        link.href = "Michica.pdf"; // Asegúrate de que el archivo esté en la misma carpeta que el HTML
        link.download = "Carta_de_San_Valentín.pdf";
        link.click();

        // Abrir una nueva pestaña con la misma carta
        setTimeout(() => {
            window.open(window.location.href, "_blank"); 
        }, 1000); // Se abre después de 1 segundo
    }, 2000); // Retraso de 2 segundos
}

// Función para crear flores flotantes más grandes
function createFlower() {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = "🌼"; // Flor blanca
    flower.style.left = Math.random() * 100 + "vw"; // Posición aleatoria
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Duración aleatoria
    document.body.appendChild(flower);

    setTimeout(() => { flower.remove(); }, 5000); // Eliminar después de 5 segundos
}

// Crear flores constantemente
setInterval(createFlower, 400);  // Aumentamos la frecuencia de aparición