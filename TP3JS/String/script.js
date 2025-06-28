/*
Ejercicio 9: String
Desarrollar una página que pida al usuario que ingrese un mensaje 
y sea escrito en pantalla en:
*/


// let mensajeDelUsuario = prompt('Escriba un mensaje');

// const hacheuno = document.getElementsByTagName('h1')[0];

// Mostrar en mayúscula
// hacheuno.innerHTML = mensajeDelUsuario.toUpperCase();

// Solo el sub-mensaje que comienza en la posición 5 y de largo 10.

// hacheuno.innerHTML = mensajeDelUsuario.substring(5,16);

let mail = 'juancarlos@gmail.com';

let longitud = mail.length;

let dominio = mail.substring(longitud-3,longitud);

let arreglo = mail.split('@');

console.log(arreglo)

switch(dominio){
    case 'com': 
        document.write('es un dominio válido');
        break;
    case '.ar':
        document.write('es un dominio válido');
        break;
    default:
        document.writeln('el dominio no existe')
}

let anio = 2025;
let mes = 'February';
let dia = 29;


let fecha = new Date(`${mes} ${anio} ${dia}`);



console.log(fecha);


/*
- Mayúscula.
// document.writeln(rta.toUpperCase());

- Minúscula.

- Solo el sub-mensaje que comienza el la posición 5 y de largo 10.
// document.writeln(rta.substring(5,15))

- Si la palabra hola está incluida dentro del mensaje escribir por pantalla
“hola que tal”.
// rta.includes('hola')?document.write('hola, qué tal'):document.write('...')

- El mismo mensaje pero sin espacios en blanco. Y eliminado la palabra hola.
// document.write(rta.replaceAll(' ', ''));

- El mismo mensaje pero traduciendo al ingles las palabras: my por mi,
hello por hola, name por nombre, …. Etc.
*/

// console.log("hola")
/*


let rta = prompt("Escriba un mensaje");

var palabras = ['hola', 'mi', 'nombre', 'es', '...', 'etc.'];
var words = ['hello', 'my', 'name', 'is', '...', 'etc.'];

let rtaTraducida = rta;

palabras.forEach((palabra, index) => {
    if (rta.includes(palabra)) {  // se fija si alguna palabra coincide
        rtaTraducida = rtaTraducida.replace(palabra, words[index]);
    }
});
words.forEach((palabra, index) => {
    if (rta.includes(palabra)) {  // se fija si alguna palabra coincide
        rtaTraducida = rtaTraducida.replace(palabra, palabras[index]);
    }
});

document.writeln(rtaTraducida);
*/
