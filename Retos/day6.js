// Gestor de Compras: Añadir y Eliminar Productos de tu Lista
// Clasificación automática de alimentos en categorías para una lista de compras

let frutas = [];
let carnes = [];
let candys = [];
let congelados = [];
let otros = [];
let listadeCompras = [frutas, carnes, candys, congelados, otros];
let categorias = ["frutas", "carnes", "candys", "congelados", "otros"];

let needmore = "si";

while (needmore !== "no") {
    needmore = prompt("¿Quieres agregar o eliminar un alimento de la lista de compras? (agregar/eliminar/no)");

    if (needmore === "no".toLowerCase()) {
        break;
    } else if (needmore === "agregar".toLowerCase()) {
        let food = prompt("¿Que alimento quieres agregar?");
        let category = prompt("¿A que categoría pertenece? (frutas, carnes, candys, congelados, otros)");

        let index = categorias.indexOf(category);
        if (index !== -1) {
            listadeCompras[index].push(food);
        } else {
            alert("Categoria no valida.");
        }
    } else if (needmore === "eliminar".toLowerCase()) {
        let categoriaEliminar = prompt("¿De que categoría quieres eliminar un alimento? (frutas, carnes, candys, congelados, otros)");

        let index = categorias.indexOf(categoriaEliminar);
        if (index !== -1 && listadeCompras[index].length > 0) {
            let foodEliminar = prompt(`Lista de ${categoriaEliminar}: ${listadeCompras[index].join(", ")}\n¿Que alimento quieres eliminar?`);

            let foodIndex = listadeCompras[index].indexOf(foodEliminar);
            if (foodIndex !== -1) {
                listadeCompras[index].splice(foodIndex, 1);
                alert(`"${foodEliminar}" ha sido eliminado de la categoría ${categoriaEliminar}.`);
            } else {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        } else {
            alert("Categoría vacía o no válida.");
        }
    } else {
        alert("Opción no válida.");
    }
}

let mensaje = "Tu lista de compras final es la siguiente:\n";
for (let i = 0; i < listadeCompras.length; i++) {
    if (listadeCompras[i].length > 0) {
        mensaje += `${categorias[i].charAt(0).toUpperCase() + categorias[i].slice(1)}: ${listadeCompras[i].join(", ")}\n`;
    }
}
alert(mensaje);
