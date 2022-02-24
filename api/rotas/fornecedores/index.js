const roteador = require('express').Router()

roteador.use('/', (requisicao, resposta) =>
{
    resposta.send('Okay')
})

module.exports = roteador