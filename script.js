const API_URL = "https://script.google.com/macros/s/AKfycbxI21NUfxk_oYALpX9CEw3On8Q-naEhM5WKnIqVA05Beq1A8Lg_J7uhyGa480Gs1Rs/exec";

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
