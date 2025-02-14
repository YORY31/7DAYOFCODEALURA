
numeroSecreto = Math.floor(Math.random() * 10) + 1; 
intentos = 3;
 
while (intentos > 0) {
    let usuario = parseInt(prompt("Adivina el numero entre 0 y 10:"));

    if (usuario === numeroSecreto) {
        alert("¡Felicidades! Has adivinado el numero.");
        break;
    } else {
        intentos--;
        if (intentos > 0) {
            alert(`Numero incorrecto. Te quedan ${intentos} intento(s).`);
        } else {
            alert(`Lo siento, has agotado tus intentos. El numero era ${numeroSecreto}.`);
        }
    }
}
