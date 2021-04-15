import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CargarExcelComponent} from './components/cargar-excel/cargar-excel.component'
import {LoginComponent} from './components/login/login.component'

const routes: Routes = [
  {path: '',redirectTo:'/Login',pathMatch:'full'},
  {path:  'cargar',component:CargarExcelComponent},
  {path:  'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
