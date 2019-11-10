import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../module/Ticket';

@Injectable({
  providedIn: 'root'
})
export class HelpdesskAdminService {


  constructor(public http : HttpClient) { }

  showResolvedCount(){
    return this.http.get<number>("http://localhost:8888/helpdesk/ticket/count/resolved");
  }

  showUnresolvedCount(){
    return this.http.get<number>("http://localhost:8888/helpdesk/ticket/count/unresolved");
  }

  listAllTickets(){
    return this.http.get<Ticket[]>("http://localhost:8888/helpdesk/ticket/list");
  }

  listResolvedTickets(){
    return this.http.get<Ticket[]>("http://localhost:8888/helpdesk/ticket/list/resolved");
  }

  listUnresolvedTickets(){
    return this.http.get<Ticket[]>("http://localhost:8888/helpdesk/ticket/list/unresolved");
  }

  listTicketByLocation(location : string){
    return this.http.get<Ticket[]>("http:localhost:8888/helpdesk/ticket/list/location/"+location);
  }

  resolvedFirst(tickets : Ticket[]){
    tickets.sort((a, b) => a.status > b.status ? 1 : ((a.status < b.status) ? -1 : 0));
    console.log(tickets);
    return tickets;
  }

  unresolvedFirst(tickets : Ticket[]){
    tickets.sort((a, b) => a.status < b.status ? 1 : ((a.status > b.status) ? -1 : 0));
    console.log(tickets);
    return tickets;
  }
}

