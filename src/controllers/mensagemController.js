var mensagemModel = require("../models/mensagemModel");

function enviar(req, res){
    var email = req.body.emailServer;
    var pais = req.body.paisServer;
    var mensagem = req.body.mensagemServer;
    var razaoSocial = req.body.razaoSocialServer;

    if(email == ''){
        res.status(400).send("Email não inserido corretamente");
    }else if(pais == ''){
        res.status(400).send("O campo 'pais' não foi inserido");
    }else if(razaoSocial == ''){
        res.status(400).send("O campo 'razaoSocial' não foi inserido");
    }else if(mensagem == ''){
        res.status(400).send("A mensagem não foi inserida");
    }else{
        mensagemModel.enviar(email, pais, mensagem, razaoSocial)
        .then(
            function (resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

module.exports = {
    enviar
}