 // 5. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
    // área triangulo= lado * lado.
    let base = Number(prompt('Ingrese la base  del rectangulo '))
    let altura = Number(prompt('Ingrese la altura del rectangulo'))
    if (altura<0 || base<0){
        console.log('Solo se adminten valores positivos');
    }
    if (figMayus='C'){
        let radio = Number(prompt('Ingrese el radio'))
        let areaCir = (Math.PI*(radio**2));
        console.log(`El area del circulo es ${areaCir}`);
    else{
        area=base*altura
        console.log(`El area del rectangulo es ${area}`);
    }