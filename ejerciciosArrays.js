///////////////////////////////
//        ejercicio1         //
///////////////////////////////

/*Escribe una función que tome un array de números y un valor objetivo como entrada, y devuelva un array de arrays que contengan pares de números en el array original que sumen al valor objetivo. */


function sumaObjetivo(target){
    let array = [2, 4, 3, 6, 9, 8]
    let listaParejas = []
    for (let i = 0; i < array.length; i++){
        var parejas = []
        for (let j = 0; j < array.length; j++){
            if (array[i] + array[j] == target){
                parejas.push(array[i])
                parejas.push(array[j])
                listaParejas.push(parejas)
            }
        }
    }
    return listaParejas
}

console.log(sumaObjetivo(10))

//autor : Duban Fabian Rodriguez Garcia