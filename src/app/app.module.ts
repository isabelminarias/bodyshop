import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { HistoryComponent } from './history/history.component';
import { ClientNavbarComponent } from './client/client-navbar/client-navbar.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { ClientCarComponent } from './client/client-car/client-car.component';
import { ClientCarRegisterComponent } from './client/client-car-register/client-car-register.component';
import { RegisterClientComponent } from './users/register-client/register-client.component';
import { ClientAppointmentComponent } from './client/client-appointment/client-appointment.component';
import { AdminManageUsersComponent } from './admin/admin-manage--users/admin-manage--users.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminInventoryComponent } from './admin/admin-inventory/admin-inventory.component';
import { ManagerCarcheckComponent } from './manager/manager-carcheck/manager-carcheck.component';
import { ManagerWlComponent } from './manager/manager-wl/manager-wl.component';
import { ManagerMechaniclistComponent } from './manager/manager-mechaniclist/manager-mechaniclist.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultNavbarComponent,
    HomeComponent,
    ContactsComponent,
    ServicesComponent,
    HistoryComponent,
    ClientNavbarComponent,
    ClientHomeComponent,
    ClientCarComponent,
    ClientCarRegisterComponent,
    RegisterClientComponent,
    ClientAppointmentComponent,
    AdminManageUsersComponent,
    ManagerHomeComponent,
    AdminHomeComponent,
    AdminInventoryComponent,
    ManagerCarcheckComponent,
    ManagerWlComponent,
    ManagerMechaniclistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
