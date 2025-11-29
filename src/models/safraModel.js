var database = require("../database/config")


function mostrarSafra(email, id_usuario) {

    var instrucaoSql  = `SELECT idSafra, 
		idsensor, 
        status_ativo  
        FROM safra_wasabi 
        JOIN responsavel r
        ON r.fk_safra = idSafra
        JOIN funcionario 
        ON fk_funcionario = idFuncionario 
        JOIN sensor s
        ON s.fk_safra = idSafra 
        WHERE email = '${email}' AND fk_funcionario = '${id_usuario}';` 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



module.exports = {
    mostrarSafra
};


