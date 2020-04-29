import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganisationsComponent } from './organisations/organisations.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'organisations', component: OrganisationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
