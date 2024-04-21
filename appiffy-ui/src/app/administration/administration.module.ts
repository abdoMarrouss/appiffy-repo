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
import { GenerateArtComponent } from './side-bar-components/generate-art/generate-art.component';
import { StylingComponent } from './styling/styling.component';



 @NgModule({
    declarations:[
    LoginComponent,
    DashboardComponent,
    // partials
    SideBarComponent,
    TopBarComponent,
    //side-bar components 
    GenerateArtComponent,
    StylingComponent
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
       // partials
      DashboardComponent,
      SideBarComponent,
      //side-bar components 
      GenerateArtComponent


    ]

 })

 export class AdministrationModule {}