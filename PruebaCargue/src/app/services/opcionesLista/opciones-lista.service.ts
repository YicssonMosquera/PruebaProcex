import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})
export class OpcionesListaService {
  API_URI = keys.api.API_URI + '/opcionesLista';

  constructor(private http: HttpClient) { }

  cargarGrupoPoblacional3() {
    return this.http.get(`${this.API_URI}/C2_CAMPO_3`)
  }
  cargarRadiografiaManosDiagnóstico22() {
    return this.http.get(`${this.API_URI}/C21_CAMPO_22`)
  }
  cargarRadiografiaPiesDiagnóstico23() {
    return this.http.get(`${this.API_URI}/C22_CAMPO_23`)
  }
  cargarFactorReumatoideoInicial26() {
    return this.http.get(`${this.API_URI}/C25_CAMPO_26`)
  }
  cargarParcialOrinaInicial31() {
    return this.http.get(`${this.API_URI}/C30_CAMPO_31`)
  }
  cargarALTInicial32() {
    return this.http.get(`${this.API_URI}/C31_CAMPO_32`)
  }
  AntiCCPDiagnóstico33() {
    return this.http.get(`${this.API_URI}/C32_CAMPO_33`)
  }
  cargarHTADiagnóstico34() {
    return this.http.get(`${this.API_URI}/C33_CAMPO_34`)
  }
  DMDiagnóstico35() {
    return this.http.get(`${this.API_URI}/C34_CAMPO_35`)
  }
  cargarECVDiagnóstico36() {
    return this.http.get(`${this.API_URI}/C35_CAMPO_36`)
  }
  cargarERCDiagnóstico37() {
    return this.http.get(`${this.API_URI}/C36_CAMPO_37`)
  }
  cargarOsteoporosisDiagnóstico38() {
    return this.http.get(`${this.API_URI}/C37_CAMPO_38`)
  }
  cargarSindromeSjogrenDiagnóstico39() {
    return this.http.get(`${this.API_URI}/C38_CAMPO_39`)
  }
  cargarProfesionalRealizóPrimerDAS2841() {
    return this.http.get(`${this.API_URI}/C40_CAMPO_41`)
  }
  cargarAnalgesicosNoOpioidesInicio45_2() {
    return this.http.get(`${this.API_URI}/C45_CAMPO_45_2`)
  }
  cargarAnalgesicosInicio145_3() {
    return this.http.get(`${this.API_URI}/C46_CAMPO_45_3`)
  }
  cargarAINESinicio45_4() {
    return this.http.get(`${this.API_URI}/C46_CAMPO_45_4`)
  }
  cargarCorticoidesInicio45_5() {
    return this.http.get(`${this.API_URI}/C46_CAMPO_45_5`)
  }
  cargarTamizajeTBantesinicioDMARD145_7() {
    return this.http.get(`${this.API_URI}/C50_CAMPO_45_7`)
  }
  cargarAntecedentelinfomaantesinicioDMARD45_8() {
    return this.http.get(`${this.API_URI}/C51_CAMPO_45_8`)
  }
  cargarAzatioprina46_1() {
    return this.http.get(`${this.API_URI}/C52_CAMPO_46_1`)
  }
  cargarCiclosporina46_2() {
    return this.http.get(`${this.API_URI}/C53_CAMPO_46_2`)
  }

