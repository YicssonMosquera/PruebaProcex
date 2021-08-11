import { Component, OnInit } from '@angular/core';
import { HemofiliaService } from 'src/app/services/hemofilia/hemofilia.service';
import { OpcionesListaService } from 'src/app/services/opcionesLista/opciones-lista.service';
import { CACArtritisService } from 'src/app/services/CAC-Artritis/cac-artritis.service'
import { ARTRITIS } from '../../models/artritis'
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cuenta-cancer-actualizar',
  templateUrl: './cuenta-cancer-actualizar.component.html',
  styleUrls: ['./cuenta-cancer-actualizar.component.css']
})
export class CuentaCancerActualizarComponent implements OnInit {

  ARTRITIS: ARTRITIS = {
    // C0_CAMPO_1: '',
    // C1_CAMPO_2: '',
    // C2_CAMPO_3: '',
    // C3_CAMPO_4: '',
    // C4_CAMPO_5: '',
    // C5_CAMPO_6: '',
    // C6_CAMPO_7: '',
    // C7_CAMPO_8: '',
    // C8_CAMPO_9: '',
    // C9_CAMPO_10: '',
    // C10_CAMPO_11: '',
    // C11_CAMPO_12: '',
    // C12_CAMPO_13: '',
    // C13_CAMPO_14: '',
    // C14_CAMPO_15: '',
    // C15_CAMPO_16: '',
    // C16_CAMPO_17: '',
    // C17_CAMPO_18: '',
    // C18_CAMPO_19: '',
    // C19_CAMPO_20: '',
    // C20_CAMPO_21: '',
    // C21_CAMPO_22: '',
    // C22_CAMPO_23: '',
    // C23_CAMPO_24: '',
    // C24_CAMPO_25: '',
    // C25_CAMPO_26: '',
    // C26_CAMPO_27: '',
    // C27_CAMPO_28: '',
    // C28_CAMPO_29: '',
    // C29_CAMPO_30: '',
    // C30_CAMPO_31: '',
    // C31_CAMPO_32: '',
    // C32_CAMPO_33: '',
    // C33_CAMPO_34: '',
    // C34_CAMPO_35: '',
    // C35_CAMPO_36: '',
    // C36_CAMPO_37: '',
    // C37_CAMPO_38: '',
    // C38_CAMPO_39: '',
    // C39_CAMPO_40: '',
    // C40_CAMPO_41: '',
    // C41_CAMPO_42: '',
    // C42_CAMPO_43: '',
    // C43_CAMPO_44: '',
    // C44_CAMPO_45_1: '',
    // C45_CAMPO_45_2: '',
    // C46_CAMPO_45_3: '',
    // C47_CAMPO_45_4: '',
    // C48_CAMPO_45_5: '',
    // C49_CAMPO_45_6: '',
    // C50_CAMPO_45_7: '',
    // C51_CAMPO_45_8: '',
    // C52_CAMPO_46_1: '',
    // C53_CAMPO_46_2: '',
    // C54_CAMPO_46_3: '',
    // C55_CAMPO_46_4: '',
    // C56_CAMPO_46_5: '',
    // C57_CAMPO_46_6: '',
    // C58_CAMPO_46_7: '',
    // C59_CAMPO_46_8: '',
    // C60_CAMPO_46_9: '',
    // C61_CAMPO_46_10: '',
    // C62_CAMPO_47_1: '',
    // C63_CAMPO_47_2: '',
    // C64_CAMPO_47_3: '',
    // C65_CAMPO_47_4: '',
    // C66_CAMPO_47_5: '',
    // C67_CAMPO_47_6: '',
    // C68_CAMPO_47_7: '',
    // C69_CAMPO_47_8: '',
    // C70_CAMPO_47_9: '',
    // C71_CAMPO_47_10: '',
    // C72_CAMPO_47_11: '',
    // C73_CAMPO_47_12: '',
    // C74_CAMPO_47_13: '',
    // C75_CAMPO_47_14: '',
    // C76_CAMPO_48: '',
    // C77_CAMPO_49: '',
    // C78_CAMPO_50: '',
    // C79_CAMPO_51: '',
    // C80_CAMPO_52: '',
    // C81_CAMPO_53: '',
    // C82_CAMPO_54: '',
    // C83_CAMPO_55: '',
    // C84_CAMPO_56: '',
    // C85_CAMPO_57: '',
    // C86_CAMPO_58: '',
    // C87_CAMPO_59: '',
    // C88_CAMPO_60: '',
    // C89_CAMPO_61: '',
    // C90_CAMPO_62: '',
    // C91_CAMPO_63: '',
    // C92_CAMPO_64: '',
    // C93_CAMPO_65: '',
    // CC94_CAMPO_66: '',
    // C95_CAMPO_67: '',
    // C96_CAMPO_68: '',
    // C97_CAMPO_69: '',
    // C98_CAMPO_70: '',
    // C99_CAMPO_71_1: '',
    // C100_CAMPO_71_2: '',
    // C101_CAMPO_71_3: '',
    // C102_CAMPO_71_4: '',
    // C103_CAMPO_71_5: '',
    // C104_CAMPO_71_6: '',
    // C105_CAMPO_71_7: '',
    // C106_CAMPO_72: '',
    // C107_CAMPO_73_1: '',
    // C108_CAMPO_73_2: '',
    // C109_CAMPO_73_3: '',
    // C110_CAMPO_73_4: '',
    // C111_CAMPO_73_5: '',
    // C112_CAMPO_73_6: '',
    // C113_CAMPO_73_7: '',
    // C114_CAMPO_73_8: '',
    // C115_CAMPO_73_9: '',
    // C116_CAMPO_73_10: '',
    // C117_CAMPO_74_1: '',
    // C118_CAMPO_74_2: '',
    // C119_CAMPO_74_3: '',
    // C120_CAMPO_74_4: '',
    // C121_CAMPO_74_5: '',
    // C122_CAMPO_74_6: '',
    // C123_CAMPO_74_7: '',
    // C124_CAMPO_74_8: '',
    // C125_CAMPO_74_9: '',
    // C126_CAMPO_74_10: '',
    // C127_CAMPO_74_11: '',
    // C128_CAMPO_74_12: '',
    // C129_CAMPO_74_13: '',
    // C130_CAMPO_74_14: '',
    // C131_CAMPO_75_1: '',
    // C132_CAMPO_75_2: '',
    // C133_CAMPO_75_3: '',
    // C134_CAMPO_75_4: '',
    // C135_CAMPO_75_5: '',
    // C136_CAMPO_75_6: '',
    // C137_CAMPO_75_7: '',
    // C138_CAMPO_76: '',
    // C139_CAMPO_77: '',
    // C140_CAMPO_78: '',
    // C141_CAMPO_79: '',
    // C142_CAMPO_80: '',
    // C143_CAMPO_81: '',
    // C144_CAMPO_82: '',
    // C145_CAMPO_83: '',
    // C146_CAMPO_84: '',
    // C147_CAMPO_85: '',
    // C148_CAMPO_86: '',
    // C149_CAMPO_87: '',
    // C150_CAMPO_88: '',
    // C151_CAMPO_89: '',
    // C152_CAMPO_90: '',
    // C153_CAMPO_91: '',

  }

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
  C77_CAMPO_49
  C78_CAMPO_50
  C85_CAMPO_57
  C86_CAMPO_58
  C87_CAMPO_59
  C88_CAMPO_60
  C89_CAMPO_61
  C90_CAMPO_62
  C91_CAMPO_63
  C92_CAMPO_64
  C94_CAMPO_66
  C96_CAMPO_68
  C99_CAMPO_71_1
  C100_CAMPO_71_2
  C101_CAMPO_71_3
  C102_CAMPO_71_4
  C104_CAMPO_71_6
  C105_CAMPO_71_7
  C107_CAMPO_73_1
  C108_CAMPO_73_2
  C109_CAMPO_73_3
  C110_CAMPO_73_4
  C111_CAMPO_73_5
  C112_CAMPO_73_6
  C113_CAMPO_73_7
  C114_CAMPO_73_8
  C115_CAMPO_73_9
  C116_CAMPO_73_10
  C117_CAMPO_74_1
  C118_CAMPO_74_2
  C119_CAMPO_74_3
  C120_CAMPO_74_4
  C121_CAMPO_74_5
  C122_CAMPO_74_6
  C123_CAMPO_74_7
  C124_CAMPO_74_8
  C125_CAMPO_74_9
  C126_CAMPO_74_10
  C134_CAMPO_75_4
  C135_CAMPO_75_5
  C136_CAMPO_75_6
  C137_CAMPO_75_7
  C142_CAMPO_80
  C143_CAMPO_81
  C147_CAMPO_85
  artritis
  private CC;

