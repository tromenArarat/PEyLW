document.addEventListener('DOMContentLoaded', cargarHtml);

function cargarHtml() {
    let lista = document.getElementsByTagName('ul')[0];

    let provincias = ["NEUQUEN", "RIO NEGRO", "BUENOS AIRES"];
    let ciudades = ["LAS LAJAS", 'ANDACOLLO', 'EL HUECU', 
        'VIEDMA', 'CHOELE CHOEL', 'BARILOCHE', 
        'LA PLATA', 'SAN CLEMENTE DEL TUYU', 'MAR DEL PLATA'];
    
    let j = 0;
    for (const provincia in provincias) {
        let li = document.createElement('li');
        
        // La provincia se debe mostrar en subrayado
        li.className = 'provCerrada';
        li.innerHTML = "<a>"+provincias[provincia]+"</a><button>-</button>";
        let botones = document.getElementsByTagName('button');
        
        // Al hacer clic se deben mostrar las ciudades
        li.addEventListener('click',()=>{
            let liEstilo = li.className;
            if(liEstilo=='provCerrada'){
                li.className = 'provAbierta';
                botones[provincia].style = 'display:inline-block';
            }else{
                li.className = 'provCerrada';
                botones[provincia].style = 'display:none';
            }
        });
        
        lista.append(li);
        let listaCiudades = document.createElement('ul');
        li.append(listaCiudades);
        
        for (let i = 0; i < 3; i++) {
            let liCiudad = document.createElement('li'); 
            liCiudad.innerHTML = ciudades[i + j];
            listaCiudades.append(liCiudad);
        }
        j += 3;
    }
}