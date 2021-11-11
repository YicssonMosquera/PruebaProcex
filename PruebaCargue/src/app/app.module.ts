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
import {MatIconModule } from "@angular/material/icon"; // <----- Here
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';


//PRIMENG
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';
import { KnobModule } from "primeng/knob";




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
import { HemofiliaPipe } from './pipes/hemofilia/hemofilia.pipe';
import { HemofiliaEditComponent } from './components/hemofilia-edit/hemofilia-edit.component';
import { HemofiliaSoportesComponent } from './components/hemofilia-soportes/hemofilia-soportes.component';
import { CargarHemofiliaComponent } from './components/cargar-hemofilia/cargar-hemofilia.component';
import {BannerComponent}   from './components/banner/banner.component';
import { MenuuComponent, } from './components/menuu/menuu.component';
import { CuentaErcComponent } from './components/cuenta-erc/cuenta-erc.component';
import { CuentaErcListarComponent } from './components/cuenta-erc-listar/cuenta-erc-listar.component';
import { CuentaErcEditComponent } from './components/cuenta-erc-edit/cuenta-erc-edit.component';
import { CancerCargarComponent } from './components/cancer-cargar/cancer-cargar.component';
import { CancerEditComponent } from './components/cancer-edit/cancer-edit.component';
import { CancerFrmComponent } from './components/cancer-frm/cancer-frm.component';
import {CancerSoporteComponent} from './components/cancer-soporte/cancer-soporte.component';
import { CuentaArtritisComponent } from './components/cuenta-artritis/cuenta-artritis.component';
import { CuentaArtritisListarComponent } from './components/cuenta-artritis-listar/cuenta-artritis-listar.component';
import { CuentaArtritisEditComponent } from './components/cuenta-artritis-edit/cuenta-artritis-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    CargarExcelComponent,
    NavigationComponent,
    LoginComponent,
    HemofiliaListarComponent,
    HemofiliaFormularioComponent,
    HemofiliaPipe,
    HemofiliaEditComponent,
    HemofiliaSoportesComponent,
    CargarHemofiliaComponent,
    BannerComponent,
    MenuuComponent,
    CuentaErcComponent,
    CuentaErcListarComponent,
    CuentaErcEditComponent,
    CancerCargarComponent,
    CancerEditComponent,
    CancerFrmComponent,
    CancerSoporteComponent,
    CuentaArtritisComponent,
    CuentaArtritisListarComponent,
    CuentaArtritisEditComponent
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
    MatIconModule,
    TableModule,
    ButtonModule,
    ToastModule,
    PaginatorModule,
    CheckboxModule,
    MatAutocompleteModule,
    MatMenuModule,
    FileUploadModule,
    KnobModule,
    MatTabsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
