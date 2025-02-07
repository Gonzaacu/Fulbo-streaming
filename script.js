const API_URL = "https://script.google.com/macros/s/AKfycbygn1y2LX6O-tAPc7Gm403B2dTzFsGRECD6qDaEI9RiqAPf2ApQyEjR3wIKpAVglBrV/exec";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        let listaEventos = document.getElementById("eventos");
        data.forEach(evento => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="player.html?link=${evento['Enlace 1']}">${evento.Nombre}</a>`;
            listaEventos.appendChild(li);
        });
    })
    .catch(error => console.error("Error al obtener los datos:", error));
