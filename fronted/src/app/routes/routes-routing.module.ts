import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from '../components/service/service.component';
import { AboutComponent } from '../other/about/about.component';
import { HomeComponent } from '../other/home/home.component';
import { ProfileComponent } from '../other/profile/profile.component';
import { ContectComponent } from '../other/contect/contect.component';
import { ActivityComponent } from '../components/activity/activity.component';
import { DistributorComponent } from '../components/distributor/distributor.component';
import { FCComponent } from '../components/fc/fc.component';
import { RetailerComponent } from '../components/retailer/retailer.component';
import { TicketComponent } from '../components/ticket/ticket.component';
import { TransactionHistComponent } from '../components/transaction-hist/transaction-hist.component';
import { UserComponent } from '../components/user/user.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:HomeComponent,
    path:''
  },
  {
    component:ProfileComponent,
    path:'profile'
  },
  {
    component:ContectComponent,
    path:'contect'
  },
  {
    component:ActivityComponent,
    path:'activity'
  },
  {
    component:DistributorComponent,
    path:'distributor'
  },
  {
    component:FCComponent,
    path:'fc'
  },
  {
    component:RetailerComponent,
    path:'retailer'
  },
  {
    component:ServiceComponent,
    path:'service'
  },
  {
    component:TicketComponent,
    path:'ticket'
  },
  {
    component:TransactionHistComponent,
    path:'transaction'
  },
  {
    component:UserComponent,
    path:'user'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
