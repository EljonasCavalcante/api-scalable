const roteador = require('express').Router()
const TabelaForncedor = require('./TabelaFornecedor')

roteador.use('/', async (requisicao, resposta) =>
{
    const resultados = await TabelaForncedor.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador