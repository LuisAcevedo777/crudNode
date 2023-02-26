const express = require('express')
const port = 3000
const morgan = require('morgan')
const Routes = require('../routes/new.routes')
const db= require('./utils/database')



const app = express()
//base de datos autenticacion
db.authenticate()
.then(()=> {

console.log("conexion a base OK")

})

.catch((error)=>{

console.log(error)

})
//llamado de tabla



db.sync()
.then(()=>{

console.log('Base datos sincronizada')
})

.catch((error)=>{

console.log(error)
})


app.use(morgan('dev'));
app.use(express.json())

app.use(Routes)

app.listen(8000, ()=>{

console.log(`Servidor corriendo en puerto 8000`)
})












