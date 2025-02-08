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

// Leer los canales desde Firestore
async function obtenerEventos() {
    const eventosLista = document.getElementById("eventos");
    const querySnapshot = await getDocs(collection(db, "canales"));

    querySnapshot.forEach(doc => {
        let data = doc.data();
        let nombreCanal = Object.keys(data)[0];  // Obtiene el nombre de la clave ("ESPN 1")
        let enlaces = data[nombreCanal];  // Accede al array de enlaces

        let li = document.createElement("li");
        li.innerHTML = `<a href="player.html?link=${enlaces[0]}">${nombreCanal}</a>`;
        
        eventosLista.appendChild(li);
    });
}

obtenerEventos();
