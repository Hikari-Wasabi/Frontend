var express = require("express");
var router = express.Router();


var safraController = require("../controllers/safraConstroller");


router.get("/mostrarSafra", function (req, res) {
    safraController.mostrarSafra(req, res);
})


module.exports = router;