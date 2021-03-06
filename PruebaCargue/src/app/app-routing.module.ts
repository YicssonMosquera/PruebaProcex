import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CargarExcelComponent} from './components/cargar-excel/cargar-excel.component';
import {LoginComponent} from './components/login/login.component';
import {HemofiliaListarComponent} from './components/hemofilia-listar/hemofilia-listar.component';
import {HemofiliaFormularioComponent} from './components/hemofilia-formulario/hemofilia-formulario.component'
import {AuthGuard} from './rutasprotegidas/guards/auth.guard'

const routes: Routes = [
 
  {path: '',redirectTo:'/cargar',pathMatch:'full'},
  {path:  'cargar',component:CargarExcelComponent,canActivate:[AuthGuard]},
  {path:  'Hemofilia-listar',component:HemofiliaListarComponent,canActivate:[AuthGuard]},
  {path:  'Hemofilia-frm',component:HemofiliaFormularioComponent,canActivate:[AuthGuard]},
  {path:  'Login',component:LoginComponent},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
