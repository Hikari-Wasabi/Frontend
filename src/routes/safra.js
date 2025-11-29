var express = require("express");
var router = express.Router();


var safraController = require("../controllers/safraConstroller");


router.get("/mostrarSafra/:email/:id_usuario", function (req, res) {
    safraController.mostrarSafra(req, res);
})

router.get("/obter-situacao-safra/:id_usuario", function (req, res) {
    safraController.obterSituacaoSafra(req, res);
})

module.exports = router;