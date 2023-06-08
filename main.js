const express = require('express')
const app = express()
require('dotenv').config()

const pool = require('./db/mysql')
const {puerto} = require('./config/config')

app.get('/', (req,res) => {
    res.send('CONEXION PRUEBA')
})

app.get('/connect', (req,res) => {
    pool.getConnection((err,connect) => {
        connect.query('SELECT * FROM usuarios', (err,users) => {
            connect.release()
            if(err) {
                console.error('Error de consulta')
                return
            }
            res.json(users)
        })
    })
})

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`)
})