// 8. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    // la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    // a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.    
    let horaPlanta = 20000
    let horaAdmin = 10000
    let horas = Number(prompt('Inserte la cantidad de horas trabajadas'))
    let tipoEmple = prompt('Identifiquese como trabajador de planta o administrativo')
    let minus = tipoEmple.toLowerCase
    if (minus=='planta'){
        pagaPlanta=horas*horaPlanta
        console.log(`Su paga es de ${pagaPlanta}`);
        else if (minus=='administrativo'){
            pagaAdmin=horas*horaAdmin
            console.log(`Su paga es de ${pagaAdmin}`);
            console.log('No se identifico como un trabajador');
        }