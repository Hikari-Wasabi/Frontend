var database = require("../database/config")


function mostrarSafra(email, id_usuario) {

    var instrucaoSql  = `
    SELECT 
    s.idSafra,
    sen.idsensor,
    sen.modelo,
    sen.status_ativo,         
    v.valor_temperatura,
    v.valor_umidade,
    v.situacao_temperatura,
    v.situacao_umidade,
    v.situacao_safra
    FROM safra_wasabi s
JOIN responsavel r
    ON r.fk_safra = s.idSafra
JOIN funcionario f
    ON r.fk_funcionario = f.idFuncionario
JOIN sensor sen
    ON sen.fk_safra = s.idSafra
JOIN vw_situacao_safra v
    ON v.idSafra = s.idSafra
       AND v.idsensor = sen.idsensor
WHERE f.email = '${email};' 
    AND f.idFuncionario = '${id_usuario}';` 

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