  cargarCiclofosfamida46_3() {
    return this.http.get(`${this.API_URI}/C54_CAMPO_46_3`)
  }
  cargarCloroquina46_4() {
    return this.http.get(`${this.API_URI}/C55_CAMPO_46_4`)
  }
  cargarDpenicilaimina46_5() {
    return this.http.get(`${this.API_URI}/C56_CAMPO_46_5`)
  }
  cargarEtanercept46_6() {
    return this.http.get(`${this.API_URI}/C57_CAMPO_46_6`)
  }
  cargarLeflunomida46_7() {
    return this.http.get(`${this.API_URI}/C58_CAMPO_46_7`)
  }
  cargarMetotrexate46_8() {
    return this.http.get(`${this.API_URI}/C59_CAMPO_46_8`)
  }
  cargarRituximab46_9() {
    return this.http.get(`${this.API_URI}/C60_CAMPO_46_9`)
  }
  cargarSulfasalazina46_10() {
    return this.http.get(`${this.API_URI}/C61_CAMPO_46_10`)
  }
  cargarAbatacept47_1() {
    return this.http.get(`${this.API_URI}/C62_CAMPO_47_1`)
  }
  cargarAdalimumab_47_2() {
    return this.http.get(`${this.API_URI}/C63_CAMPO_47_2`)
  }
  cargarCertolizumab47_3() {
    return this.http.get(`${this.API_URI}/C64_CAMPO_47_3`)
  }
  cargarGolimumab47_4() {
    return this.http.get(`${this.API_URI}/C65_CAMPO_47_4`)
  }
  cargarHidroxicloroquina47_5() {
    return this.http.get(`${this.API_URI}/C66_CAMPO_47_5`)
  }
  cargarInfliximab47_6() {
    return this.http.get(`${this.API_URI}/C67_CAMPO_47_6`)
  }
  cargarSalesdeoro47_7() {
    return this.http.get(`${this.API_URI}/C68_CAMPO_47_7`)
  }
  cargarTocilizumab47_8() {
    return this.http.get(`${this.API_URI}/C69_CAMPO_47_8`)
  }
  cargarTofacitinib47_9() {
    return this.http.get(`${this.API_URI}/C70_CAMPO_47_9`)
  }
  cargarAnakinra47_10() {
    return this.http.get(`${this.API_URI}/C71_CAMPO_47_10`)
  }

