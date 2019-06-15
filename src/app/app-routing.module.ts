import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './main/inicio/inicio.component';
import { NormatividadComponent } from './main/normatividad/normatividad.component';
import { ContratosComponent } from './main/contratos/contratos.component';
import { ProgramasComponent } from './main/programas/programas.component';
import { ProvedoresComponent } from './main/provedores/provedores.component';
import { InformacionComponent } from './main/informacion/informacion.component';
import { ProcedimintoComponent } from './main/procediminto/procediminto.component';
import { GraficasComponent } from './main/graficas/graficas.component';

const routes: Routes = [
 {path:'', component:InicioComponent},
 {path:'normatividad', component:NormatividadComponent},
 {path:'contratos' ,component:ContratosComponent},
 {path:'programas',component:ProgramasComponent},
 {path:'procediminto',component:ProcedimintoComponent},
 {path:'provedores',component:ProvedoresComponent},
 {path:'informacion',component:InformacionComponent},
 {path:'contratos/graficas',component:GraficasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
