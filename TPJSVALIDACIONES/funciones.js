function validar()
{
    // Elimine estas lineas de codigo cuando empiece a trabajar
    let nombre = document.getElementById('nombre');

    if(nombre.value.length==0){
        nombre.style = 'border-color: red';
    }else{
        alert("Funciona");    
    }
    construirFecha();
}

function construirFecha(){
    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let anio = document.getElementById('anio').value;
    const fecha = new Date(`${mes} ${dia}, ${anio}`);
    if(fecha.getDate()==dia){
        console.log(fecha);
    }else if(mes > 12){
        console.log('mes no válido')
    }else{
        console.log('fecha inexistente')
    }
    
}

/*
DEEP SEEK
prompt: Tengo un html con un form y un input de tipo mail. 
Quiero validar con js la estructura de un mail - 
considerar el dominio, los caracteres a ingresar, 
los símbolos que debe tener. Me das ejemplo con y sin regex?

CON REGEX
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('divOpcional');
    
    // Expresión regular para validar email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (regex.test(email)) {
        errorMsg.textContent = '';
        alert('Email válido! Formulario enviado.');
        // Aquí podrías enviar el formulario
    } else {
        errorMsg.textContent = 'Por favor ingrese un email válido (ejemplo: usuario@dominio.com)';
    }
});
La expresión regular usada:

(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) 

valida:

- Caracteres permitidos antes del @: 
    letras, números, puntos, guiones bajos, porcentajes, 
    signos más y guiones

- Presencia de un solo @

- Dominio con letras, números, puntos y guiones
s
- Punto en el dominio

- Extensión de dominio (TLD) de al menos 2 caracteres


SIN REGEX:
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (validateEmailWithoutRegex(email)) {
        errorMsg.textContent = '';
        alert('Email válido! Formulario enviado.');
        // Aquí podrías enviar el formulario
    } else {
        errorMsg.textContent = 'Por favor ingrese un email válido (ejemplo: usuario@dominio.com)';
    }
});

function validateEmailWithoutRegex(email) {
    // 1. Debe contener exactamente un @
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || email.indexOf('@', atIndex + 1) !== -1) {
        return false;
    }
    
    // 2. Dividir en parte local y dominio
    const parts = email.split('@');
    if (parts.length !== 2) return false;
    
    const [localPart, domain] = parts;
    
    // 3. Validar parte local (antes del @)
    if (!localPart || localPart.length === 0) return false;
    
    // Caracteres permitidos en la parte local
    const allowedLocalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._%+-';
    for (const char of localPart) {
        if (!allowedLocalChars.includes(char)) {
            return false;
        }
    }
    
    // 4. Validar dominio (después del @)
    if (!domain || domain.length === 0) return false;
    
    // Debe contener al menos un punto
    const dotIndex = domain.lastIndexOf('.');
    if (dotIndex === -1 || dotIndex === 0 || dotIndex === domain.length - 1) {
        return false;
    }
    
    // Dividir dominio en subdominio y TLD
    const domainParts = domain.split('.');
    if (domainParts.length < 2) return false;
    
    // Validar cada parte del dominio
    for (const part of domainParts) {
        if (!part || part.length === 0) return false;
        
        // Caracteres permitidos en el dominio
        const allowedDomainChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-';
        for (const char of part) {
            if (!allowedDomainChars.includes(char)) {
                return false;
            }
        }
        
        // No puede empezar o terminar con guión o punto
        if (part.startsWith('-') || part.endsWith('-') || 
            part.startsWith('.') || part.endsWith('.')) {
            return false;
        }
    }
    
    // El TLD (última parte) debe tener al menos 2 caracteres
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) return false;
    
    return true;
}

*/