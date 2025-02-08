import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDJsmeXuz4uhSusxIFgmRYlt3O1V-33phc",
    authDomain: "fulbo-streaming.firebaseapp.com",
    projectId: "fulbo-streaming",
    storageBucket: "fulbo-streaming.appspot.com",  // ✅ Corregido
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

    try {
        const querySnapshot = await getDocs(collection(db, "canales"));
        querySnapshot.forEach(doc => {
            let data = doc.data();
            let nombreCanal = Object.keys(data)[0];  // Obtiene el nombre de la clave ("ESPN 1")
            let enlaces = data[nombreCanal];  // Accede al array de enlaces

            if (enlaces && enlaces.length > 0) {  // ✅ Verifica que hay enlaces disponibles
                let li = document.createElement("li");
                li.innerHTML = `<a href="player.html?link=${encodeURIComponent(enlaces[0])}">${nombreCanal}</a>`;
                eventosLista.appendChild(li);
            }
        });
    } catch (error) {
        console.error("Error al obtener eventos:", error);
    }
}

obtenerEventos();
