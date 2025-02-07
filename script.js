const API_URL = "https://script.google.com/macros/s/AKfycbygn1y2LX6O-tAPc7Gm403B2dTzFsGRECD6qDaEI9RiqAPf2ApQyEjR3wIKpAVglBrV/exec";

fetch(API_URL, {
    method: "GET",
    mode: "no-cors"  // Añadir esta línea
})
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error en la respuesta");
        }
    })
    .then(data => {
        let listaEventos = document.getElementById("eventos");
        data.forEach(evento => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="player.html?link=${evento['Enlace 1']}">${evento.Nombre}</a>`;
            listaEventos.appendChild(li);
        });
    })
    .catch(error => console.error("Error al obtener los datos:", error));
