let {tabelaTimes} = require('../database/database-memory.js')

function grupoTime(){
    return tabelaTimes
}

function timesMaiorSaldoGols(){
    let tabelaOrdenada = [...tabelaTimes].sort((a, b) => {
        const saldoA = a.saldoGols;
        const saldoB = b.saldoGols;

        if (saldoB > saldoA) {
            return 1; // Coloca `b` antes de `a`
        }

        if (saldoA > saldoB) {
            return -1; // Coloca `a` antes de `b`
        }

        return 0; // Mantém a ordem se forem iguais
    });

    return tabelaOrdenada.slice(0, 5); // Retorna os 5 primeiros times
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
    let tabelaOrdenada = [...tabelaTimes].sort((a, b) => {
        const defesaA = a.golsContra;
        const defesaB = b.golsContra;

        if (defesaB > defesaA) {
            return 1; // Coloca `b` antes de `a`
        }

        if (defesaA > defesaB) {
            return -1; // Coloca `a` antes de `b`
        }

        return 0; // Mantém a ordem se forem iguais
    });

    return tabelaOrdenada.slice(0, 5); // Retorna os 5 primeiros times
    
}

//Passaram para a próxima fase
function timesCarioca(){
    
}

module.exports = {grupoTime, timesCarioca, timesMaiorDesempenho, timesMaisVazados, timesMaiorSaldoGols}