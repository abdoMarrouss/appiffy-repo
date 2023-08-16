import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { UserComponent } from "./components/userComponent/user.component";
import { AdminService } from "./admin.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ProjectService } from "./components/project/project.service";
import { BrowserModule } from "@angular/platform-browser";
import { ProjectComponent } from "./components/project/list-project/project.component";

@NgModule({
    declarations:[
    UserComponent, 
    AdminDashboardComponent,
    LoginComponent,
    ProjectComponent,
    SidebarComponent
  ],
    imports:[
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule
    ],
    providers:[AdminService, ProjectService],
    exports:[UserComponent, AdminDashboardComponent, LoginComponent, ProjectComponent, SidebarComponent]
})
export class AdminModule{}