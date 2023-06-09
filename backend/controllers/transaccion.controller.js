const Transaccion = require('../models/transaccion.js');
const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransaccionesCliente = async (req, res) => {
    try {
        const transacciones = await Transaccion.find({ emailCliente: req.params.email });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al obtener las transacciones del cliente.' });
    }
};

transaccionCtrl.getTransaccionesPorMonedas = async (req, res) => {
    try {
        const { monedaOrigen, monedaDestino } = req.params;
        const transacciones = await Transaccion.find({
            monedaOrigen: monedaOrigen,
            monedaDestino: monedaDestino
        });
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al obtener las transacciones.' });
    }
};


module.exports = transaccionCtrl;