// 2. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
let num1 = Number(prompt(`Ingrese el numero `))
let num2 = Number(prompt(`Ingrese el numero `))
let num3 = Number(prompt(`Ingrese el numero `))
if (num1>num2 && num1>num3) {
    console.log(`El numero ${num1} es mayor que el numero ${num2} y ${num3}`);
    else if (num2>num1 && num2>num3){
        console.log(`El numero ${num2} es mayor que el numero ${num1} y ${num3}`);
        else if (num3>num1 && num3>num2) {
            console.log(`El numero ${num3} es mayor que el numero ${num1} y ${num2}`);
            }
            else{
                console.log('no se pudo encontrar numero mayor');
            }