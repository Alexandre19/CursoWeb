// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ZWD',
        numero: 1000
    }
}

// A chave representa o operador de desestruturação
const { nome, idade } = pessoa
console.log(nome, idade)