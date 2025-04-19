const express = require('express')
const app = express()
const porta = 3333
let {grupoTime, timesMaiorDesempenho, timesMaiorSaldoGols, timesCarioca, timesMaisVazados} = require('./services/services.js')

app.get('/',(req,res)=>{
    res.send(`Menu da aplicação`)
})

app.get('/times/grupo/:',(req,res)=>{
    res.json()
})

app.get('/times/maiorsaldo',(req,res)=>{
    res.json()
})

app.get('/times/melhordesempenho',(req,res)=>{
    res.json()
})

app.get('/times/defesamaisvazada',(req,res)=>{
    res.json()
})

app.get('/times/proximafase',(req,res)=>{
    res.json()
})


app.listen(3333, ()=> {
    console.log(`Servidor ligado na porta ${porta}...`)
})