  cargarRadiografiademanos49(){
    return this.http.get(`${this.API_URI}/C77_CAMPO_49`)
  }
  cargarRadiografiadepies50(){
    return this.http.get(`${this.API_URI}/C78_CAMPO_50`)
  }
  cargarParcialdeOrinaúltimosemestre57(){
    return this.http.get(`${this.API_URI}/C85_CAMPO_57`)
  }
  cargarALTultimosemestre58(){
    return this.http.get(`${this.API_URI}/C86_CAMPO_58`)
  }
  cargarHTAactual59(){
    return this.http.get(`${this.API_URI}/C87_CAMPO_59`)
  }
  cargarDMactua60(){
    return this.http.get(`${this.API_URI}/C88_CAMPO_60`)
  }
  cargarECVactual61(){
    return this.http.get(`${this.API_URI}/C89_CAMPO_61`)
  }
  cargarERCactual62(){
    return this.http.get(`${this.API_URI}/C90_CAMPO_62`)
  }
  cargarOsteoporosisactual63(){
    return this.http.get(`${this.API_URI}/C91_CAMPO_63`)
  }
  cargarSindromeSjogrenactual64(){
    return this.http.get(`${this.API_URI}/C92_CAMPO_64`)
  }
  cargarProfesionalrealizoultimoDAS28_66(){
    return this.http.get(`${this.API_URI}/C94_CAMPO_66`)
  }
  cargarEstadoactividadactualdelaARegúnDAS28_68(){
    return this.http.get(`${this.API_URI}/C96_CAMPO_68`)
  }
  cargarAnalgesicosNoOpioides71_1(){
    return this.http.get(`${this.API_URI}/C99_CAMPO_71_1`)
  }
  cargarAnalgesicosOpioides71_2(){
    return this.http.get(`${this.API_URI}/C100_CAMPO_71_2`)
  }
  cargarAINES71_3(){
    return this.http.get(`${this.API_URI}/C101_CAMPO_71_3`)
  }
  cargarCorticoides71_4(){
    return this.http.get(`${this.API_URI}/C102_CAMPO_71_4`)
  }
  cargarCalcio71_6(){
    return this.http.get(`${this.API_URI}/C104_CAMPO_71_6`)
  }
  cargarVitaminaD71_7(){
    return this.http.get(`${this.API_URI}/C105_CAMPO_71_7`)
  }
  cargarAzatioprina73_1(){
    return this.http.get(`${this.API_URI}/C107_CAMPO_73_1`)
  }
  cargarCiclosporina73_2(){
    return this.http.get(`${this.API_URI}/C108_CAMPO_73_2`)
  }
  cargarCiclofosfamida73_3(){
    return this.http.get(`${this.API_URI}/C109_CAMPO_73_3`)
  }
  cargarCorticoides73_4(){
    return this.http.get(`${this.API_URI}/C110_CAMPO_73_4`)
  }
  cargarDpenicilaimina73_5(){
    return this.http.get(`${this.API_URI}/C111_CAMPO_73_5`)
  }
  cargarEtanercept73_6(){
    return this.http.get(`${this.API_URI}/C112_CAMPO_73_6`)
  }
  cargarLeflunomida73_7(){
    return this.http.get(`${this.API_URI}/C113_CAMPO_73_7`)
  }
  cargarMetotrexate73_8(){
    return this.http.get(`${this.API_URI}/C114_CAMPO_73_8`)
  }
  cargarRituximab73_9(){
    return this.http.get(`${this.API_URI}/C115_CAMPO_73_9`)
  }
  cargarSulfasalazina73_10(){
    return this.http.get(`${this.API_URI}/C116_CAMPO_73_10`)
  }
  cargarAbatacept74_1(){
    return this.http.get(`${this.API_URI}/C117_CAMPO_74_1`)
  }
  cargarAdalimumab74_2(){
    return this.http.get(`${this.API_URI}/C118_CAMPO_74_2`)
  }
  cargarCertolizumab74_3(){
    return this.http.get(`${this.API_URI}/C119_CAMPO_74_3`)
  }
  cargarGolimumab74_4(){
    return this.http.get(`${this.API_URI}/C120_CAMPO_74_4`)
  }
  cargaHidroxicloroquina74_5(){
    return this.http.get(`${this.API_URI}/C121_CAMPO_74_5`)
  }
  cargarInfliximab74_6(){
    return this.http.get(`${this.API_URI}/C122_CAMPO_74_6`)
  }
  cargarSalesdeoro74_7(){
    return this.http.get(`${this.API_URI}/C123_CAMPO_74_7`)
  }
  cargarTocilizumab74_8(){
    return this.http.get(`${this.API_URI}/C124_CAMPO_74_8`)
  }
  cargarTofacitinib74_9(){
    return this.http.get(`${this.API_URI}/C125_CAMPO_74_9`)
  }
  cargarAnakinra74_10(){
    return this.http.get(`${this.API_URI}/C126_CAMPO_74_10`)
  }
  cargarReemplazoarticular1porAR575_4(){
    return this.http.get(`${this.API_URI}/C134_CAMPO_75_4`)
  }
  cargarReemplazoarticular2porAR75_5(){
    return this.http.get(`${this.API_URI}/C135_CAMPO_75_5`)
  }
  cargarReemplazoarticular3porAR75_6(){
    return this.http.get(`${this.API_URI}/C136_CAMPO_75_6`)
  }
  cargarReemplazoarticula4porAR75_7(){
    return this.http.get(`${this.API_URI}/C137_CAMPO_75_7`)
  }
  cargarQuienhacelaatencionclinicaparaAR80(){
    return this.http.get(`${this.API_URI}/C142_CAMPO_80`)
  }
  cargarNovedaddelpacienterespectoalreporteanterior81(){
    return this.http.get(`${this.API_URI}/C143_CAMPO_81`)
  }
  cargarCausademuerte85(){
    return this.http.get(`${this.API_URI}/C147_CAMPO_85`)
  }


}
