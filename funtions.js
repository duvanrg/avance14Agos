//funcion que no retorna ni recibe mensaje
function mensaje() {
    console.log("Soy un mensaje!")
}

//Funcion que retorna pero no recibe parametros
function retorno() {
    return "Hola Mundo!"
}

//Funcion que no retorna pero recibe parametros
function areaRectangulo(b, h) {
    resultado = b * h
    console.log(resultado)
}

//funcion que retorna y recibe parametros
function concatenacion(a, b) {
    return a + b
}

mensaje()
console.log(mensaje())

retorno()
console.log(retorno())

areaRectangulo(5, 5)

console.log(concatenacion("Campus", "Lands"))
