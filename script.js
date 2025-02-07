const API_URL = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://script.google.com/macros/library/d/1HS7tyOIf6F3rHVJF-6_L3GkKaYRXHQkU6plN3c2VIaGqgGlv-9vymP1T/2");

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
