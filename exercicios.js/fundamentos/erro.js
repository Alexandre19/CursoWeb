function tratarErro(erro) {
    throw new Error('...')
}


function imprimirNome(obj) {
    try {
    console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratarErro(e)
    }
}

const obj = { nome: 'Alexandre' }
imprimirNome(obj)