import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto5-form',
  templateUrl: './punto5-form.component.html',
  styleUrls: ['./punto5-form.component.css']
})
export class Punto5FormComponent implements OnInit {

  ticket!:Ticket;
  accion!:string;
  espectadores!:Array<Espectador>;
  precioFinal!:number;
  modificar:boolean=true;

  constructor(private router:Router,
              private ticketService: TicketService,
              private activatedRoute:ActivatedRoute) { 
    this.ticket = new Ticket();
    this.traerEspectadores();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0"){
      this.accion = "new";
      }else{
      this.accion = "update";
      this.cargarTicket(params['id']);
      }
      });
  }

  volver():void{
    this.router.navigate(["punto5-table"]);
  }

  traerEspectadores():void{
    this.espectadores = new Array<Espectador>();
    let espectador = new Espectador;

    this.ticketService.getEspectadores().subscribe(
      (result : any[]) => {
        result.forEach(e => {
          espectador = new Espectador();
          Object.assign(espectador, e);
          this.espectadores.push(espectador);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  guardarTicket(): void{
    this.ticketService.postCreateTicket(this.ticket).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["punto5-table"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  cargarTicket(id:string):void{
    this.ticket= new Ticket();
    this.ticketService.getTicket(id).subscribe(
      result => {
        Object.assign(this.ticket, result);
        console.log(this.ticket);
      },
      error => {
        console.log(error);
      }
    );
  }

  modificarTicket(ticket:Ticket):void{
    this.ticketService.editTicket(ticket).subscribe(
      result => {
        console.log(result);
        this.router.navigate(["punto5-table"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  getPrecio():void{
    if (this.ticket.categoriaEspectador=="Local"){
      this.precioFinal = this.ticket.precioTicket - this.ticket.precioTicket * 20 / 100;
    }else{
      this.precioFinal = this.ticket.precioTicket;
    }
  }
}
