const express = require('express')
const app = express()
const porta = 3333
let {grupoTime, timesMaiorDesempenho, timesMaiorSaldoGols, timesCarioca, timesMaisVazados} = require('./services/services.js')

app.get('/',(req,res)=>{
    res.send(`-----Menu da aplicação-----`)
})

app.get('/times/grupoUnico',(req,res)=>{
    const times = grupoTime()
    res.json(times)
})

app.get('/times/maiorsaldo',(req,res)=>{
    const times = timesMaiorSaldoGols()
    res.json(times)
})

app.get('/times/melhordesempenho',(req,res)=>{
    const times = timesMaiorDesempenho()
    res.json(times)
})

app.get('/times/defesamaisvazada',(req,res)=>{
    const times = timesMaisVazados()
    res.json(times)
})

app.get('/times/proximafase',(req,res)=>{
    const times = timesCarioca()
    res.json(times)
})


app.listen(3333, ()=> {
    console.log(`Servidor ligado na porta ${porta}...`)
})