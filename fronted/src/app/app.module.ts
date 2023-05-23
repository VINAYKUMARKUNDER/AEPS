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
import { NavbarComponent } from './other/navbar/navbar.component';
import { FooterComponent } from './other/footer/footer.component';
import { AboutComponent } from './other/about/about.component';
import { ContectComponent } from './other/contect/contect.component';
import { ProfileComponent } from './other/profile/profile.component';
import { HomeComponent } from './other/home/home.component';

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
    TransactionHistComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContectComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
