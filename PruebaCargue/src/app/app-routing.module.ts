import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CargarExcelComponent} from './components/cargar-excel/cargar-excel.component'
import {LoginComponent} from './components/login/login.component'

const routes: Routes = [
  {path: '',redirectTo:'/cargar',pathMatch:'full'},
  {path:  'cargar',component:CargarExcelComponent},
  {path:  'Login',component:LoginComponent},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
