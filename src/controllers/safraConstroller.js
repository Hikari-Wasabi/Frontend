var usuarioModel = require("../models/usuarioModel");
var safraModel = require("../models/safraModel");


function  mostrarSafra(req, res) {
    var email = req.params.EMAIL_USUARIO;
    var id_usuario  = req.params.ID_USUARIO;

    if (id_usuario != undefined || email != undefined) {

        safraModel.mostrarSafra(email, id_usuario)
            .then(
                function (resultadoMostrarSafra) {
                    console.log(`\nResultados encontrados: ${resultadoMostrarSafra}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoMostrarSafra)}`); // transforma JSON em String

                    if (resultadoMostrarSafra.length == 1) {
                        console.log(resultadoMostrarSafra);

                        res.json({
                        idSafra: resultadoMostrarSafra[0].idSafra,
                        idsensor: resultadoMostrarSafra[0].idsensor,
                        status_ativo: resultadoMostrarSafra[0].status_ativo,
        
                        });

                    } else {
                        res.status(403).send("Dados com problemas ou no servidor ou na configuração !");
                    }
                }
            )
    } } 


module.exports = {
    mostrarSafra
};
