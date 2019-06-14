import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from  './app-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { NormatividadComponent } from './main/normatividad/normatividad.component';
import { InicioComponent } from './main/inicio/inicio.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    NormatividadComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
