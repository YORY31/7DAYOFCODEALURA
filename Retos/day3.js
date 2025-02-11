function gameTech(){
    let bienvenida = ("Bienvenido a tu juego tech favorito ")
     let chooseArea = prompt("Hola usuario, Quieres ser Back-End o Front-End?");
     let eleccion = "";

     if(chooseArea === 'Front-End'){
      
        eleccion = prompt("Quieres Aprender Reeact o Vue?").toLowerCase();
     }else if (chooseArea ==='Back-End'){
        eleccion = prompt ("Quieres aprender C# o Java?").toLowerCase();
     }else{
        alert("opcion Invalida!!!")
     }

     let decision = prompt ("¿Quieres seguir especializándote en esta área o convertirte en Fullstack?").toLowerCase();
     if (decision === 'especializarme'.toLowerCase()){
        alert(`COOL!! SIGUE PROFUNDIZANDO EN ${eleccion} y se un pro Dev en ${chooseArea}`);

     }else if (decision === 'fullstack'){
        alert("Increible! ampliar tus habilidades te convertira en un FullStack muy capaz")

     }else{
        alert("Opcion Invalida");
        return;
     }
     let respuestaOk = 'ok';
     while (respuestaOk.toLowerCase() === 'ok'){
        let newtech = prompt("Que otra tecnologia te interesa aprender?");
        alert(` Cool bestie, ${newtech} es una buena eleccion sigue adelante que tu puedes!!!.`)
        respuestaOk = prompt ("¿Hay alguna otra tecnología que te gustaría aprender? Responde 'ok' para continuar o cualquier otra cosa para salir.");
     }
     alert ("Te deseo lo mejor en este viaje tecnologico❤️👻 ")
}
gameTech();