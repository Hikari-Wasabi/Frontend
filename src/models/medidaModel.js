var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    var instrucaoSql = `SELECT 
        valor_temperatura as temperatura, 
        valor_umidade as umidade,
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%S') as momento_grafico
                    FROM wasabi_daily
                    WHERE fk_sensor = ${idSensor}
                    ORDER BY id_registro DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {

    var instrucaoSql = `SELECT 
       valor_temperatura as temperatura, 
        valor_umidade as umidade,
                        DATE_FORMAT(data_hora,'%H:%i:%S') as momento_grafico, 
                        fk_sensor 
                        FROM wasabi_daily WHERE fk_sensor = ${idSensor} 
                    ORDER BY id_registro DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
