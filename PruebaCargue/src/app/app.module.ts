import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http'
import { NgxUiLoaderModule } from  'ngx-ui-loader';

//////////////////Componentes angular  material
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon"; // <----- Here


import {AuthGuard} from '../app/rutasprotegidas/guards/auth.guard'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationComponent} from './components/navigation/navigation.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargarExcelComponent } from './components/cargar-excel/cargar-excel.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HemofiliaListarComponent } from './components/hemofilia-listar/hemofilia-listar.component';
import { HemofiliaFormularioComponent } from './components/hemofilia-formulario/hemofilia-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CargarExcelComponent,
    NavigationComponent,
    LoginComponent,
    HemofiliaListarComponent,
    HemofiliaFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxUiLoaderModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
