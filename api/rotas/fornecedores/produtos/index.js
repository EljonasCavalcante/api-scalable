const roteador = require('express').Router()

roteador.get('/', (requisicao, resposta) => {
    resposta.send(
        JSON.stringify([])
    )
})

const roteadorProdutos = require('../produtos') 

module.exports = roteador