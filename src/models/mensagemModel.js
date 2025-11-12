var database = require("../database/config")

function enviar(email,pais,mensagem, razaoSocial){
    var instrucaoSql = `INSERT INTO contato_inicial (email, pais, mensagem, razão_social) VALUES
    ('${email}', '${pais}', '${mensagem}', '${razaoSocial}')`

    return database.executar(instrucaoSql);
}

module.exports = {enviar};