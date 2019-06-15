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
import { CarrucelComponent } from './main/carrucel/carrucel.component';
import { ContratosComponent } from './main/contratos/contratos.component';
import { ProgramasComponent } from './main/programas/programas.component';
import { ProcedimientosComponent } from './main/procedimientos/procedimientos.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    NormatividadComponent,
    InicioComponent,
    CarrucelComponent,
    ContratosComponent,
    ProgramasComponent,
    ProcedimientosComponent
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
