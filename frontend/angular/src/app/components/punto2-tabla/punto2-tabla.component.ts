import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { Transaccion } from 'src/app/models/transaccion';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-punto2-tabla',
  templateUrl: './punto2-tabla.component.html',
  styleUrls: ['./punto2-tabla.component.css']
})
export class Punto2TablaComponent implements OnInit {

  monedas:Array<string>;
  fromType!:string;
  toType!:string;
  transacciones!:Array<Transaccion>;
  consulta:boolean = false;

  constructor(private conversorService: ConversorService) {
    this.monedas= new Array<string>();
    this.cargarListado();
    this.traerTransacciones();
  }

  ngOnInit(): void {
  }
  
  cargarListado():void {
    this.conversorService.getList().subscribe(
      (result: any[]) => {
        result.forEach(m => {
          this.monedas.push(m);
        });
        console.log(result);
      },
      error=>{
        console.log(error);
      }
    );
  }

  traerTransacciones():void {
    this.transacciones= new Array<Transaccion>();
    let transaccion;
    this.conversorService.getTransacciones().subscribe(
      (result: any[]) => {
        result.forEach(e => {
          transaccion = new Transaccion();
          Object.assign(transaccion, e);
          this.transacciones.push(transaccion);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  filtrarTransacciones() :void{
    this.transacciones = new Array<Transaccion>();
    let transaccion;
    this.conversorService.getTransaccionesPorMoneda(this.fromType, this.toType).subscribe(
      (result : any[]) => {
        result.forEach(e => {
          transaccion = new Transaccion();
          Object.assign(transaccion, e);
          this.transacciones.push(transaccion);
        });
        this.consulta=true;
      },
      error => {
        console.log(error);
      }
    );
  }

  volver():void{
    location.reload();
  }
}
