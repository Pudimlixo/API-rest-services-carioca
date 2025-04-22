let {tabelaTimes} = require('../database/database-memory.js')

function grupoTime(){
    return tabelaTimes
}

function timesMaiorSaldoGols(){
    
}

function timesMaiorDesempenho(){
    let tabelaOrdenada = [...tabelaTimes].sort((a,b)=> {
        const desempenhoA = parseFloat(a.desempenho)
        const desempenhoB = parseFloat(b.desempenho)

        if(desempenhoB > desempenhoA){
            return 1
        }

        if(desempenhoA > desempenhoB){
            return -1
        }

        return 0
    })

    return tabelaOrdenada.slice(0,5)
}

function timesMaisVazados(){
    
}

//Passaram para a próxima fase
function timesCarioca(){
    
}

module.exports = {grupoTime, timesCarioca, timesMaiorDesempenho, timesMaisVazados, timesMaiorSaldoGols}