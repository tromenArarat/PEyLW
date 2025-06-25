
let newX = 0, newY = 0, startX = 0, startY = 0;

const tarjeta = document.getElementById('tarjeta');

tarjeta.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    tarjeta.style.top = (tarjeta.offsetTop - newY) + 'px'
    tarjeta.style.left = (tarjeta.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

// document.addEventListener('DOMContentLoaded',cargarHtml);

// function cargarHtml(){
//     const div = document.querySelector('div');

//     div.style = 'background-color: blue';

//     let offsetX, offsetY;

//     const mover = (e) => {
//         // Actualiza la posición del div según la posición del cursor
//         div.style.left = `${e.clientX - offsetX}px`;
//         div.style.top = `${e.clientY - offsetY}px`;
//     }

//     div.addEventListener('mousedown',(e)=>{
//         // Calcula los valores iniciales
//         offsetX = e.clientX - div.offsetLeft;
//         offsetY = e.clientY - div.offsetTop;
//         document.addEventListener('mousemove',mover);
//     })

//     // Remueve el mousemove event listener
//     document.addEventListener('mouseup',()=>{
//         document.removeEventListener('mousemove',mover)
//     })
// }
