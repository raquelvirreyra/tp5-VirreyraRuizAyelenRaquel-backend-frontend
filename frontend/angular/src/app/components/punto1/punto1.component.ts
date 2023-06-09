import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  productos!: Array<Producto>;
  carrito: Array<Producto>;
  total:number;

  constructor(private productoService: ProductoService, private router: Router) { 
    this.carrito= new Array<Producto>();
    this.total=0;
    this.traerProductos();
  }

  ngOnInit(): void {
  }

  agregarCarrito(producto:Producto): void {
    console.log("Se agrego un producto al carrito");
    this.carrito.push(producto);
    this.total=this.total+producto.precio;
    console.log(this.carrito);
  }

  traerProductos(): void {
    this.productos=new Array<Producto>();
    let producto;
    this.productoService.getProductosDestacados().subscribe(
      (result :any[]) => {
        result.forEach(e => {
          producto = new Producto();
          Object.assign(producto, e);
          this.productos.push(producto);
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  agregarProducto(): void {
    this.router.navigate(["punto1-form"]);
  }
}
