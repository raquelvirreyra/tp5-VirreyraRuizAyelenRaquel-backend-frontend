const Ticket = require('./../models/ticket');
const ticketCtrl = {};

ticketCtrl.createTicket = async (req, res) => {
    var { precioTicket, categoriaEspectador } = req.body;

    try {
        if (categoriaEspectador == "Local" || categoriaEspectador == "local" ){
            precioTicket = precioTicket - ( precioTicket * 20 / 100 );
        }
        var ticket = new Ticket({ ...req.body, precioTicket });
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

ticketCtrl.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('espectador');
        res.json(tickets);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        });
    }
}

ticketCtrl.getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id).populate('espectador');
        res.json(ticket);
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        });
    }
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(500).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.editTicket = async (req, res) => {
    const ticket = new Ticket(req.body);

    try {
        await Ticket.updateOne({ _id: req.body._id }, ticket);
        res.json({
            'status': '1',
            'msg': 'Ticket updated'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.getTicketsPorTipoEspectador = async (req, res) => {
    try {
        const { categoria } = req.query;
        const tickets = await Ticket.find({ categoriaEspectador: categoria }).populate('espectador');
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al obtener los tickets.' });
    }
}

module.exports = ticketCtrl;