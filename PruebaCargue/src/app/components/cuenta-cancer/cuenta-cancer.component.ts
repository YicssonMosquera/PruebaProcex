import { Component, OnInit } from '@angular/core';
import { HemofiliaService } from 'src/app/services/hemofilia/hemofilia.service';
import { OpcionesListaService } from 'src/app/services/opcionesLista/opciones-lista.service';
@Component({
  selector: 'app-cuenta-cancer',
  templateUrl: './cuenta-cancer.component.html',
  styleUrls: ['./cuenta-cancer.component.css']
})
export class CuentaCancerComponent implements OnInit {
  horas: any
  minutos: any
  tipodocumento: any
  Sexo: any
  RegimenAF: any
  CEtnica: any
  C2_CAMPO_3
  C21_CAMPO_22
  C22_CAMPO_23
  C25_CAMPO_26
  C30_CAMPO_31
  C31_CAMPO_32
  C32_CAMPO_33
  C33_CAMPO_34
  C34_CAMPO_35
  C35_CAMPO_36
  C36_CAMPO_37
  C37_CAMPO_38
  C38_CAMPO_39
  C40_CAMPO_41
  C45_CAMPO_45_2
  C46_CAMPO_45_3
  C46_CAMPO_45_4
  C46_CAMPO_45_5
  C50_CAMPO_45_7
  C51_CAMPO_45_8
  C52_CAMPO_46_1
  C53_CAMPO_46_2
  C54_CAMPO_46_3
  C55_CAMPO_46_4
  C56_CAMPO_46_5
  C57_CAMPO_46_6
  C58_CAMPO_46_7
  C59_CAMPO_46_8
  C60_CAMPO_46_9
  C61_CAMPO_46_10
  C62_CAMPO_47_1
  C63_CAMPO_47_2
  C64_CAMPO_47_3
  C65_CAMPO_47_4
  C66_CAMPO_47_5
  C67_CAMPO_47_6
  C68_CAMPO_47_7
  C69_CAMPO_47_8
  C70_CAMPO_47_9
  C71_CAMPO_47_10


  isReadonly = true;
  constructor(private hemofiliaservice: HemofiliaService, private opcionesListaService: OpcionesListaService) { }

  ngOnInit(): void {
    this.Funcionesdecarga();
  }

  Funcionesdecarga() {
    this.Cargartipodocumento();
    this.CargarSexo();
    this.CargarRegimenafiliacion();
    this.CargarcodigoPertenenciaetnica();
    this.cargarGrupoPoblacional3();
    this.cargarRadiografiaManosDiagnóstico22();
    this.cargarRadiografiaPiesDiagnóstico23();
    this.cargarFactorReumatoideoInicial26();
    this.cargarParcialOrinaInicial31();
    this.cargarALTInicial32();
    this.AntiCCPDiagnóstico33();
    this.cargarHTADiagnóstico34();
    this.DMDiagnóstico35();
    this.cargarECVDiagnóstico36();
    this.cargarERCDiagnóstico37();
    this.cargarOsteoporosisDiagnóstico38();
    this.cargarSindromeSjogrenDiagnóstico39();
    this.cargarProfesionalRealizóPrimerDAS2841();
    this.cargarAnalgesicosNoOpioidesInicio45_2();
    this.cargarAnalgesicosInicio145_3();
    this.cargarAINESinicio45_4();
    this.cargarCorticoidesInicio45_5();
    this.cargarTamizajeTBantesinicioDMARD145_7();
    this.cargarAntecedentelinfomaantesinicioDMARD45_8();
    this.cargarAzatioprina46_1();
    this.cargarCiclosporina46_2();
    this.cargarCiclofosfamida46_3();
    this.cargarCloroquina46_4();
    this.cargarDpenicilaimina46_5();
    this.cargarEtanercept46_6();
    this.cargarLeflunomida46_7();
    this.cargarMetotrexate46_8();
    this.cargarRituximab46_9();
    this.cargarSulfasalazina46_10();
    this.cargarAbatacept47_1();
    this.cargarAdalimumab_47_2();
    this.cargarCertolizumab47_3();
    this.cargarGolimumab47_4();
    this.cargarHidroxicloroquina47_5();
    this.cargarInfliximab47_6();
    this.cargarSalesdeoro47_7();
    this.cargarTocilizumab47_8();
    this.cargarTofacitinib47_9();
    this.cargarAnakinra47_10();

  }
  Cargartipodocumento() {
    this.hemofiliaservice.CargarTipodocumento().subscribe(res => {
      this.tipodocumento = res;
    })
  }

