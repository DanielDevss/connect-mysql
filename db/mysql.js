const mysql = require('mysql2')

const {db} = require('../config/config')

const pool = mysql.createPool(db)

pool.getConnection((err,connection) => {
    if(err) {
        console.log('error al obtener conexion: ' , err)
        return
    }
    console.log('conexión establecida')
})

module.exports = pool