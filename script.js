// script.js - CÓDIGO FINAL Y CORREGIDO

// 🔑 CAMBIO CLAVE: La fecha y hora del evento: Martes 13 de Enero de 2026 a las 7:30pm
const eventDate = new Date("Jan 13, 2026 19:30:00").getTime(); 

// Elementos del DOM
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const invitationCard = document.getElementById('invitation-card');
const audio = document.getElementById('background-music'); // Obtenemos el audio globalmente

// Función para formatear el tiempo
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// Función principal de la cuenta regresiva
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "¡LA FIESTA HA COMENZADO! 🎉";
        
    } else {
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }
}

// Iniciar la cuenta regresiva
const countdownInterval = setInterval(updateCountdown, 1000);

// Llamada inicial para mostrar los números inmediatamente
updateCountdown();


// --- FUNCIÓN DE DESBLOQUEO DE AUDIO ---
const unlockAudio = () => {
    // 🔑 CLAVE: Intentamos reproducir el audio y quitarle el silencio con la primera interacción
    if (audio && audio.muted) {
        audio.muted = false;
        audio.play().catch(e => console.log("Audio play blocked:", e)); // Manejamos si hay error
        audio.volume = 0.6; 
        
        // Limpiamos los listeners para que la función no se siga ejecutando
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('touchend', unlockAudio);
        document.removeEventListener('scroll', unlockAudio);
    }
};

// --- Manejo de la Carga de Contenido (DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Animación de la Tarjeta (Tu código original)
    setTimeout(() => {
        invitationCard.classList.add('visible');
    }, 500); 

    // 2. Activamos los listeners de interacción para el audio
    document.addEventListener('click', unlockAudio);
    document.addEventListener('touchend', unlockAudio);
    document.addEventListener('scroll', unlockAudio);
});
