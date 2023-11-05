
// let minutosTrabajo = 55;
// let minutosDescanso = 5;
// let tiempoRestante = 0;
// let temporizador;

// function iniciarPomodoro() {
//     const horasInput = parseInt(document.getElementById('horasInput').value) || 0;
//     const minutosInput = parseInt(document.getElementById('minutosInput').value) || 0;
    
//     tiempoRestante = (horasInput * 60 + minutosInput) * 60; // Convertir a segundos

//     if (tiempoRestante > 0) {
//         actualizarTiempoRestante();
//         temporizador = setInterval(actualizarTiempoRestante, 1000);
//     }
// }

// function actualizarTiempoRestante() {
//     if (tiempoRestante <= 0) {
//         clearInterval(temporizador);
//         alert("¡Tiempo completado!");
//     } else {
//         const horas = Math.floor(tiempoRestante / 3600);
//         const minutos = Math.floor((tiempoRestante % 3600) / 60);
//         const segundos = tiempoRestante % 60;

//         const tiempoFormateado = (horas < 10 ? '0' : '') + horas + ':' + (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
//         document.getElementById('tiempoRestante').textContent = 'Tiempo restante: ' + tiempoFormateado;
//         tiempoRestante--;
//     }
// }
