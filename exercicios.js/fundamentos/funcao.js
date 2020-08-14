console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// Outros exemplos de função

// -> Função sem retorno <-
function imprimirSoma (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5)

// Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

// Armazenando uma funcao em uma variavel
const imprimiSoma = function (a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const somaAlt = (a, b) => {
    return a + b
}

console.log(somaAlt(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))