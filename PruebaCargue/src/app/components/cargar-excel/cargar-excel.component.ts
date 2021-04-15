import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Res4505Service } from '../../services/res4505/res4505.service'
import { Res4505 } from '../../models/Res4505'
import { excel } from '../../models/datos'
import Swal from 'sweetalert2';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-cargar-excel',
  templateUrl: './cargar-excel.component.html',
  styleUrls: ['./cargar-excel.component.css']
})
export class CargarExcelComponent implements OnInit {

  excel: excel = {
    PKId: 0,
    Dato1: '',
    Dato2: '',
    Dato3: '',
    Dato4: ''
  }



  data = [];
  data2: Res4505 = {
    PKId: 0,
    Tipo_Registro: '',
    Consecutivo_registro: '',
    Coidigohabilitacionips_primaria: '',
    Tipoid_usuario: '',
    Numero_Identificacion: '',
    PrimerApellido_usuario: '',
    SegundoApellido_usuario: '',
    PrimerNombre_usuario: '',
    SegundoNombre_usuario: '',
    Fecha_nacimiento: '',
    Sexo: '',
    Codigo_pertenenciaetnica: 0,
    Codigo_ocupacion: 0,
    Codigo_niveleducativo: 0,
    Gestacion: 0,
    Sifilisgestacional_congenita: 0,
    Hipertension_Inducida_por_la_Gestacion: 0,
    Hipotiroidismo_Congenito: 0,
    Sintomatico_Respiratorio: 0,
    Tuberculosis_Multidrogoresistente: 0,
    Lepra: 0,
    Obesidad_Desnutricion_Proteico_Calorica: 0,
    Victima_Maltrato: 0,
    Victima_Violencia_Sexual: 0,
    Infecciones_TrasmisionSexual: 0,
    Enfermedad_Mental: 0,
    Cancer_Cervix: 0,
    Cancer_Seno: 0,
    Fluorosis_Dental: 0,
    Fecha_Peso: '',
    Peso_Kilogramos: 0,
    Fecha_Talla: '',
    Talla_Centimetros: 0,
    Fecha_ProbableParto: '',
    Edad_GestacionalNacer: 0,
    BCG: 0,
    Hepatitis_B_menores1ano: 0,
    Pentavalente: 0,
    Polio: 0,
    DPT_menores5anos: 0,
    Rotavirus: 0,
    Neumococo: 0,
    Influenza_Ninos: 0,
    Fiebre_Amarillaninosde1ano: 0,
    HepatitisA: 0,
    Triple_ViralNinos: 0,
    Virus_Papiloma_Humano: 0,
    TDTTMujeresEdad_Fertil_15_49_anos: 0,
    ControlPlaca_Bacteriana: 0,
    Fecha_atencion_parto_o_cesarea: '',
    Fecha_salida_atencion_parto_cesarea: '',
    Fecha_consejeria_Lactancia_Materna: '',
    Control_Recien_Nacido: '',
    Planificacion_Familiar_Primeravez: '',
    Suministro_Metodo_Anticonceptivo: 0,
    Fecha_Suministro_Metodo_Anticonceptivo: '',
    ControlPrenatal_Primeravez: '',
    Control_Prenatal: 0,
    ultimo_Control_Prenatal: '',
    Suministroacido_Folico_ultimo_Control_Prenatal: 0,
    SuministroSulfato_Ferroso_ultimoControlPrenatal: 0,
    Suministro_CarbonatoCalcio_ltimoControlPrenatal: 0,
    Valoracion_Agudeza_Visual: '',
    Consulta_por_Oftalmologia: '',
    Fecha_Diagnostico_Desnutricion_Proteico_Calorica: '',
    Consulta_Mujer_o_Menor_Victima_Maltrato: '',
    Consulta_Victimas_Violencia_Sexual: '',
    Consulta_Nutricion: '',
    Consulta_de_Psicologia: '',
    Consulta_Crecimiento_y_DesarrolloPrimeravez: '',
    Suministro_Sulfato_Ferroso_ultima_Consulta_del_Menor_10_anos: 0,
    Suministro_Vitamina_A_ultima_Consulta_Menor_10_anos: 0,
    Consulta_JovenPrimeravez: '',
    Consulta_AdultoPrimeravez: '',
    Preservativos_entregados_a_pacientes_con_ITS: 0,
    Asesoria_Pre_test_Elisa_para_VIH: '',
    Asesoria_Pos_test_Elisa_para_VIH: '',
    PCAEDCBAIC: 0,
    Fecha_Antigeno_Superficie_Hepatitis_B_en_Gestantes: '',
    Resultado_Antigeno_Superficie_Hepatitis_B_en_Gestantes: 0,
    Fecha_Serologia_para_Sifilis: '',
    Resultado_Serologia_para_Sifilis: 0,
    Fecha_Toma_Elisa_para_VIH: '',
    Resultado_Elisa_para_VIH: 0,
    Fecha_TSH_Neonatal: '',
    Resultado_TSH_Neonatal: 0,
    Tamizaje_Cancer_Cuello_Uterino: 0,
    Citologia_Cervico_uterina: '',
    Citologia_Cervico_uterina_Resultados_segun_Bethesda: 0,
    Calidad_Muestra_Citologia_Cervicouterina: 0,
    Codigo_habilitacion_IPS_donde_se_toma_Citologia_Cervicouterina: '',
    Fecha_Colposcopia: '',
    Codigo_habilitacion_IPS_donde_se_toma_Colposcopia: '',
    Fecha_biopsia_cervical: '',
    Resultado_Biopsia_Cervical: 0,
    Codigo_habilitacion_IPS_donde_se_toma_biopsia: '',
    Fecha_Mamografia: '',
    Resultado_Mamografia: 0,
    Codigo_habilitacion_IPS_donde_se_toma_Mamografia: '',
    Fecha_Toma_Biopsia_Seno_por_BACAF: '',
    Fecha_Resultado_Biopsia_Seno_por_BACAF: '',
    Biopsia_Seno_por_BACAF: '',
    Codigo_habilitacion_IPS_donde_se_toma_Biopsia_Seno_por_BACAF: '',
    Fecha_Toma_Hemoglobina: '',
    Hemoglobina: '',
    Fecha_Toma_Glicemia_Basalstring: '',
    Fecha_Creatinina: '',
    Creatinina: 0,
    Fecha_Hemoglobina_Glicosilada: '',
    Hemoglobina_Glicosilada: 0,
    Fecha_Toma_Microalbuminuria: '',
    Fecha_Toma_HDL: '',
    Fecha_Toma_Baciloscopia_Diagnostico: '',
    Baciloscopia_Diagnostico: 0,
    Tratamiento_Hipotiroidismo_Congenito: 0,
    Tratamiento_Sifilis_gestacional: 0,
    Tratamiento_Sifilis_Congenita: 0,
    Tratamiento_Lepra: 0,
    Fecha_Terminacion_Tratamiento_para_Leishmaniasis: '',
  }

