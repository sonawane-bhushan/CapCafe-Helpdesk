import { Component, OnInit } from '@angular/core';
import { HelpdesskAdminService } from '../helpdesk-service/helpdessk-admin.service';
import { Ticket } from '../module/Ticket';

@Component({
  selector: 'app-helpdesk-admin',
  templateUrl: './helpdesk-admin.component.html',
  styleUrls: ['./helpdesk-admin.component.css']
})
export class HelpdeskAdminComponent implements OnInit {

  resolved : number;
  unresolved : number;
  unresolvedTickets : Ticket[];
  getUnresolved : boolean = true;
  tickets : Ticket[]; 
  location : string;

  constructor(private service : HelpdesskAdminService) { }

  ngOnInit() {
    this.service.showResolvedCount().subscribe(data => this.resolved = data);
    this.service.showUnresolvedCount().subscribe(data => this.unresolved = data);
    this.listAllTickets();
  }

  listAllTickets(){
    this.service.listAllTickets().subscribe(data => this.tickets = data);
  }

  listResolvedTickets(){
    this.service.listResolvedTickets().subscribe(data => this.tickets = data);
  }

  listUnresolvedTickets(){
    this.service.listUnresolvedTickets().subscribe(data => this.tickets = data);
  }

  listByLocation(){
    this.service.listTicketByLocation(this.location).subscribe(data => this.tickets = data);
  }

  resolvedFirst(){
    this.tickets = this.service.resolvedFirst(this.tickets);
  }

  unresolvedFirst(){
    this.tickets = this.service.unresolvedFirst(this.tickets);
  }

  
}
