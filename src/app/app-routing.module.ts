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
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminInventoryComponent } from './admin/admin-inventory/admin-inventory.component';
import { ManagerCarcheckComponent } from './manager/manager-carcheck/manager-carcheck.component';
import { ManagerWlComponent } from './manager/manager-wl/manager-wl.component';
import { ManagerMechaniclistComponent } from './manager/manager-mechaniclist/manager-mechaniclist.component';

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
	  	path:'admin',
	  	component: AdminHomeComponent
	  },
	  {
	  	path: 'admin/userlist',
	  	component: AdminManageUsersComponent
	  },
	  {
	  	path: 'admin/inv',
	  	component: AdminInventoryComponent
	  },
	  {
	  	path: 'manager',
	  	component: ManagerHomeComponent
	  },
	  {
	  	path:'manager/waiting-list',
	  	component: ManagerWlComponent
	  },
	  {
	  	path: 'manager/mechanic-list',
	  	component: ManagerMechaniclistComponent
	  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
