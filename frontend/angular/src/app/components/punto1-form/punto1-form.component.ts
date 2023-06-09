import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent implements OnInit {

  producto!: Producto;
  productos!: Array<Producto>;

  constructor(private router: Router, private productoService: ProductoService) { 
    this.producto= new Producto();
    this.producto.destacado=false;
    this.productos = new Array<Producto>();
  }

  ngOnInit(): void {
  }

  volver(): void{
    this.router.navigate(["punto5"]);
  }

  guardar():void{
    this.productoService.postCreateProducto(this.producto).subscribe(
      (result) => {
        console.log(result);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  
}
