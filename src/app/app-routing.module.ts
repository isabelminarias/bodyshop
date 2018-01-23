import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
	{
	    path: '',
	    component: HomeComponent
	  },
	  {
	  	path: 'contacts',
	    component: ContactsComponent
	  },
	  {
	  	path: 'services',
	  	component: ServicesComponent
	  },
	  {
	  	path: 'history',
	  	component: HistoryComponent
	  },
	  {
	  	path: 'client',
	  	component: ClientHomeComponent
	  },
	  {
	  	path: 'client/cregister-car',
	  	component: ClientCarRegisterComponent
	  },
	  {
	  	path: 'client/carlist',
	  	component: ClientCarComponent
	  },
	  {
	  	path: 'client/creq-app',
	  	component: ClientAppointmentComponent
	  },
	  {
	  	path: 'register-client',
	  	component: RegisterClientComponent
	  },
	  {
	  	path: 'admin/userlist',
	  	component: AdminManageUsersComponent
	  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
