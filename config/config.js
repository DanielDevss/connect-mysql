const config = {}
config.db = {
    host : process.env.HOST_DB,
    user : process.env.USER_DB,
    password : process.env.PASS_DB,
    database : process.env.NAME_DB,
    connectionLimit : 10,
    waitForConnections : true
}

config.puerto = process.env.PORT || 3000

module.exports = config