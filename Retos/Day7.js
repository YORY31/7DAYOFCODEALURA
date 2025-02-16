///calculadora con funciones


function sumar(num1 , num2){
    return num1 + num2;

}
function restar(num1 , num2){
    return num1 - num2;
}

function multiplicar( num1, num2){
    return num1 * num2;

}

function division (num1 , num2){
    if (num2 != 0) {
        return num1 / num2;
    }else{
        return "Error, no se puede dividir entre cero";
    }
}

let selecciona = 'Elige una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir'
let continuar = true;
while (continuar) {
    let Opción = prompt(`Bievenido a la calculadora de mar 🐚🎃${selecciona}`);

    switch(Opción){
        case '1':
            let num1 = parseFloat(prompt("Ingresa el primer número:"));
            let num2 = parseFloat(prompt("Ingresa el segundo número:"));
            alert(`El resultado de la suma es: ${sumar(num1, num2)}`);
            break;

        case '2':
            let num3 = parseFloat(prompt("Ingresa el primer número:"));
            let num4 = parseFloat(prompt("Ingresa el segundo número:"));
            alert(`El resultado de la resta es: ${restar(num3, num4)}`);
            break;
        
        case '3':
            let num5 = parseFloat(prompt("Ingresa el primer número:"));
            let num6 = parseFloat(prompt("Ingresa el segundo número:"));
            alert(`El resultado de la multiplicación es: ${multiplicar(num5, num6)}`);
            break;
        
        case '4':
            let num7 = parseFloat(prompt("Ingresa el primer número:"));
            let num8 = parseFloat(prompt("Ingresa el segundo número:"));
            alert(`El resultado de la división es: ${division(num7, num8)}`);
            break;
        case '5':
            continuar = false;
            break;
    }
}
