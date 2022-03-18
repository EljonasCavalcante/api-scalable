const Sequelize = require('sequelize')
const instancia =require('../../../banco-de-dados')

const colunas = {
    titulo: {
        type: Sequelize.STRING,
        allwNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allwNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allwNull: false,
        defaultValue: 0
    },
    fornecedor: {
        type: Sequelize.INTEGER,
        allwNull: false,
        references: {
            model: require('../ModeloTabelaFornecedor'),
            key: 'id'
        }
    }

}

const opcoes = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('produto', colunas, opcoes)