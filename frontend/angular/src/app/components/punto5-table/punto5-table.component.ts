import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5-table',
  templateUrl: './punto5-table.component.html',
  styleUrls: ['./punto5-table.component.css']
})
export class Punto5TableComponent implements OnInit {

  tickets!: Array<Ticket>;
  tipoEspectador!:string;
  consulta:boolean=false;

  constructor(private ticketService: TicketService,
              private router: Router) { 
    this.traerTickets();
  }

  ngOnInit(): void {
  }

  agregarTicket(): void{
    this.router.navigate(["punto5-form", 0]);
  }

  traerTickets(): void{
    this.tickets = new Array<Ticket>();
    let ticket;

    this.ticketService.getTickets().subscribe(
      (result: any[]) => {
        result.forEach(e => {
          console.log(result);
          ticket = new Ticket();
          Object.assign(ticket, e);
          this.tickets.push(ticket);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  eliminarTicket(ticket:Ticket): void{
    this.ticketService.deleteTicket(ticket).subscribe(
      (result) => {
        console.log(result);
        this.traerTickets();
      },
      error => {
        console.log(error);
      }
    );  
  }

  filtrarTickets():void{
    this.tickets = new Array<Ticket>();
    let ticket;

    this.ticketService.getTicketsPorTipoEspectador(this.tipoEspectador).subscribe(
      (result: any[]) => {
        result.forEach(e => {
          ticket = new Ticket();
          Object.assign(ticket, e);
          this.tickets.push(ticket);
        });
        this.consulta=true;
      },
      error => {
        console.log(error);
      }
    );
  }

  volver(): void{
    location.reload();
  }

  modificarTicket(ticket:Ticket):void{
    this.router.navigate(["punto5-form", ticket._id]);
  }

}
