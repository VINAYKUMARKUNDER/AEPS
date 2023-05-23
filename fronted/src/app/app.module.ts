import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { UserComponent } from './components/user/user.component';
import { FCComponent } from './components/fc/fc.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ActivityComponent } from './components/activity/activity.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { ServiceComponent } from './components/service/service.component';
import { TransactionHistComponent } from './components/transaction-hist/transaction-hist.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UserComponent,
    FCComponent,
    TicketComponent,
    ActivityComponent,
    DistributorComponent,
    RetailerComponent,
    ServiceComponent,
    TransactionHistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
