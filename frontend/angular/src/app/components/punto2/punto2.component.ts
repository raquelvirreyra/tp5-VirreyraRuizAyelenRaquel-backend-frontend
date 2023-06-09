import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { equal } from 'assert';
import { log } from 'console';
import { Transaccion } from 'src/app/models/transaccion';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  monedas:Array<string>;
  emailCliente!:string;
  result!:number;
  fromValue!:number;
  fromType!:string;
  toType!:string;

  constructor(private conversorService: ConversorService) {
    this.monedas= new Array<string>();
    this.cargarListado();
  }

  ngOnInit(): void {
  }

  convertir():void {
    let transaccion;
    this.conversorService.postConvert(this.fromValue, this.fromType, this.toType).subscribe(
      result=>{
        console.log(result);
        this.result=result.result;

        transaccion = new Transaccion();
        transaccion.cantidadDestino=this.result;
        transaccion.cantidadOrigen=this.fromValue;
        transaccion.emailCliente=this.emailCliente;
        transaccion.monedaDestino=this.toType;
        transaccion.monedaOrigen=this.fromType;

        this.conversorService.postCreateTransaccion(transaccion).subscribe(
          (res) => {
            console.log(res);
          }, 
          err => {
            console.log(err);
          }
        );
      },
      error=>{
        console.log(error);
      }
    );
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


}
