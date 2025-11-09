var database = require("../database/config")

function enviar(email,pais,mensagem){
    var instrucaoSql = `INSERT INTO contato_inicial (email, pais, mensagem) VALUES
    ('${email}', '${pais}', '${mensagem}')`

    return database.executar(instrucaoSql);
}

module.exports = {enviar};