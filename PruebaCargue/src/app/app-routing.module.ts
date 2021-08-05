import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CargarExcelComponent} from './components/cargar-excel/cargar-excel.component';
import {LoginComponent} from './components/login/login.component';
import {HemofiliaListarComponent} from './components/hemofilia-listar/hemofilia-listar.component';
import {HemofiliaFormularioComponent} from './components/hemofilia-formulario/hemofilia-formulario.component';
import {HemofiliaEditComponent} from './components/hemofilia-edit/hemofilia-edit.component'
import {AuthGuard} from './rutasprotegidas/guards/auth.guard'
import { HemofiliaSoportesComponent } from './components/hemofilia-soportes/hemofilia-soportes.component';
import { CargarHemofiliaComponent } from './components/cargar-hemofilia/cargar-hemofilia.component';
import { CuentaCancerComponent } from './components/cuenta-cancer/cuenta-cancer.component';
import {CuentaCancerListarComponent} from './components/cuenta-cancer-listar/cuenta-cancer-listar.component';
import {CuentaCancerActualizarComponent} from './components/cuenta-cancer-actualizar/cuenta-cancer-actualizar.component';
import {CuentaErcComponent} from './components/cuenta-erc/cuenta-erc.component';
import {CuentaErcEditComponent} from './components/cuenta-erc-edit/cuenta-erc-edit.component'
import {CuentaErcListarComponent} from '../app/components/cuenta-erc-listar/cuenta-erc-listar.component'
import {CancerFrmComponent} from '../app/components/cancer-frm/cancer-frm.component'

const routes: Routes = [

  {path: '',redirectTo:'/Hemofilia-cargar',pathMatch:'full'},
  {path:  'cargar',component:CargarExcelComponent,canActivate:[AuthGuard]},
  {path:  'Hemofilia-listar',component:HemofiliaListarComponent,canActivate:[AuthGuard]},
  {path:  'Hemofilia-frm',component:HemofiliaFormularioComponent,canActivate:[AuthGuard]},
  {path:  'Hemofilia-frm/:cc',component:HemofiliaEditComponent,canActivate:[AuthGuard]},
  {path:  'Hemofilia-soporte/:cc',component:HemofiliaSoportesComponent,canActivate:[AuthGuard]},
  {path:  'Hemofilia-cargar',component:CargarHemofiliaComponent,canActivate:[AuthGuard]},
  {path:  'Artritis-frm',component:CuentaCancerComponent,canActivate:[AuthGuard]},
  {path:  'Artritis-listar',component:CuentaCancerListarComponent,canActivate:[AuthGuard]},
  {path:  'Artritis-edit/:cc',component:CuentaCancerActualizarComponent,canActivate:[AuthGuard]},
  {path:  'Erc-frm',component:CuentaErcComponent,canActivate:[AuthGuard]},
  {path:  'Erc-listar',component:CuentaErcListarComponent,canActivate:[AuthGuard]},
  {path:  'Erc-edit/:cc',component:CuentaErcEditComponent,canActivate:[AuthGuard]},
  {path:  'cancer-guard',component:CancerFrmComponent,canActivate:[AuthGuard]},
  {path:  'Login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
