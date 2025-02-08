import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJsmeXuz4uhSusxIFgmRYlt3O1V-33phc",
    authDomain: "fulbo-streaming.firebaseapp.com",
    projectId: "fulbo-streaming",
    storageBucket: "fulbo-streaming.appspot.com",
    messagingSenderId: "1073325082428",
    appId: "1:1073325082428:web:d931182eaa3148c03f4039",
    measurementId: "G-XVCVR41JES"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function obtenerEventos() {
    const eventosLista = document.getElementById("eventos");

    try {
        const querySnapshot = await getDocs(collection(db, "canales"));
        querySnapshot.forEach(doc => {
            let data = doc.data();
            let nombreCanal = Object.keys(data)[0];
            let enlaces = data[nombreCanal];

            if (enlaces && enlaces.length > 0) {
                let li = document.createElement("li");
                let link = document.createElement("a");
                link.href = `player.html?link=${encodeURIComponent(enlaces[0])}`;
                link.textContent = nombreCanal; 
                li.appendChild(link);
                eventosLista.appendChild(li);
            }
        });
    } catch (error) {
        console.error("Error al obtener eventos:", error);
    }
}

// Llamada a la función después de que el DOM haya cargado
document.addEventListener("DOMContentLoaded", () => {
    obtenerEventos();
});


obtenerEventos();
