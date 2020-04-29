import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsumersComponent } from './components/consumers/consumers/consumers.component';
import { ProvidersComponent } from './components/providers/providers/providers.component';
import { ConsultationComponent } from './components/consultation/consultation/consultation.component';
import { ConfigurationComponent } from './components/configuration/configuration/configuration.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'user-list', component: UsersListComponent },
  { path: 'organisations', component: OrganisationsComponent },
  { path: 'Consumers' , component: ConsumersComponent },
  { path: 'Providers' , component: ProvidersComponent },
  { path: 'Consultation' , component: ConsultationComponent },
  { path: 'Configuration' , component: ConfigurationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
