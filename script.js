const API_URL = "https://script.google.com/macros/s/AKfycbxI21NUfxk_oYALpX9CEw3On8Q-naEhM5WKnIqVA05Beq1A8Lg_J7uhyGa480Gs1Rs/exec";

fetch(API_URL, { mode: 'cors' })  // Habilitamos CORS
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }
        return response.json();
    })
    .then(data => {
        let listaEventos = document.getElementById("eventos");
        
        // Verifica si los datos están vacíos
        if (!data || data.length === 0) {
            listaEventos.innerHTML = "No hay eventos disponibles en este momento.";
            return;
        }
        
        data.forEach(evento => {
            // Verifica si el enlace está presente en el evento
            let enlace = evento['Enlace 1'] ? evento['Enlace 1'] : '#';  // Usamos un # si el enlace no existe
            
            let li = document.createElement("li");
            li.innerHTML = `<a href="player.html?link=${enlace}" target="_blank">${evento.Nombre}</a>`;
            listaEventos.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
        document.getElementById("eventos").innerHTML = "Hubo un error al cargar los eventos.";
    });
