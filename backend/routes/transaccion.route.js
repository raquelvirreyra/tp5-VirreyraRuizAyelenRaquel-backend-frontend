const transaccionCtrl = require('./../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/:email', transaccionCtrl.getTransaccionesCliente);
router.get('/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesPorMonedas);

module.exports = router;