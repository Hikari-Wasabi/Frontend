var database = require("../database/config")


function mostrarSafra(id_usuario) {

    var instrucaoSql  = `
           SELECT *
        FROM vw_situacao_safra v
        JOIN responsavel r ON v.idSafra = r.fk_safra
        WHERE id_registro = (
            SELECT MAX(id_registro)
            FROM vw_situacao_safra
            WHERE idsensor = v.idsensor
        )
        AND fk_funcionario = '${id_usuario}'
        ORDER BY idSafra ASC
        ;` 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function obterSituacaoSafras(id_usuario) {

    var instrucaoSql  = `
        SELECT *
        FROM vw_situacao_safra v
        JOIN responsavel r ON v.idSafra = r.fk_safra
        WHERE id_registro = (
            SELECT MAX(id_registro)
            FROM vw_situacao_safra
            WHERE idsensor = v.idsensor
        )
        AND fk_funcionario = '${id_usuario}'
        ORDER BY idSafra ASC
        ;
    ` 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


module.exports = {
    mostrarSafra,
    obterSituacaoSafras
};


