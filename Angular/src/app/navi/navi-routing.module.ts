import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskUserComponent } from '../helpdesk-user/helpdesk-user.component';
import { HelpdeskAdminComponent } from '../helpdesk-admin/helpdesk-admin.component';
import { OrderComponent } from '../order/order.component';

const routes: Routes = [
  {path:'', redirectTo:'/orders', pathMatch:'full'},
  {path:'user-helpdesk', component: HelpdeskUserComponent },
  {path:'admin-helpdesk', component: HelpdeskAdminComponent},
  {path:'orders', component: OrderComponent},
  {path:'**', redirectTo:'/orders', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NaviRoutingModule { }
