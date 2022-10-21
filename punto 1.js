addEventListener("DOMContentLoaded", ()=>{
    // 1. Determinar si un número es positivo y menor que 100. 
    let num = Number(prompt('Ingrese el numero'))
    if (num<0) {
        console.log('El numero tiene que ser positivo');
    }
    else if (num>=100) {
        console.log(`El numero ${num} es positivo mayor que 100`);
    } else {
        console.log(`el numero ${num} es positivo menor que 100`);
    }
})