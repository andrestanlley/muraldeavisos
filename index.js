const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const apiRoute = require('./routes/api')

app.use('/api', apiRoute)
app.use('/', express.static(path.join(__dirname, "public")))

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta :${port}`)
})

