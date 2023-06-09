const ticketCtrl = require('./../controllers/ticket.controller');

const express = require('express');
const router = express.Router();

router.post('/', ticketCtrl.createTicket);
router.get('/all', ticketCtrl.getTickets);
router.get('/:id', ticketCtrl.getTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
router.get('/', ticketCtrl.getTicketsPorTipoEspectador);//query params

module.exports = router;
