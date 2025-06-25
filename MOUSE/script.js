// FONDO DEL BODY
document.addEventListener('DOMContentLoaded',cargarCss);

function cargarCss() {
//    let body = document.childNodes[0];
   let body = document.body;
   body.style = 'background-color: grey';
}

// REFERENCIAS

document.addEventListener('mousemove', mouseMove);

function mouseMove(e){
    let div1 = document.getElementById('nav');
    let div2 = document.getElementById('pag');
    div1.innerHTML =  `Navegador: [${e.clientX},${e.clientY}]`;
    div2.innerHTML =  `Página: [${e.pageX},${e.pageY}]`;
    // div1.style.margin = '250px';
    // div2.style.margin = '250px';
}


// LÓGICA RATÓN

sprite.addEventListener('mousedown', mouseDown);
let newX = 0, newY = 0, startX = 0, startY = 0;

function mouseDown(e){
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove2);
    document.addEventListener('mousemove', verSiEntro);
    document.addEventListener('mouseup', mouseUp);
}

function verSiEntro(){
    let msj = document.getElementById('msj');
    if(sprite.offsetTop == 260){
        msj.innerHTML = 'MUY BIEN';
    }
}

function mouseMove2(e){
    newX = startX - e.clientX; 
    newY = startY - e.clientY;
  
    startX = e.clientX;
    startY = e.clientY;

    sprite.style.top = (sprite.offsetTop - newY) + 'px';
    sprite.style.left = (sprite.offsetLeft - newX) + 'px';
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove2);
}