import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http: HttpClient) { }

  public getProductosDestacados(): Observable<any>{
    const url = "http://localhost:3000/api/producto/";
    return this._http.get(url+"?destacado=true");
  }

  public postCreateProducto(producto:Producto) : Observable<any>{
    const url = "http://localhost:3000/api/producto";
    return this._http.post(url, producto);
  }
}
