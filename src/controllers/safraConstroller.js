var safraModel = require("../models/safraModel");

function mostrarSafra(req, res) {
  var email = req.params.email;
  var id_usuario = req.params.id_usuario;

  if (id_usuario != undefined && email != undefined) {
    safraModel
      .mostrarSafra(email, id_usuario)
      .then(function (resultadoMostrarSafra) {
        console.log(`\nResultados encontrados: ${resultadoMostrarSafra}`);
        console.log(`Resultados: ${JSON.stringify(resultadoMostrarSafra)}`); // transforma JSON em String

        res.json(resultadoMostrarSafra);
      });
  }
}

function obterSituacaoSafra(req, res) {
  var id_usuario = req.params.id_usuario;

  if (id_usuario != undefined) {
    safraModel.obterSituacaoSafras(id_usuario).then(function (resultado) {
      console.log(`\nResultados encontrados: ${resultado}`);
      console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

      res.json(resultado);
    });
  } else {
      res.status(400).json("id usuario undefined");
  }
}

module.exports = {
  mostrarSafra,
  obterSituacaoSafra
};
