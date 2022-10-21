let producto = 1
let total = 0
let num = Number(prompt('Ingrese el numero '))
let num1 = num+1
for (i=0 ; i<num1; i++) {
    if (i%2==0){
        total+=i
    }
}
for (i=0; i<num1 ;i++){
    if (i%2!=0){
        producto*=i
    }
}
console.log(`La suma de los pares es de ${total}`);
console.log(`El producto de los impares es de ${producto}`);