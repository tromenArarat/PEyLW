let newX = 0, newY = 0, startX = 0, startY = 0;

let lastTarjeta = null;

for (let i = 0; i < 9; i++) {
    const tarjeta = document.getElementById(`tarjeta${i + 1}`);
    tarjeta.addEventListener('mousedown', mouseDown);
    function mouseDown(e) {
        startX = e.clientX
        startY = e.clientY
        lastTarjeta = tarjeta;

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }

    function mouseMove(e) {
        newX = startX - e.clientX
        newY = startY - e.clientY

        startX = e.clientX
        startY = e.clientY

        tarjeta.style.top = (tarjeta.offsetTop - newY) + 'px'
        tarjeta.style.left = (tarjeta.offsetLeft - newX) + 'px'
        //console.log('x: '+e.clientX);
        //console.log('y: '+e.clientY);
    }

    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp)
    }
    
}

btn.addEventListener('click', checarPosicion);

function checarPosicion() {
    if (lastTarjeta) {
        console.log('x: ' + lastTarjeta.offsetLeft);
        console.log('y: ' + lastTarjeta.offsetTop);
        if (lastTarjeta.offsetLeft < 390 && 
            lastTarjeta.offsetLeft > 360 &&
            lastTarjeta.offsetTop < 220 && 
            lastTarjeta.offsetTop > 195) {
            lastTarjeta.style.top = 209 + 'px';
            lastTarjeta.style.left = 374 + 'px';
            let h2 = document.getElementsByTagName('h2')[0];
            h2.innerHTML = 'Muy bien';
        } else {
            let h2 = document.getElementsByTagName('h2')[0];
            h2.innerHTML = 'Intentelo de nuevo';
        }
    } else {
        alert('No se ha movido ninguna tarjeta.');
    }
}

