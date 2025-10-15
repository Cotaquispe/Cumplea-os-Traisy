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

// Iniciar la cuenta regresiva y animación
const countdownInterval = setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        invitationCard.classList.add('visible');
    }, 500); 
});

updateCountdown();