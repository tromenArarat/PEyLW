/*
a- Desarrollar una página que imprima en pantalla:
- La Fecha actual, la hora, minutos y segundos.
- La cantidad de días, horas, minutos y segundos 
que faltan para el parcial de javascript.

b- Desarrollar una página que al hacer click sobre 
un botón “calcular edad”, le pida al usuario su año 
de nacimiento y luego imprima por pantalla el 
mensaje “su edad es XX”.

*/

document.addEventListener('DOMContentLoaded',cargarHtml);
function cargarHtml(){
    let fecha = new Date();

    // Opcional: Array de nombres de días y meses en español
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();

    let fechaFormateada = `${diaSemana} ${dia} de ${mes} de ${anio}`;
    let hora = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} hs`;
    
    let fechaActual = document.getElementById('fecha');
    fechaActual.innerHTML = fechaFormateada + ' / ' + hora;
    
    let h1 = document.getElementById('titulo');
    h1.innerHTML = '¿Cuánto falta para la entrega del TP de JS?';
    let relojDeArena = document.getElementById('tpJS');

    // 27 de junio entrega TP
    const fechaTP = new Date("June 27, 2025 23:59:00");
    let regresiva = new Date(fechaTP - fecha);
    relojDeArena.innerHTML = `${regresiva.getDate()} días, ${regresiva.getHours()} horas, ${regresiva.getMinutes()} minutos, ${regresiva.getSeconds()} segundos para que se cumpla el tiempo de entrega.`;
}