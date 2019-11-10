import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { HelpdeskAdminComponent } from './helpdesk-admin/helpdesk-admin.component';
import { HelpdeskUserComponent } from './helpdesk-user/helpdesk-user.component';
import { NaviRoutingModule } from './navi/navi-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    HelpdeskAdminComponent,
    HelpdeskUserComponent
  ],
  imports: [
    BrowserModule, FormsModule, NaviRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
