import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdministrationModule } from './administration/administration.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrationModule
  ],
  providers: [
   
    
    provideClientHydration()
  ], exports: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