  isReadonly = true;
  constructor(private hemofiliaservice: HemofiliaService, activateRoute: ActivatedRoute,
    config: NgbModalConfig, private modalService: NgbModal, public tabs: AppComponent, private opcionesListaService: OpcionesListaService, private Artritisservice: CACArtritisService) {
    this.CC = activateRoute.snapshot.params['cc']; config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.Funcionesdecarga();
  }

  Funcionesdecarga() {
    this.consultarDatos()
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
    this.cargarRadiografiademanos49()
    this.cargarRadiografiadepies50()
    this.cargarParcialdeOrinaúltimosemestre57()
    this.cargarALTultimosemestre58()
    this.cargarHTAactual59()
    this.cargarDMactua60()
    this.cargarECVactual61()
    this.cargarERCactual62()
    this.cargarOsteoporosisactual63()
    this.cargarSindromeSjogrenactual64()
    this.cargarProfesionalrealizoultimoDAS28_66()
    this.cargarEstadoactividadactualdelaARegúnDAS28_68()
    this.cargarAnalgesicosNoOpioides71_1()
    this.cargarAnalgesicosOpioides71_2()
    this.cargarAINES71_3()
    this.cargarCorticoides71_4()
    this.cargarCalcio71_6()
    this.cargarVitaminaD71_7()
    this.cargarAzatioprina73_1()
    this.cargarCiclosporina73_2()
    this.cargarCiclofosfamida73_3()
    this.cargarCorticoides73_4()
    this.cargarDpenicilaimina73_5()
    this.cargarEtanercept73_6()
    this.cargarLeflunomida73_7()
    this.cargarMetotrexate73_8()
    this.cargarRituximab73_9()
    this.cargarSulfasalazina73_10()
    this.cargarAbatacept74_1()
    this.cargarAdalimumab74_2()
    this.cargarCertolizumab74_3()
    this.cargarGolimumab74_4()
    this.cargaHidroxicloroquina74_5()
    this.cargarInfliximab74_6()
    this.cargarSalesdeoro74_7()
    this.cargarTocilizumab74_8()
    this.cargarTofacitinib74_9()
    this.cargarAnakinra74_10()
    this.cargarReemplazoarticular1porAR575_4()
    this.cargarReemplazoarticular2porAR75_5()
    this.cargarReemplazoarticular3porAR75_6()
    this.cargarReemplazoarticula4porAR75_7()
    this.cargarQuienhacelaatencionclinicaparaAR80()
    this.cargarNovedaddelpacienterespectoalreporteanterior81()
    this.cargarCausademuerte85()
  }

