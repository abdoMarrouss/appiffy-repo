import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { UserComponent } from "./components/userComponent/user.component";
import { AdminService } from "./admin.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
    UserComponent, 
    AdminDashboardComponent,
    LoginComponent
  ],
    imports:[
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers:[AdminService],
    exports:[UserComponent, AdminDashboardComponent, LoginComponent]
})
export class AdminModule{}