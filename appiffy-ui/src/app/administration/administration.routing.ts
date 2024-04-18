


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent, canActivate: [AdminGuard]},
  { path: 'dashboard', component: DashboardComponent , canActivate: [LoginGuard]}

//   {path:'home',component:HomeComponent},
//   {
//     path:'administration',
//     loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
