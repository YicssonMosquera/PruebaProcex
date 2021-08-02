import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'
@Injectable({
  providedIn: 'root'
})
export class OpcionesListasErcService {
  API_URI = keys.api.API_URI + '/opcionesListasERC';
  constructor(private http: HttpClient) { }

  cargarTipoDocumento5() {
    return this.http.get(`${this.API_URI}/C4_CAMPO_5`)
  }
  cargarSexo8() {
    return this.http.get(`${this.API_URI}/C7_CAMPO_8`)
  }
  cargarRegimenAfilicacion9() {
    return this.http.get(`${this.API_URI}/C8_CAMPO_9`)
  }
  cargarPertenenciaEtnica11() {
    return this.http.get(`${this.API_URI}/C10_CAMPO_11`)
  }
  cargarGrupopoblacional12() {
    return this.http.get(`${this.API_URI}/C11_CAMPO_12`)
  }
  cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18() {
    return this.http.get(`${this.API_URI}/C17_CAMPO_18`)
  }
  cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20() {
    return this.http.get(`${this.API_URI}/C20_CAMPO_20`)
  }
  cargarEtiologíadelaERC22() {
    return this.http.get(`${this.API_URI}/C23_CAMPO_22`)
  }
  cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36() {
    return this.http.get(`${this.API_URI}/C45_CAMPO_36`)
  }
  cargarElusuariorecibeAntagonista37() {
    return this.http.get(`${this.API_URI}/C46_CAMPO_37`)
  }
  cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38() {
    return this.http.get(`${this.API_URI}/C47_CAMPO_38`)
  }
  cargarEstadioERCEnfermedad39() {
    return this.http.get(`${this.API_URI}/C48_CAMPO_39`)
  }
  cargarLapersonaencuentraprogramatenciónERC41() {
    return this.http.get(`${this.API_URI}/C50_CAMPO_41`)
  }
  cargarModoInicioTerapiaReemplazoRenal43() {
    return this.http.get(`${this.API_URI}/C52_CAMPO_43`)
  }
  cargarHemodiálisis46() {
    return this.http.get(`${this.API_URI}/C55_CAMPO_46`)
  }
  cargarCostototalhemodiálisisduranteperíodoreporte48() {
    return this.http.get(`${this.API_URI}/C57_CAMPO_48`)
  }
  cargarVacunaHepatitis54() {
    return this.http.get(`${this.API_URI}/C63_CAMPO_54`)
  }
  cargarTerapiaDialíticaERCestadio57() {
    return this.http.get(`${this.API_URI}/C66_CAMPO_57`)
  }
  cargarÚltimavaloraciónclínicapornefrología62() {
    return this.http.get(`${this.API_URI}/C71_CAMPO_62`)
  }
  cargarSereportócánceractivoúltimos12mese62_1() {
    return this.http.get(`${this.API_URI}/C72_CAMPO_62_1`)
  }
  cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2() {
    return this.http.get(`${this.API_URI}/C73_CAMPO_62_2`)
  }
  cargarSereportocomocontraindicaciónparatransplanterenal62_3() {
    return this.http.get(`${this.API_URI}/C74_CAMPO_62_3`)
  }
  cargarSereportocontraindicacióntransplanterenal62_4() {
    return this.http.get(`${this.API_URI}/C75_CAMPO_62_4`)
  }
  cargarSereportocontraindicacióntransplanterena62_5() {
    return this.http.get(`${this.API_URI}/C76_CAMPO_62_5`)
  }
  cargarSereportoenfermedadcardiaca62_6() {
    return this.http.get(`${this.API_URI}/C77_CAMPO_62_6`)
  }
  cargarSereportoinfecciónVIH62_7() {
    return this.http.get(`${this.API_URI}/C78_CAMPO_62_7 `)
  }
  cargarSereportoinfecciónVIH62_8() {
    return this.http.get(`${this.API_URI}/C79_CAMPO_62_8`)
  }
  cargarSereportocomocontraindicación62_9() {
    return this.http.get(`${this.API_URI}/C80_CAMPO_62_9`)
  }
  cargarSereportocomocontraindicación62_10() {
    return this.http.get(`${this.API_URI}/C81_CAMPO_62_10`)
  }
  cargarSereportocomocontraindicación62_11() {
    return this.http.get(`${this.API_URI}/C82_CAMPO_62_11`)
  }
  cargarElusuarioharecibidotrasplanterenal64() {
    return this.http.get(`${this.API_URI}/C85_CAMPO_64`)
  }
  cargarTipodedonante67() {
    return this.http.get(`${this.API_URI}/C88_CAMPO_67`)
  }
  cargarElusuariohapresentadoalgunacomplicación69() {
    return this.http.get(`${this.API_URI}/C90_CAMPO_69`)
  }
  cargarEnalgunmomentodesdeelultimoreporte70_1() {
    return this.http.get(`${this.API_URI}/C99_CAMPO_70_1`)
  }
  cargarEnalgunmomentodesdeelultimoreporte70_2() {
    return this.http.get(`${this.API_URI}/C100_CAMPO_70_2`)
  }
  cargarEnalgunmomentodesdeelultimoreporte70_3() {
    return this.http.get(`${this.API_URI}/C101_CAMPO_70_3`)
  }
  cargarEnalgunmomentodesdeelultimoreporte70_4() {
    return this.http.get(`${this.API_URI}/C102_CAMPO_70_4`)
  }
  cargarEnalgunmomentodesdeelultimoreporte70_5() {
    return this.http.get(`${this.API_URI}/C103_CAMPO_70_5`)
  }
  cargarEnalgunmomentodesdeelultimoreporte70_6() {
    return this.http.get(`${this.API_URI}/C104_CAMPO_70_6`)
  }
  cargarNovedadconrespectoalreporteanterior79() {
    return this.http.get(`${this.API_URI}/C116_CAMPO_79`)
  }
  cargarCausadeMuerte80() {
    return this.http.get(`${this.API_URI}/C117_CAMPO_80`)
  }

}