  CargarSexo() {
    this.hemofiliaservice.CargarSexo().subscribe(res => {
      this.Sexo = res;
    })
  }

  CargarRegimenafiliacion() {
    this.hemofiliaservice.CargarRegimenAfiliacion().subscribe(res => {
      this.RegimenAF = res;
    })
  }

  CargarcodigoPertenenciaetnica() {
    this.hemofiliaservice.CargarcodigoPertenenciaetnica().subscribe(res => {
      this.CEtnica = res;
    })
  }

  cargarGrupoPoblacional3() {
    this.opcionesListaService.cargarGrupoPoblacional3().subscribe(res => {
      this.C2_CAMPO_3 = res;
    })
  }
  cargarRadiografiaManosDiagnóstico22() {
    this.opcionesListaService.cargarRadiografiaManosDiagnóstico22().subscribe(res => {
      this.C21_CAMPO_22 = res;
    })
  }
  cargarRadiografiaPiesDiagnóstico23() {
    this.opcionesListaService.cargarRadiografiaPiesDiagnóstico23().subscribe(res => {
      this.C22_CAMPO_23 = res;
    })
  }
  cargarFactorReumatoideoInicial26() {
    this.opcionesListaService.cargarFactorReumatoideoInicial26().subscribe(res => {
      this.C25_CAMPO_26 = res;
    })
  }
  cargarParcialOrinaInicial31() {
    this.opcionesListaService.cargarParcialOrinaInicial31().subscribe(res => {
      this.C30_CAMPO_31 = res;
    })
  }
  cargarALTInicial32() {
    this.opcionesListaService.cargarALTInicial32().subscribe(res => {
      this.C31_CAMPO_32 = res;
    })
  }
  AntiCCPDiagnóstico33() {
    this.opcionesListaService.AntiCCPDiagnóstico33().subscribe(res => {
      this.C32_CAMPO_33 = res;
    })
  }
  cargarHTADiagnóstico34() {
    this.opcionesListaService.cargarHTADiagnóstico34().subscribe(res => {
      this.C33_CAMPO_34 = res;
    })
  }
  DMDiagnóstico35() {
    this.opcionesListaService.DMDiagnóstico35().subscribe(res => {
      this.C34_CAMPO_35 = res;
    })
  }
  cargarECVDiagnóstico36() {
    this.opcionesListaService.cargarECVDiagnóstico36().subscribe(res => {
      this.C35_CAMPO_36 = res;
    })
  }
  cargarERCDiagnóstico37() {
    this.opcionesListaService.cargarERCDiagnóstico37().subscribe(res => {
      this.C36_CAMPO_37 = res;
    })
  }
  cargarOsteoporosisDiagnóstico38() {
    this.opcionesListaService.cargarOsteoporosisDiagnóstico38().subscribe(res => {
      this.C37_CAMPO_38 = res;
    })
  }
  cargarSindromeSjogrenDiagnóstico39() {
    this.opcionesListaService.cargarSindromeSjogrenDiagnóstico39().subscribe(res => {
      this.C38_CAMPO_39 = res;
    })
  }
  cargarProfesionalRealizóPrimerDAS2841() {
    this.opcionesListaService.cargarProfesionalRealizóPrimerDAS2841().subscribe(res => {
      this.C40_CAMPO_41 = res;
    })
  }
  cargarAnalgesicosNoOpioidesInicio45_2() {
    this.opcionesListaService.cargarAnalgesicosNoOpioidesInicio45_2().subscribe(res => {
      this.C45_CAMPO_45_2 = res;
    })
  }
  cargarAnalgesicosInicio145_3() {
    this.opcionesListaService.cargarAnalgesicosInicio145_3().subscribe(res => {
      this.C46_CAMPO_45_3 = res;
    })
  }
  cargarAINESinicio45_4() {
    this.opcionesListaService.cargarAINESinicio45_4().subscribe(res => {
      this.C46_CAMPO_45_4 = res;
    })
  }
  cargarCorticoidesInicio45_5() {
    this.opcionesListaService.cargarCorticoidesInicio45_5().subscribe(res => {
      this.C46_CAMPO_45_5 = res;
    })
  }
  cargarTamizajeTBantesinicioDMARD145_7() {
    this.opcionesListaService.cargarTamizajeTBantesinicioDMARD145_7().subscribe(res => {
      this.C50_CAMPO_45_7 = res;
    })
  }
  cargarAntecedentelinfomaantesinicioDMARD45_8() {
    this.opcionesListaService.cargarAntecedentelinfomaantesinicioDMARD45_8().subscribe(res => {
      this.C51_CAMPO_45_8 = res;
    })
  }
  cargarAzatioprina46_1() {
    this.opcionesListaService.cargarAzatioprina46_1().subscribe(res => {
      this.C52_CAMPO_46_1 = res;
    })
  }
  cargarCiclosporina46_2() {
    this.opcionesListaService.cargarCiclosporina46_2().subscribe(res => {
      this.C53_CAMPO_46_2 = res;
    })
  }
  cargarCiclofosfamida46_3() {
    this.opcionesListaService.cargarCiclofosfamida46_3().subscribe(res => {
      this.C54_CAMPO_46_3 = res;
    })
  }
  cargarCloroquina46_4() {
    this.opcionesListaService.cargarCloroquina46_4().subscribe(res => {
      this.C55_CAMPO_46_4 = res;
    })
  }
  cargarDpenicilaimina46_5() {
    this.opcionesListaService.cargarDpenicilaimina46_5().subscribe(res => {
      this.C56_CAMPO_46_5 = res;
    })
  }
  cargarEtanercept46_6() {
    this.opcionesListaService.cargarEtanercept46_6().subscribe(res => {
      this.C57_CAMPO_46_6 = res;
    })
  }
  cargarLeflunomida46_7() {
    this.opcionesListaService.cargarLeflunomida46_7().subscribe(res => {
      this.C58_CAMPO_46_7 = res;
    })
  }
  cargarMetotrexate46_8() {
    this.opcionesListaService.cargarMetotrexate46_8().subscribe(res => {
      this.C59_CAMPO_46_8 = res;
    })
  }
  cargarRituximab46_9() {
    this.opcionesListaService.cargarRituximab46_9().subscribe(res => {
      this.C60_CAMPO_46_9 = res;
    })
  }
  cargarSulfasalazina46_10() {
    this.opcionesListaService.cargarSulfasalazina46_10().subscribe(res => {
      this.C61_CAMPO_46_10 = res;
    })
  }
  cargarAbatacept47_1() {
    this.opcionesListaService.cargarAbatacept47_1().subscribe(res => {
      this.C62_CAMPO_47_1 = res;
    })
  }
  cargarAdalimumab_47_2() {
    this.opcionesListaService.cargarAdalimumab_47_2().subscribe(res => {
      this.C63_CAMPO_47_2 = res;
    })
  }
  cargarCertolizumab47_3() {
    this.opcionesListaService.cargarCertolizumab47_3().subscribe(res => {
      this.C64_CAMPO_47_3 = res;
    })
  }
  cargarGolimumab47_4() {
    this.opcionesListaService.cargarGolimumab47_4().subscribe(res => {
      this.C65_CAMPO_47_4 = res;
    })
  }
  cargarHidroxicloroquina47_5() {
    this.opcionesListaService.cargarHidroxicloroquina47_5().subscribe(res => {
      this.C66_CAMPO_47_5 = res;
    })
  }
  cargarInfliximab47_6() {
    this.opcionesListaService.cargarInfliximab47_6().subscribe(res => {
      this.C67_CAMPO_47_6 = res;
    })
  }
  cargarSalesdeoro47_7() {
    this.opcionesListaService.cargarSalesdeoro47_7().subscribe(res => {
      this.C68_CAMPO_47_7 = res;
    })
  }
  cargarTocilizumab47_8() {
    this.opcionesListaService.cargarTocilizumab47_8().subscribe(res => {
      this.C69_CAMPO_47_8 = res;
    })
  }
  cargarTofacitinib47_9() {
    this.opcionesListaService.cargarTofacitinib47_9().subscribe(res => {
      this.C70_CAMPO_47_9 = res;
    })
  }
  cargarAnakinra47_10() {
    this.opcionesListaService.cargarAnakinra47_10().subscribe(res => {
      this.C71_CAMPO_47_10 = res;
    })
  }





}
