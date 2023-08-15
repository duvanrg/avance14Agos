///////////////////////////////
//        ejercicio1         //
///////////////////////////////

/*1. Acorde con la edad de una persona, imprime el año en que nació. Por ejemplo "Naciste en 1985" utilizando funciones*/


//funcion para calcular el año de nacimiento segun la edad
function nacimiento (edad){
    anyo = 2023 - edad //calculo de la edad
    console.log("Naciste en: " + anyo)//imprime el resultado
}

nacimiento(23)//envia la edad a la funcion nacimiento

///////////////////////////////
//        ejercicio2         //
///////////////////////////////

/*2. Crea una función que tome un valor de grados Celsius y la pase a grados Fahrenheit.
La fórmula correspondiente para pasar de grados Celsius a Fahrenheit es:
F = 32 + (9* C/5)*/

//funcion para la conversion de grados Celsius a grados Fahrenheit
function conversor (celsius){
    Fahrenheit = ((9*celsius)/5)+32//aplicacion de la formula de conversion
    return("grados Celsius:",celsius,"\ngrados Fahrenheit:",Fahrenheit)//retorna el valor encontrado
}

console.log(conversor(100))//imprime el valor que retorne la funcion conversora

///////////////////////////////
//        ejercicio3         //
///////////////////////////////
/*3. Hay un artículo en promoción, si el cliente
está entre los 20 primeros clientes, tiene 30%
de descuento y entre los primeros 50
clientes, un 10% de descuento. Haga una
función que permita saber cuánto descuento tiene
el cliente, según el orden en que llegó. */

function promocion (cli, val){
    if (cli <= 20){
        descuento = val *0.3 
    }else if (cli <= 50){
        descuento = val * 0.1
    }else {
        descuento = 0
    }
    return descuento
}

let run = true
let valorArticulo = 100000
let nroCliente = 1
console.log("valor articulo: ", valorArticulo)
while (run) {
    console.log('cliente ', nroCliente,"-> valor articulo", valorArticulo - promocion(nroCliente, valorArticulo))
    nroCliente ++
    if (nroCliente >= 55){
        run = false
    }
}

//autor : Duban Fabian Rodriguez Garcia