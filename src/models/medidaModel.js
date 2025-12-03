var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    var instrucaoSql = `  SELECT * FROM vw_ultimasmedidas_daily WHERE fk_sensor = ${idSensor} ORDER BY id_registro DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {

    var instrucaoSql = `SELECT * FROM vw_temporeal_daily WHERE fk_sensor = ${idSensor} ORDER BY id_registro DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
