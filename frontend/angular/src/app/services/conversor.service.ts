import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'; 
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private _http: HttpClient) { }

  public postConvert(fromValue: number, fromType: string, toType: string):Observable<any>{
    const url = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8094c409e0mshac8b34da78f3e07p1331dfjsn998a590e2344',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    const encodedParams = new URLSearchParams();
    encodedParams.set('from-value', fromValue.toString());
    encodedParams.set('from-type', fromType);
    encodedParams.set('to-type', toType);

    return this._http.post(url, encodedParams, httpOptions);
  }

  public getList():Observable<any>{
    const url = 'https://currency-converter13.p.rapidapi.com/list';
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8094c409e0mshac8b34da78f3e07p1331dfjsn998a590e2344',
        'X-RapidAPI-Host': 'currency-converter13.p.rapidapi.com'
      })
    }
    return this._http.get(url, httpOptions);
  }

  public postCreateTransaccion(transaccion:Transaccion):Observable<any>{
    const url = 'http://localhost:3000/api/transaccion';
    return this._http.post(url, transaccion);
  }

  public getTransacciones(): Observable<any>{
    const url = 'http://localhost:3000/api/transaccion';
    return this._http.get(url);
  }

  public getTransaccionesPorMoneda(monedaOrigen: string, monedaDestino:string) : Observable<any>{
    const url = 'http://localhost:3000/api/transaccion';
    return this._http.get(url+"/"+monedaOrigen+"/"+monedaDestino);
  }
}

