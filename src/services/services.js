let {tabelaTimes} = require('../database/database-memory.js')

function grupoTime(){
    return tabelaTimes
}

function timesMaiorSaldoGols(){
<<<<<<< HEAD
    let tabelaOrdenada = [...tabelaTimes].sort((a,b) => {
        const maisGolsA = parseFloat(a.saldoGols)
        const maisGolsB = parseFloat(b.saldoGols)

        if(maisGolsB > maisGolsA){
            return +1
        } else if(maisGolsA > maisGolsB){
            return -1
        }

        return 0

    })

    return tabelaOrdenada.slice(0,5)
=======
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
>>>>>>> 70ee8eabe665e681eeee957de2f3fb8dbeba8804
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
<<<<<<< HEAD
    let tabelaOrdenada = [...tabelaTimes].sort((a,b) => {
        const vazadoA = parseFloat(a.golsContra)
        const vazadoB = parseFloat(b.golsContra)

        if(vazadoB > vazadoA){
            return +1
        } else if(vazadoA > vazadoB){
            return -1
        }

        return 0
    })

    return tabelaOrdenada.slice(0,5)

=======
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
    
>>>>>>> 70ee8eabe665e681eeee957de2f3fb8dbeba8804
}

//Passaram para a próxima fase
function timesCarioca(){
    let tabelaOrdenada = [...tabelaTimes].sort((a,b)=>{
        const timePosicaoA = parseFloat(a.pontos)
        const timePosicaoB = parseFloat(b.pontos)

        if(timePosicaoB > timePosicaoA){
            return +1
            
        } else if(timePosicaoA > timePosicaoB){
            return -1
        }

        return 0
    })

    return tabelaOrdenada.slice(0,4)
}

module.exports = {grupoTime, timesCarioca, timesMaiorDesempenho, timesMaisVazados, timesMaiorSaldoGols}