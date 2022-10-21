// 11. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso
    // de computación.
    const arra =[]
    do{
    let nombre =(prompt('Ingrese su nombre y apellido'))
    let nota1 = Number(prompt('Ingrese su nota1'))
    let nota2 = Number(prompt('Ingrese su nota2'))
    let nota3 = Number(prompt('Ingrese su nota3'))
    let nota4 = Number(prompt('Ingrese su nota4'))
    let nota5=  Number(prompt('Ingrese su nota5'))
    let prom = (nota1+nota2+nota3+nota4+nota5)/5
    arra.push(nombre)
    arra.push(prom)
    }
    while (confirm('Desea ingresar otro estudiante'))
    console.log(`${arra}`);