//Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
// ¿Qué figura quiere calcular (Escriba T o C)?
// Triangulo = base * altura / 2
// Circulo = PI * radio* radio

    if (num1>num2 && num1>num3) {
        console.log(`El numero ${num1} es mayor que el numero ${num2} y ${num3}`);
    }
    else if (num2>num3 && num2>num1) {
        console.log(`El numero ${num2} es mayor que el numero ${num1} y ${num3}`);
    }
    else if (num3>num2 && num3>num1) {
        console.log(`El numero ${num3} es mayor que el numero ${num2} y ${num1}`);
    }

    if (num1<num2 && num1<num3){
        console.log(`El numero ${num1} es menor que el numero ${num2} y ${num3}`);
    }
    else if (num2<num1 && num2<num3){
        console.log(`El numero ${num2} es menor que el numero ${num1} y ${num3}`);
    }
    else if (num3<num1 && num3<num2){
        console.log(`El numero ${num3} es menor que el numero ${num2} y ${num1}`);
    }

    if (num1==num2){
        console.log(`El numero ${num1} y ${num2}`);
    }
    else if (num1==num3){
        console.log(`El numero ${num1} y ${num3}`);
    }
    else if (num2==num3){
        console.log(`El numero ${num2} y ${num3}`);
    let figura = prompt('Ingrese la figura a la que desea calcular el area(Para el triangulo la letra "T" y para el circulo la "C"')
    let figMayus = figura.toUpperCase
    if (figMayus=='T'){
        let base = Number(prompt('Ingrese la base'))
        let altura = Number(prompt('Ingrese la altura'))
        let areaTri = (base*altura)/2;
        console.log(`El area del triangulo es ${areaTri}`);
    }
    if (figMayus='C'){
        let radio = Number(prompt('Ingrese el radio'))
        let areaCir = (Math.PI*(radio**2));
        console.log(`El area del circulo es ${areaCir}`);
    }