//Clasificación automática de alimentos en categorías para una lista de compras
let frutas = [];
let carnes = [];
let candys = [];
let congelados = [];
let otros = [];
let food = "";
let category = "";
let listadeCompras = [frutas, carnes, candys, congelados, otros];

let needmore = "si";
while (needmore != "no") {
    needmore=prompt("¿Quieres agregar un alimento a la lista de compras? (si/no)");

    if (needmore === "no") {
        break;

    }

    food = prompt("¿Que alimento quieres agregar?");
    category = prompt("¿A que categoria pertenece? (frutas, carnes, candys, congelados,otros)");
    if (category === "frutas") {
        frutas.push(food);
    }else if (category === "carnes") {
        carnes.push(food);
    }else if (category === "candys") {
        candys.push(food);
    }else if (category === "congelados")
     {
        congelados.push(food); 
     }else if (category === "otros") {
        otros.push(food);
    }else {
        alert("Categoría no valida");
    }

}

let mensaje = "Tu lista de compras es la siguiente:\n";
let categorias = ["frutas", "carnes", "candys", "congelados", "otros"];
for (let i = 0; i < listadeCompras.length; i++) {
    if (listadeCompras[i].length > 0) {
        mensaje += `${categorias[i].charAt(0).toUpperCase() + categorias[i].slice(1)}: ${listadeCompras[i].join(", ")}\n`;
    }
}
alert(mensaje);


