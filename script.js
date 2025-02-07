// Importar Firebase y Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

// Configuración de Firebase
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

// Función para obtener eventos desde Firestore
async function obtenerEventos() {
    const eventosLista = document.getElementById("eventos");
    eventosLista.innerHTML = ""; // Limpiar lista antes de actualizar

    try {
        const querySnapshot = await getDocs(collection(db, "transmisiones"));
        querySnapshot.forEach((doc) => {
            const evento = doc.data();
            let li = document.createElement("li");
            li.innerHTML = `<a href="player.html?link=${evento.enlace}">${evento.nombre}</a>`;
            eventosLista.appendChild(li);
        });
    } catch (error) {
        console.error("Error al obtener los eventos:", error);
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener("DOMContentLoaded", obtenerEventos);
