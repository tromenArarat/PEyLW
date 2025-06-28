/*
Tengo un formulario que me pide ingresar un dni.
Debo validar que el número se encuentre entre 10 y 40 millones,
si no imprimir un mensaje por pantalla que diga:
"Ingrese un dni entre 10 y 20 millones"
*/

const formulario = document.getElementById('miFormulario');

formulario.style = 'background-color: grey;'

const input = document.getElementById('dni');


function validar(){
    if(input.value < 20000000 && input.value > 10000000){
        input.style = 'background-color: green;'
    }else{
        alert('Ingrese otro dni')
    }
}