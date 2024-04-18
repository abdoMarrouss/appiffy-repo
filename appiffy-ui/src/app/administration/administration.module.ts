import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { BrowserModule } from "@angular/platform-browser";
import { AdministrationRoutingModule } from "./administration.routing";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';



 @NgModule({
    declarations:[
    LoginComponent,
    DashboardComponent,
    SideBarComponent,
    TopBarComponent
  ],
    imports:[
        // BrowserModule,
        AdministrationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers:[],
    exports:[
      LoginComponent,
      DashboardComponent,
      SideBarComponent

    ]

 })

 export class AdministrationModule {}