  constructor(private res4505service: Res4505Service,) { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target)
    if (target.files.length !== 1) throw new Error("no puede usar multiples archivos")
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
     
      
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      //console.log(this.data)
      this.data.forEach(element => {
        console.log(element[0])
      });
    }
    reader.readAsBinaryString(target.files[0]);
  }

  onphotoselected(event: HtmlInputEvent): void {
    let file: File;
    if (event.target.files && event.target.files[0]) {
      file = <File>event.target.files[0];
    
    }
  }
  cargar4505() {

    this.data2.PKId = 1;
    this.data.forEach(element => {
      this.data2.Tipo_Registro = element[0]
      this.data2.Consecutivo_registro = element[1]
      this.data2.Coidigohabilitacionips_primaria = element[2]
      this.data2.Tipoid_usuario = element[3]
      this.data2.Numero_Identificacion = element[4]
      this.data2.PrimerApellido_usuario = element[5]
      this.data2.SegundoApellido_usuario = element[6]
      this.data2.PrimerNombre_usuario = element[7]
      this.data2.SegundoNombre_usuario = element[8]
      this.data2.Fecha_nacimiento = element[9]
      this.data2.Sexo = element[10]
      this.data2.Codigo_pertenenciaetnica = element[11]
      this.data2.Codigo_ocupacion = element[12]
      this.data2.Codigo_niveleducativo = element[13]
      this.data2.Gestacion = element[14]
      this.data2.Sifilisgestacional_congenita = element[15]
      this.data2.Hipertension_Inducida_por_la_Gestacion = element[16]
      this.data2.Hipotiroidismo_Congenito = element[17]
      this.data2.Sintomatico_Respiratorio = element[18]
      this.data2.Tuberculosis_Multidrogoresistente = element[19]
      this.data2.Lepra = element[20]
      this.data2.Obesidad_Desnutricion_Proteico_Calorica = element[21]
      this.data2.Victima_Maltrato = element[22]
      this.data2.Victima_Violencia_Sexual = element[23]
      this.data2.Infecciones_TrasmisionSexual = element[24]
      this.data2.Enfermedad_Mental = element[25]
      this.data2.Cancer_Cervix = element[26]
      this.data2.Cancer_Seno = element[27]
      this.data2.Fluorosis_Dental = element[28]
      this.data2.Fecha_Peso = element[29]
      this.data2.Peso_Kilogramos = element[30]
      this.data2.Fecha_Talla = element[31]
      this.data2.Talla_Centimetros = element[32]
      this.data2.Fecha_ProbableParto = element[33]
      this.data2.Edad_GestacionalNacer = element[34]
      this.data2.BCG = element[35]
      this.data2.Hepatitis_B_menores1ano = element[36]
      this.data2.Pentavalente = element[37]
      this.data2.Polio = element[38]
      this.data2.DPT_menores5anos = element[39]
      this.data2.Rotavirus = element[40]
      this.data2.Neumococo = element[41]
      this.data2.Influenza_Ninos = element[42]
      this.data2.Fiebre_Amarillaninosde1ano = element[43]
      this.data2.HepatitisA = element[44]
      this.data2.Triple_ViralNinos = element[45]
      this.data2.Virus_Papiloma_Humano = element[46]
      this.data2.TDTTMujeresEdad_Fertil_15_49_anos = element[47]
      this.data2.ControlPlaca_Bacteriana = element[48]
      this.data2.Fecha_atencion_parto_o_cesarea = element[49]
      this.data2.Fecha_salida_atencion_parto_cesarea = element[50]
      this.data2.Fecha_consejeria_Lactancia_Materna = element[51]
      this.data2.Control_Recien_Nacido = element[52]
      this.data2.Planificacion_Familiar_Primeravez = element[53]
      this.data2.Suministro_Metodo_Anticonceptivo = element[54]
      this.data2.Fecha_Suministro_Metodo_Anticonceptivo = element[55]
      this.data2.ControlPrenatal_Primeravez = element[56]
      this.data2.Control_Prenatal = element[57]
      this.data2.ultimo_Control_Prenatal = element[58]
      this.data2.Suministroacido_Folico_ultimo_Control_Prenatal = element[59]
      this.data2.SuministroSulfato_Ferroso_ultimoControlPrenatal = element[60]
      this.data2.Suministro_CarbonatoCalcio_ltimoControlPrenatal = element[61]
      this.data2.Valoracion_Agudeza_Visual = element[62]
      this.data2.Consulta_por_Oftalmologia = element[63]
      this.data2.Fecha_Diagnostico_Desnutricion_Proteico_Calorica = element[64]
      this.data2.Consulta_Mujer_o_Menor_Victima_Maltrato = element[65]
      this.data2.Consulta_Victimas_Violencia_Sexual = element[66]
      this.data2.Consulta_Nutricion = element[67]
      this.data2.Consulta_de_Psicologia = element[68]
      this.data2.Consulta_Crecimiento_y_DesarrolloPrimeravez = element[69]
      this.data2.Suministro_Sulfato_Ferroso_ultima_Consulta_del_Menor_10_anos = element[70]
      this.data2.Suministro_Vitamina_A_ultima_Consulta_Menor_10_anos = element[71]
      this.data2.Consulta_JovenPrimeravez = element[72]
      this.data2.Consulta_AdultoPrimeravez = element[73]
      this.data2.Preservativos_entregados_a_pacientes_con_ITS = element[74]
      this.data2.Asesoria_Pre_test_Elisa_para_VIH = element[75]
      this.data2.Asesoria_Pos_test_Elisa_para_VIH = element[76]
      this.data2.PCAEDCBAIC = element[77]
      this.data2.Fecha_Antigeno_Superficie_Hepatitis_B_en_Gestantes = element[78]
      this.data2.Resultado_Antigeno_Superficie_Hepatitis_B_en_Gestantes = element[79]
      this.data2.Fecha_Serologia_para_Sifilis = element[80]
      this.data2.Resultado_Serologia_para_Sifilis = element[81]
      this.data2.Fecha_Toma_Elisa_para_VIH = element[82]
      this.data2.Resultado_Elisa_para_VIH = element[83]
      this.data2.Fecha_TSH_Neonatal = element[84]
      this.data2.Resultado_TSH_Neonatal = element[85]
      this.data2.Tamizaje_Cancer_Cuello_Uterino = element[86]
      this.data2.Citologia_Cervico_uterina = element[87]
      this.data2.Citologia_Cervico_uterina_Resultados_segun_Bethesda = element[88]
      this.data2.Calidad_Muestra_Citologia_Cervicouterina = element[89]
      this.data2.Codigo_habilitacion_IPS_donde_se_toma_Citologia_Cervicouterina = element[90]
      this.data2.Fecha_Colposcopia = element[91]
      this.data2.Codigo_habilitacion_IPS_donde_se_toma_Colposcopia = element[92]
      this.data2.Fecha_biopsia_cervical = element[93]
      this.data2.Resultado_Biopsia_Cervical = element[94]
      this.data2.Codigo_habilitacion_IPS_donde_se_toma_biopsia = element[95]
      this.data2.Fecha_Mamografia = element[96]
      this.data2.Resultado_Mamografia = element[97]
      this.data2.Codigo_habilitacion_IPS_donde_se_toma_Mamografia = element[98]
      this.data2.Fecha_Toma_Biopsia_Seno_por_BACAF = element[99]
      this.data2.Fecha_Resultado_Biopsia_Seno_por_BACAF = element[100]
      this.data2.Biopsia_Seno_por_BACAF = element[101]
      this.data2.Codigo_habilitacion_IPS_donde_se_toma_Biopsia_Seno_por_BACAF = element[102]
      this.data2.Fecha_Toma_Hemoglobina = element[103]
      this.data2.Hemoglobina = element[104]
      this.data2.Fecha_Toma_Glicemia_Basalstring = element[105]
      this.data2.Fecha_Creatinina = element[106]
      this.data2.Creatinina = element[107]
      this.data2.Fecha_Hemoglobina_Glicosilada = element[108]
      this.data2.Hemoglobina_Glicosilada = element[109]
      this.data2.Fecha_Toma_Microalbuminuria = element[110]
      this.data2.Fecha_Toma_HDL = element[111]
      this.data2.Fecha_Toma_Baciloscopia_Diagnostico = element[112]
      this.data2.Baciloscopia_Diagnostico = element[113]
      this.data2.Tratamiento_Hipotiroidismo_Congenito = element[114]
      this.data2.Tratamiento_Sifilis_gestacional = element[115]
      this.data2.Tratamiento_Sifilis_Congenita = element[116]
      this.data2.Tratamiento_Lepra = element[117]
      this.data2.Fecha_Terminacion_Tratamiento_para_Leishmaniasis = element[118]
    });

    this.res4505service.Guardar4505(this.data2).subscribe(res => {
      console.log(res)
    })
  }

  cargarexcel() {
   //this.enviando();
   var n = this.data.length
    var cont = 0
   
    this.data.forEach(element => {
      delete this.excel.PKId
      this.excel.Dato1 = element[0],
        this.excel.Dato2 = element[1]
      this.excel.Dato3 = element[2]
      this.excel.Dato4 = element[3]
      console.log(this.excel)
 
    this.res4505service.Guardarexcel(this.excel).subscribe(res => {
    console.log(res)
    cont++
      if (cont == n) {
        Swal.fire({
          title: 'Almacenado!',
          text: 'Datos almacenados con exito.',
          icon: 'success',
          allowOutsideClick: false
        }

        ).then((result) => {
          if (result.value) {

          }
        })
      }
    })
  });
  

  }


  enviando() {
    // this.spinner.show(undefined, { fullScreen: true });

    let timerInterval
    Swal.fire({
      icon: 'warning',
      showConfirmButton: false,
      title: 'Validando información, espere por favor.',
      allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA

      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              // b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },

    })
  }

}
