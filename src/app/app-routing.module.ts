import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './main/inicio/inicio.component';
import { NormatividadComponent } from './main/normatividad/normatividad.component';
import { ContratosComponent } from './main/contratos/contratos.component';
import { ProgramasComponent } from './main/programas/programas.component';
import { ProvedoresComponent } from './main/provedores/provedores.component';
import { InformacionComponent } from './main/informacion/informacion.component';

const routes: Routes = [
 {path:'', component:InicioComponent},
 {path:'normatividad', component:NormatividadComponent},
 {path:'contratos' ,component:ContratosComponent},
 {path:'programas',component:ProgramasComponent},
 {path:'procediminto',component:ProgramasComponent},
 {path:'provedores',component:ProvedoresComponent},
 {path:'informacion',component:InformacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
