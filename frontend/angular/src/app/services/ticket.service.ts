import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets: Array<Ticket>;

  constructor(private _http: HttpClient) {
    this.tickets = new Array<Ticket>();
  }

  public getTickets(): Observable<any> {
    return this._http.get("http://localhost:3000/api/ticket/all");
  }

  public deleteTicket(ticket: Ticket): Observable<any> {
    return this._http.delete("http://localhost:3000/api/ticket/" + ticket._id);
  }

  public getTicketsPorTipoEspectador(categoria: string): Observable<any> {
    const params = { 'categoria': categoria };
    return this._http.get('http://localhost:3000/api/ticket', { params });

  }

  public getEspectadores():Observable <any>{
    return this._http.get("http://localhost:3000/api/espectador");
  }

  public postCreateTicket(ticket:Ticket) :Observable<any>{
    return this._http.post("http://localhost:3000/api/ticket", ticket);
  }

  getPrecioCobrado(precioReal: number, tipoEspectador: string): number {
    if (tipoEspectador == "Local") {
      return precioReal - (precioReal * 20 / 100);
    } else {
      return precioReal;
    }
  }

  getTicket(id: string): Observable<any> {
    return this._http.get("http://localhost:3000/api/ticket/"+id);
  }

  editTicket(ticket: Ticket): Observable<any> {
    return this._http.put("http://localhost:3000/api/ticket/"+ticket._id, ticket);
  }
}
