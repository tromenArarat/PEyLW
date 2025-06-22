document.addEventListener('DOMContentLoaded', cambiarSubmit);
function cambiarSubmit(){
    let submit = document.getElementsByTagName('input')[1];
        submit.setAttribute('type','button');
}

function validar(){
    let rta = document.getElementById('tel');
    let div = document.getElementById('opcional');
    if(rta.value.length==0){
        rta.style = 'border:solid 3px; border-color:red;'
        div.innerHTML = '<h3>Ingrese un número para continuar</h3>' 
    } else if(parseInt(rta.value)<1000000){
        rta.style = 'border:solid 3px; border-color:red;'
        div.innerHTML = '<h3>No es un número de teléfono válido</h3>' 
    }else{
        rta.style = 'border:solid 0px;'
        div.innerHTML = '<h3>En breve recibirá su paga</h3>'
    }
    agregarFila(rta.value,div.innerHTML);
}

/*
function resultados(){
    // Muestra una tabla con valores ingresados y div de resultado

    let tabla = document.getElementById('miTabla');
    var fila = tabla.insertRow(tabla.ariaRowSpan.length);
    var cel1 = fila.insertCell(0);

}
    */

function agregarFila(input,rta){
    let tabla = document.getElementById('mi-tabla').getElementsByTagName('tbody')[0];
    let fila = tabla.insertRow(); // Insertamos una nueva fila
                
    let celda1 = fila.insertCell(0); // Insertamos las celdas
    let celda2 = fila.insertCell(1); 
    let celda3 = fila.insertCell(2);
    let celda4 = fila.insertCell(3);

    celda1.innerText = input;
    celda2.innerText = `${new Date().getHours()} hs`;
    celda3.innerText = navegador();
    celda4.innerText = rta;
}

function navegador(){
    const userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.includes('Firefox')) {
    browserName = 'Firefox';
    } else if (userAgent.includes('Edg')) {
    browserName = 'Edge';
    } else if (userAgent.includes('Chrome')) {
    browserName = 'Chrome';
    } else if (userAgent.includes('Safari')) {
    browserName = 'Safari';
    } else {
    browserName = 'Unknown';
    };
    return browserName;
}

function quitarFila(){
    let longitud = document.getElementById('mi-tabla').getElementsByTagName('tbody')[0].rows.length;
    let fila = document.getElementsByTagName('tr')[longitud];
    fila.style = 'display:none';
}

function verEliminados(){
    let filas = document.getElementsByTagName('tr');

    let eliminados = document.getElementById('eliminados');

    // Busca filas ocultas (eliminadas) y 
    // muestra su contenido en el div 'eliminados'
    eliminados.innerHTML = '';
    // for (let i = 0; i < filas.length; i++) {
        
}