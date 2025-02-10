const namee = prompt("¿Cuál es tu nombre? : ") ;
const years = parseInt(prompt("Cual es tu edad? :")) ;
const language = prompt("¿De qué país eres? : ¿Qué lenguaje de programación estás estudiando?") ;

 alert (`Hola ${namee}, tienes ${years} de edad y ya estas aprendiendo ${language}`);

let question ;
while(true){
   question = parseInt(prompt(`¿Te gusta estudiar ${language}? Responde con el número 1 para SÍ o 2 para NO.`)) ;

   if (question === 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
    break;
}else if(question === 2 ){
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
    break;
}else{
    alert("Tu respuesta no es valida intenta de nuevo")
}

}
