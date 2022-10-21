 // 13. En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
    // de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    // Los descuentos son los siguientes:
    // Tipo A 10% de descuento
    // Tipo B 15% de descuento
    // Tipo C 20% de descuento

    let helado = Number(prompt('Ingrese el valor del helado'))
    let memb = prompt('Ingrese el tipo de membresia')
         if (memb=='A'){
             let desc=helado*0.10
             let valor=helado-desc
             console.log(`Es un total de ${valor}`);
         }
         else if (memb=='B'){
             let desc=helado*0.15
             let valor=helado-desc
             console.log(`Es un total de ${valor}`);
         }
         else if (memb=='C'){
             let desc=helado*0.20
             let valor=helado-desc
             console.log(`Es un total de ${valor}`);
         }
         else{
             console.log(`No tiene membresia, el total es de ${helado}`);
         }