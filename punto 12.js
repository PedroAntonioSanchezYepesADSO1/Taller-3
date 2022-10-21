 // 12. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
    //     caso contrario indicar con un mensaje que la operación no es posible realizarla
    let num1= Number(prompt('Ingrese un numero al que restara'))
    let num2= Number(prompt('Ingrese un numero a restar'))
    if (num1>num2){
        resta=num1-num2
        console.log(`El resultado de la resta es ${resta}`);
    }
    else{
        console.log('No es posible realizar la operacion');
    }