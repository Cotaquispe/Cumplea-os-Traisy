// script.js

// 🔑 CAMBIO CLAVE: La fecha y hora del evento: Martes 13 de Enero de 2026 a las 7:30pm
const eventDate = new Date("Jan 13, 2026 19:30:00").getTime(); 

// Elementos del DOM
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const invitationCard = document.getElementById('invitation-card');

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
        // Cuando el evento ha pasado
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "¡LA FIESTA HA COMENZADO! 🎉";
        
    } else {
        // Actualizar los elementos con el tiempo formateado
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

// --- Bloque Único: Manejo de la Carga de Contenido (DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Animación de la Tarjeta (Tu código original)
    setTimeout(() => {
        invitationCard.classList.add('visible');
    }, 500); 

    // 2. Desbloqueo de Audio (Música)
    const audio = document.getElementById('background-music');

    const unlockAudio = () => {
        if (audio && audio.muted) {
            audio.muted = false;
            audio.volume = 0.6; // Ajusta el volumen (0.0 a 1.0)
            
            // Eliminar los listeners después de la primera interacción
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchend', unlockAudio);
            document.removeEventListener('scroll', unlockAudio);
        }
    };

    // Escuchar eventos de interacción del usuario para desbloquear el audio
    document.addEventListener('click', unlockAudio);
    document.addEventListener('touchend', unlockAudio);
    document.addEventListener('scroll', unlockAudio);
});
