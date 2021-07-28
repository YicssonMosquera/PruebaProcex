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
  // cargarEtanercept46_6() {
  //   return this.http.get(`${this.API_URI}/C71_CAMPO_47_10`)
  // }


}