  consultarDatos() {
    this.Artritisservice.getOne(this.CC).subscribe(res => {
      this.artritis = res;
      console.log(this.artritis)
    })
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

  cargarRadiografiademanos49() {
    this.opcionesListaService.cargarRadiografiademanos49().subscribe(res => {
      this.C77_CAMPO_49 = res;
    })
  }
  cargarRadiografiadepies50() {
    this.opcionesListaService.cargarRadiografiadepies50().subscribe(res => {
      this.C78_CAMPO_50 = res;
    })
  }
  cargarParcialdeOrinaúltimosemestre57() {
    this.opcionesListaService.cargarParcialdeOrinaúltimosemestre57().subscribe(res => {
      this.C85_CAMPO_57 = res;
    })
  }
  cargarALTultimosemestre58() {
    this.opcionesListaService.cargarALTultimosemestre58().subscribe(res => {
      this.C86_CAMPO_58 = res;
    })
  }
  cargarHTAactual59() {
    this.opcionesListaService.cargarHTAactual59().subscribe(res => {
      this.C87_CAMPO_59 = res;
    })
  }
  cargarDMactua60() {
    this.opcionesListaService.cargarDMactua60().subscribe(res => {
      this.C88_CAMPO_60 = res;
    })
  }
  cargarECVactual61() {
    this.opcionesListaService.cargarECVactual61().subscribe(res => {
      this.C89_CAMPO_61 = res;
    })
  }
  cargarERCactual62() {
    this.opcionesListaService.cargarERCactual62().subscribe(res => {
      this.C90_CAMPO_62 = res;
    })
  }
  cargarOsteoporosisactual63() {
    this.opcionesListaService.cargarOsteoporosisactual63().subscribe(res => {
      this.C91_CAMPO_63 = res;
    })
  }
  cargarSindromeSjogrenactual64() {
    this.opcionesListaService.cargarSindromeSjogrenactual64().subscribe(res => {
      this.C92_CAMPO_64 = res;
    })
  }
  cargarProfesionalrealizoultimoDAS28_66() {
    this.opcionesListaService.cargarProfesionalrealizoultimoDAS28_66().subscribe(res => {
      this.C94_CAMPO_66 = res;
    })
  }
  cargarEstadoactividadactualdelaARegúnDAS28_68() {
    this.opcionesListaService.cargarEstadoactividadactualdelaARegúnDAS28_68().subscribe(res => {
      this.C96_CAMPO_68 = res;
    })
  }
  cargarAnalgesicosNoOpioides71_1() {
    this.opcionesListaService.cargarAnalgesicosNoOpioides71_1().subscribe(res => {
      this.C99_CAMPO_71_1 = res;
    })
  }
  cargarAnalgesicosOpioides71_2() {
    this.opcionesListaService.cargarAnalgesicosOpioides71_2().subscribe(res => {
      this.C100_CAMPO_71_2 = res;
    })
  }
  cargarAINES71_3() {
    this.opcionesListaService.cargarAINES71_3().subscribe(res => {
      this.C101_CAMPO_71_3 = res;
    })
  }
  cargarCorticoides71_4() {
    this.opcionesListaService.cargarCorticoides71_4().subscribe(res => {
      this.C102_CAMPO_71_4 = res;
    })
  }
  cargarCalcio71_6() {
    this.opcionesListaService.cargarCalcio71_6().subscribe(res => {
      this.C104_CAMPO_71_6 = res;
    })
  }
  cargarVitaminaD71_7() {
    this.opcionesListaService.cargarVitaminaD71_7().subscribe(res => {
      this.C105_CAMPO_71_7 = res;
    })
  }
  cargarAzatioprina73_1() {
    this.opcionesListaService.cargarAzatioprina73_1().subscribe(res => {
      this.C107_CAMPO_73_1 = res;
    })
  }
  cargarCiclosporina73_2() {
    this.opcionesListaService.cargarCiclosporina73_2().subscribe(res => {
      this.C108_CAMPO_73_2 = res;
    })
  }
  cargarCiclofosfamida73_3() {
    this.opcionesListaService.cargarCiclofosfamida73_3().subscribe(res => {
      this.C109_CAMPO_73_3 = res;
    })
  }
  cargarCorticoides73_4() {
    this.opcionesListaService.cargarCorticoides73_4().subscribe(res => {
      this.C110_CAMPO_73_4 = res;
    })
  }
  cargarDpenicilaimina73_5() {
    this.opcionesListaService.cargarDpenicilaimina73_5().subscribe(res => {
      this.C111_CAMPO_73_5 = res;
    })
  }
  cargarEtanercept73_6() {
    this.opcionesListaService.cargarEtanercept73_6().subscribe(res => {
      this.C112_CAMPO_73_6 = res;
    })
  }
  cargarLeflunomida73_7() {
    this.opcionesListaService.cargarLeflunomida73_7().subscribe(res => {
      this.C113_CAMPO_73_7 = res;
    })
  }
  cargarMetotrexate73_8() {
    this.opcionesListaService.cargarMetotrexate73_8().subscribe(res => {
      this.C114_CAMPO_73_8 = res;
    })
  }
  cargarRituximab73_9() {
    this.opcionesListaService.cargarAnakinra47_10().subscribe(res => {
      this.C115_CAMPO_73_9 = res;
    })
  }
  cargarSulfasalazina73_10() {
    this.opcionesListaService.cargarSulfasalazina73_10().subscribe(res => {
      this.C116_CAMPO_73_10 = res;
    })
  }
  cargarAbatacept74_1() {
    this.opcionesListaService.cargarAbatacept74_1().subscribe(res => {
      this.C117_CAMPO_74_1 = res;
    })
  }
  cargarAdalimumab74_2() {
    this.opcionesListaService.cargarAdalimumab74_2().subscribe(res => {
      this.C118_CAMPO_74_2 = res;
    })

  }
  cargarCertolizumab74_3() {
    this.opcionesListaService.cargarCertolizumab74_3().subscribe(res => {
      this.C119_CAMPO_74_3 = res;
    })

  }
  cargarGolimumab74_4() {
    this.opcionesListaService.cargarGolimumab74_4().subscribe(res => {
      this.C120_CAMPO_74_4 = res;
    })

  }
  cargaHidroxicloroquina74_5() {
    this.opcionesListaService.cargaHidroxicloroquina74_5().subscribe(res => {
      this.C121_CAMPO_74_5 = res;
    })
  }
  cargarInfliximab74_6() {
    this.opcionesListaService.cargarInfliximab74_6().subscribe(res => {
      this.C122_CAMPO_74_6 = res;
    })
  }
  cargarSalesdeoro74_7() {
    this.opcionesListaService.cargarSalesdeoro74_7().subscribe(res => {
      this.C123_CAMPO_74_7 = res;
    })
  }
  cargarTocilizumab74_8() {
    this.opcionesListaService.cargarTocilizumab74_8().subscribe(res => {
      this.C124_CAMPO_74_8 = res;
    })
  }
  cargarTofacitinib74_9() {
    this.opcionesListaService.cargarTofacitinib74_9().subscribe(res => {
      this.C125_CAMPO_74_9 = res;
    })
  }
  cargarAnakinra74_10() {
    this.opcionesListaService.cargarAnakinra74_10().subscribe(res => {
      this.C126_CAMPO_74_10 = res;
    })
  }
  cargarReemplazoarticular1porAR575_4() {
    this.opcionesListaService.cargarReemplazoarticular1porAR575_4().subscribe(res => {
      this.C134_CAMPO_75_4 = res;
    })
  }
  cargarReemplazoarticular2porAR75_5() {
    this.opcionesListaService.cargarReemplazoarticular2porAR75_5().subscribe(res => {
      this.C135_CAMPO_75_5 = res;
    })
  }
  cargarReemplazoarticular3porAR75_6() {
    this.opcionesListaService.cargarReemplazoarticular3porAR75_6().subscribe(res => {
      this.C136_CAMPO_75_6 = res;
    })
  }
  cargarReemplazoarticula4porAR75_7() {
    this.opcionesListaService.cargarReemplazoarticula4porAR75_7().subscribe(res => {
      this.C137_CAMPO_75_7 = res;
    })
  }
  cargarQuienhacelaatencionclinicaparaAR80() {
    this.opcionesListaService.cargarQuienhacelaatencionclinicaparaAR80().subscribe(res => {
      this.C142_CAMPO_80 = res;
    })
  }
  cargarNovedaddelpacienterespectoalreporteanterior81() {
    this.opcionesListaService.cargarNovedaddelpacienterespectoalreporteanterior81().subscribe(res => {
      this.C143_CAMPO_81 = res;
    })
  }
  cargarCausademuerte85() {
    this.opcionesListaService.cargarCausademuerte85().subscribe(res => {
      this.C147_CAMPO_85 = res;
    })
  }

  GuargarDatos() {
  //   for (let i = 0; i < this.artritis.length; i++) {
  //     this.ARTRITIS.C0_CAMPO_1 = this.artritis[i].C0_CAMPO_1;
  //     this.ARTRITIS.C1_CAMPO_2 = this.artritis[i].C1_CAMPO_2;
  //     this.ARTRITIS.C2_CAMPO_3 = this.artritis[i].C2_CAMPO_3;
  //     this.ARTRITIS.C3_CAMPO_4 = this.artritis[i].C3_CAMPO_4;
  //     this.ARTRITIS.C4_CAMPO_5 = this.artritis[i].C4_CAMPO_5;
  //     this.ARTRITIS.C5_CAMPO_6 = this.artritis[i].C5_CAMPO_6;
  //     this.ARTRITIS.C6_CAMPO_7 = this.artritis[i].C6_CAMPO_7;
  //     this.ARTRITIS.C7_CAMPO_8 = this.artritis[i].C7_CAMPO_8;
  //     this.ARTRITIS.C8_CAMPO_9 = this.artritis[i].C8_CAMPO_9;
  //     this.ARTRITIS.C9_CAMPO_10 = this.artritis[i].C9_CAMPO_10;
  //     this.ARTRITIS.C10_CAMPO_11 = this.artritis[i].C10_CAMPO_11;
  //     this.ARTRITIS.C11_CAMPO_12 = this.artritis[i].C11_CAMPO_12;
  //     this.ARTRITIS.C12_CAMPO_13 = this.artritis[i].C12_CAMPO_13;
  //     this.ARTRITIS.C13_CAMPO_14 = this.artritis[i].C13_CAMPO_14;
  //     this.ARTRITIS.C14_CAMPO_15 = this.artritis[i].C14_CAMPO_15;
  //     this.ARTRITIS.C15_CAMPO_16 = this.artritis[i].C15_CAMPO_16;
  //     this.ARTRITIS.C16_CAMPO_17 = this.artritis[i].C16_CAMPO_17;
  //     this.ARTRITIS.C17_CAMPO_18 = this.artritis[i].C17_CAMPO_18;
  //     this.ARTRITIS.C18_CAMPO_19 = this.artritis[i].C18_CAMPO_19;
  //     this.ARTRITIS.C19_CAMPO_20 = this.artritis[i].C19_CAMPO_20;
  //     this.ARTRITIS.C20_CAMPO_21 = this.artritis[i].C20_CAMPO_21;
  //     this.ARTRITIS.C21_CAMPO_22 = this.artritis[i].C21_CAMPO_22;
  //     this.ARTRITIS.C22_CAMPO_23 = this.artritis[i].C22_CAMPO_23;
  //     this.ARTRITIS.C23_CAMPO_24 = this.artritis[i].C23_CAMPO_24;
  //     this.ARTRITIS.C24_CAMPO_25 = this.artritis[i].C24_CAMPO_25;
  //     this.ARTRITIS.C25_CAMPO_26 = this.artritis[i].C25_CAMPO_26;
  //     this.ARTRITIS.C26_CAMPO_27 = this.artritis[i].C26_CAMPO_27;
  //     this.ARTRITIS.C27_CAMPO_28 = this.artritis[i].C27_CAMPO_28;
  //     this.ARTRITIS.C28_CAMPO_29 = this.artritis[i].C28_CAMPO_29;
  //     this.ARTRITIS.C29_CAMPO_30 = this.artritis[i].C29_CAMPO_30;
  //     this.ARTRITIS.C30_CAMPO_31 = this.artritis[i].C30_CAMPO_31;
  //     this.ARTRITIS.C31_CAMPO_32 = this.artritis[i].C31_CAMPO_32;
  //     this.ARTRITIS.C32_CAMPO_33 = this.artritis[i].C32_CAMPO_33;
  //     this.ARTRITIS.C33_CAMPO_34 = this.artritis[i].C33_CAMPO_34;
  //     this.ARTRITIS.C34_CAMPO_35 = this.artritis[i].C34_CAMPO_35;
  //     this.ARTRITIS.C35_CAMPO_36 = this.artritis[i].C35_CAMPO_36;
  //     this.ARTRITIS.C36_CAMPO_37 = this.artritis[i].C36_CAMPO_37;
  //     this.ARTRITIS.C37_CAMPO_38 = this.artritis[i].C37_CAMPO_38
  //     this.ARTRITIS.C38_CAMPO_39 = this.artritis[i].C38_CAMPO_39;
  //     this.ARTRITIS.C39_CAMPO_40 = this.artritis[i].C39_CAMPO_40;
  //     this.ARTRITIS.C40_CAMPO_41 = this.artritis[i].C40_CAMPO_41;
  //     this.ARTRITIS.C41_CAMPO_42 = this.artritis[i].C41_CAMPO_42;
  //     this.ARTRITIS.C42_CAMPO_43 = this.artritis[i].C42_CAMPO_43;
  //     this.ARTRITIS.C43_CAMPO_44 = this.artritis[i].C43_CAMPO_44;
  //     this.ARTRITIS.C44_CAMPO_45_1 = this.artritis[i].C44_CAMPO_45_1;
  //     this.ARTRITIS.C45_CAMPO_45_2 = this.artritis[i].C45_CAMPO_45_2;
  //     this.ARTRITIS.C46_CAMPO_45_3 = this.artritis[i].C46_CAMPO_45_3;
  //     this.ARTRITIS.C47_CAMPO_45_4 = this.artritis[i].C47_CAMPO_45_4;
  //     this.ARTRITIS.C48_CAMPO_45_5 = this.artritis[i].C48_CAMPO_45_5;
  //     this.ARTRITIS.C49_CAMPO_45_6 = this.artritis[i].C49_CAMPO_45_6;
  //     this.ARTRITIS.C50_CAMPO_45_7 = this.artritis[i].C50_CAMPO_45_7;
  //     this.ARTRITIS.C51_CAMPO_45_8 = this.artritis[i].C51_CAMPO_45_8;
  //     this.ARTRITIS.C52_CAMPO_46_1 = this.artritis[i].C52_CAMPO_46_1;
  //     this.ARTRITIS.C53_CAMPO_46_2 = this.artritis[i].C53_CAMPO_46_2;
  //     this.ARTRITIS.C54_CAMPO_46_3 = this.artritis[i].C54_CAMPO_46_3;
  //     this.ARTRITIS.C55_CAMPO_46_4 = this.artritis[i].C55_CAMPO_46_4;
  //     this.ARTRITIS.C56_CAMPO_46_5 = this.artritis[i].C56_CAMPO_46_5;
  //     this.ARTRITIS.C57_CAMPO_46_6 = this.artritis[i].C57_CAMPO_46_6;
  //     this.ARTRITIS.C58_CAMPO_46_7 = this.artritis[i].C58_CAMPO_46_7;
  //     this.ARTRITIS.C59_CAMPO_46_8 = this.artritis[i].C59_CAMPO_46_8;
  //     this.ARTRITIS.C60_CAMPO_46_9 = this.artritis[i].C60_CAMPO_46_9;
  //     this.ARTRITIS.C61_CAMPO_46_10 = this.artritis[i].C61_CAMPO_46_10;
  //     this.ARTRITIS.C62_CAMPO_47_1 = this.artritis[i].C62_CAMPO_47_1;
  //     this.ARTRITIS.C63_CAMPO_47_2 = this.artritis[i].C63_CAMPO_47_2;
  //     this.ARTRITIS.C64_CAMPO_47_3 = this.artritis[i].C64_CAMPO_47_3;
  //     this.ARTRITIS.C65_CAMPO_47_4 = this.artritis[i].C65_CAMPO_47_4;
  //     this.ARTRITIS.C66_CAMPO_47_5 = this.artritis[i].C66_CAMPO_47_5;
  //     this.ARTRITIS.C67_CAMPO_47_6 = this.artritis[i].C67_CAMPO_47_6;
  //     this.ARTRITIS.C68_CAMPO_47_7 = this.artritis[i].C68_CAMPO_47_7;
  //     this.ARTRITIS.C69_CAMPO_47_8 = this.artritis[i].C69_CAMPO_47_8;
  //     this.ARTRITIS.C70_CAMPO_47_9 = this.artritis[i].C70_CAMPO_47_9;
  //     this.ARTRITIS.C71_CAMPO_47_10 = this.artritis[i].C71_CAMPO_47_10;
  //     this.ARTRITIS.C72_CAMPO_47_11 = this.artritis[i].C72_CAMPO_47_11;
  //     this.ARTRITIS.C73_CAMPO_47_12 = this.artritis[i].C73_CAMPO_47_12;
  //     this.ARTRITIS.C74_CAMPO_47_13 = this.artritis[i].C74_CAMPO_47_13;
  //     this.ARTRITIS.C75_CAMPO_47_14 = this.artritis[i].C75_CAMPO_47_14;
  //     this.ARTRITIS.C76_CAMPO_48 = this.artritis[i].C76_CAMPO_48;
  //     this.ARTRITIS.C77_CAMPO_49 = this.artritis[i].C77_CAMPO_49;
  //     this.ARTRITIS.C78_CAMPO_50 = this.artritis[i].C78_CAMPO_50;
  //     this.ARTRITIS.C79_CAMPO_51 = this.artritis[i].C79_CAMPO_51;
  //     this.ARTRITIS.C80_CAMPO_52 = this.artritis[i].C80_CAMPO_52;
  //     this.ARTRITIS.C81_CAMPO_53 = this.artritis[i].C81_CAMPO_53;
  //     this.ARTRITIS.C82_CAMPO_54 = this.artritis[i].C82_CAMPO_54;
  //     this.ARTRITIS.C83_CAMPO_55 = this.artritis[i].C83_CAMPO_55;
  //     this.ARTRITIS.C84_CAMPO_56 = this.artritis[i].C84_CAMPO_56;
  //     this.ARTRITIS.C85_CAMPO_57 = this.artritis[i].C85_CAMPO_57;
  //     this.ARTRITIS.C86_CAMPO_58 = this.artritis[i].C86_CAMPO_58;
  //     this.ARTRITIS.C87_CAMPO_59 = this.artritis[i].C87_CAMPO_59;
  //     this.ARTRITIS.C88_CAMPO_60 = this.artritis[i].C88_CAMPO_60;
  //     this.ARTRITIS.C89_CAMPO_61 = this.artritis[i].C89_CAMPO_61;
  //     this.ARTRITIS.C90_CAMPO_62 = this.artritis[i].C90_CAMPO_62;
  //     this.ARTRITIS.C91_CAMPO_63 = this.artritis[i].C91_CAMPO_63;
  //     this.ARTRITIS.C92_CAMPO_64 = this.artritis[i].C92_CAMPO_64;
  //     this.ARTRITIS.C93_CAMPO_65 = this.artritis[i].C93_CAMPO_65;
  //     this.ARTRITIS.CC94_CAMPO_66 = this.artritis[i].CC94_CAMPO_66;
  //     this.ARTRITIS.C95_CAMPO_67 = this.artritis[i].C95_CAMPO_67;
  //     this.ARTRITIS.C96_CAMPO_68 = this.artritis[i].C96_CAMPO_68;
  //     this.ARTRITIS.C97_CAMPO_69 = this.artritis[i].C97_CAMPO_69;
  //     this.ARTRITIS.C98_CAMPO_70 = this.artritis[i].C98_CAMPO_70;
  //     this.ARTRITIS.C99_CAMPO_71_1 = this.artritis[i].C99_CAMPO_71_1;
  //     this.ARTRITIS.C100_CAMPO_71_2 = this.artritis[i].C100_CAMPO_71_2;
  //     this.ARTRITIS.C101_CAMPO_71_3 = this.artritis[i].C101_CAMPO_71_3;
  //     this.ARTRITIS.C102_CAMPO_71_4 = this.artritis[i].C102_CAMPO_71_4;
  //     this.ARTRITIS.C103_CAMPO_71_5 = this.artritis[i].C103_CAMPO_71_5;
  //     this.ARTRITIS.C104_CAMPO_71_6 = this.artritis[i].C104_CAMPO_71_6;
  //     this.ARTRITIS.C105_CAMPO_71_7 = this.artritis[i].C105_CAMPO_71_7;
  //     this.ARTRITIS.C106_CAMPO_72 = this.artritis[i].C106_CAMPO_72;
  //     this.ARTRITIS.C107_CAMPO_73_1 = this.artritis[i].C107_CAMPO_73_1;
  //     this.ARTRITIS.C108_CAMPO_73_2 = this.artritis[i].C108_CAMPO_73_2;
  //     this.ARTRITIS.C109_CAMPO_73_3 = this.artritis[i].C109_CAMPO_73_3;
  //     this.ARTRITIS.C110_CAMPO_73_4 = this.artritis[i].C110_CAMPO_73_4;
  //     this.ARTRITIS.C111_CAMPO_73_5 = this.artritis[i].C111_CAMPO_73_5;
  //     this.ARTRITIS.C112_CAMPO_73_6 = this.artritis[i].C112_CAMPO_73_6;
  //     this.ARTRITIS.C113_CAMPO_73_7 = this.artritis[i].C113_CAMPO_73_7;
  //     this.ARTRITIS.C114_CAMPO_73_8 = this.artritis[i].C114_CAMPO_73_8;
  //     this.ARTRITIS.C115_CAMPO_73_9 = this.artritis[i].C115_CAMPO_73_9;
  //     this.ARTRITIS.C116_CAMPO_73_10 = this.artritis[i].C116_CAMPO_73_10;
  //     this.ARTRITIS.C117_CAMPO_74_1 = this.artritis[i].C117_CAMPO_74_1;
  //     this.ARTRITIS.C118_CAMPO_74_2 = this.artritis[i].C118_CAMPO_74_2;
  //     this.ARTRITIS.C119_CAMPO_74_3 = this.artritis[i].C119_CAMPO_74_3;
  //     this.ARTRITIS.C120_CAMPO_74_4 = this.artritis[i].C120_CAMPO_74_4;
  //     this.ARTRITIS.C121_CAMPO_74_5 = this.artritis[i].C121_CAMPO_74_5;
  //     this.ARTRITIS.C122_CAMPO_74_6 = this.artritis[i].C122_CAMPO_74_6;
  //     this.ARTRITIS.C123_CAMPO_74_7 = this.artritis[i].C123_CAMPO_74_7;
  //     this.ARTRITIS.C124_CAMPO_74_8 = this.artritis[i].C124_CAMPO_74_8;
  //     this.ARTRITIS.C125_CAMPO_74_9 = this.artritis[i].C125_CAMPO_74_9;
  //     this.ARTRITIS.C126_CAMPO_74_10 = this.artritis[i].C126_CAMPO_74_10;
  //     this.ARTRITIS.C127_CAMPO_74_11 = this.artritis[i].C127_CAMPO_74_11;
  //     this.ARTRITIS.C128_CAMPO_74_12 = this.artritis[i].C128_CAMPO_74_12;
  //     this.ARTRITIS.C129_CAMPO_74_13 = this.artritis[i].C129_CAMPO_74_13;
  //     this.ARTRITIS.C130_CAMPO_74_14 = this.artritis[i].C130_CAMPO_74_14;
  //     this.ARTRITIS.C131_CAMPO_75_1 = this.artritis[i].C131_CAMPO_75_1;
  //     this.ARTRITIS.C132_CAMPO_75_2 = this.artritis[i].C132_CAMPO_75_2;
  //     this.ARTRITIS.C133_CAMPO_75_3 = this.artritis[i].C133_CAMPO_75_3;
  //     this.ARTRITIS.C134_CAMPO_75_4 = this.artritis[i].C134_CAMPO_75_4;
  //     this.ARTRITIS.C135_CAMPO_75_5 = this.artritis[i].C135_CAMPO_75_5;
  //     this.ARTRITIS.C136_CAMPO_75_6 = this.artritis[i].C136_CAMPO_75_6;
  //     this.ARTRITIS.C137_CAMPO_75_7 = this.artritis[i].C137_CAMPO_75_7;
  //     this.ARTRITIS.C138_CAMPO_76 = this.artritis[i].C138_CAMPO_76;
  //     this.ARTRITIS.C139_CAMPO_77 = this.artritis[i].C139_CAMPO_77;
  //     this.ARTRITIS.C140_CAMPO_78 = this.artritis[i].C140_CAMPO_78;
  //     this.ARTRITIS.C141_CAMPO_79 = this.artritis[i].C141_CAMPO_79;
  //     this.ARTRITIS.C142_CAMPO_80 = this.artritis[i].C142_CAMPO_80;
  //     this.ARTRITIS.C143_CAMPO_81 = this.artritis[i].C143_CAMPO_81;
  //     this.ARTRITIS.C144_CAMPO_82 = this.artritis[i].C144_CAMPO_82;
  //     this.ARTRITIS.C145_CAMPO_83 = this.artritis[i].C145_CAMPO_83;
  //     this.ARTRITIS.C146_CAMPO_84 = this.artritis[i].C146_CAMPO_84;
  //     this.ARTRITIS.C147_CAMPO_85 = this.artritis[i].C147_CAMPO_85;
  //     this.ARTRITIS.C148_CAMPO_86 = this.artritis[i].C148_CAMPO_86;
  //     this.ARTRITIS.C149_CAMPO_87 = this.artritis[i].C149_CAMPO_87;
  //     this.ARTRITIS.C150_CAMPO_88 = this.artritis[i].C150_CAMPO_88;
  //     this.ARTRITIS.C151_CAMPO_89 = this.artritis[i].C151_CAMPO_89;
  //     this.ARTRITIS.C152_CAMPO_90 = this.artritis[i].C152_CAMPO_90;
  //     this.ARTRITIS.C153_CAMPO_91 = this.artritis[i].C153_CAMPO_91;
  //   }
  //   console.log(this.ARTRITIS)

  //   this.Artritisservice.ActualizarDatos(this.CC, this.ARTRITIS).subscribe(res => {
  //     console.log(res)
  //     Swal.fire({
  //       title: 'Almacenado!',
  //       text: 'Datos almacenados con exito.',
  //       icon: 'success',
  //       allowOutsideClick: false
  //     }

  //     ).then((result) => {
  //       if (result.value) {

  //       }
  //     })
  //   })
  }
}
