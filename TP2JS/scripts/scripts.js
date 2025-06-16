function muestraPares(){
    for(let i=0;i<500;i+=2){
        document.write(`${i} `)
    }
}
function muestraFuncion(){
    var contenedor = document.getElementById('contenedor');
    for(let i=0;i<101;i++){
        let resultado = (3 * i) + 5 - (i * i);
        contenedor.innerHTML += "Para el valor de x= "+i
        + " el resultado es: "+resultado+ '<br>';
        console.log(contenedor);
    }
}
function factorial(n){
    n *(n-1)
}


