import { Component, OnInit } from '@angular/core';
import { ERC } from '../../models/erc'
import { OpcionesListasErcService } from '../../services/opcionesListas-erc/opciones-listas-erc.service'
import { CuentaErcService } from '../../services/cuenta-erc/cuenta-erc.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cuenta-erc',
  templateUrl: './cuenta-erc.component.html',
  styleUrls: ['./cuenta-erc.component.css']
})
export class CuentaErcComponent implements OnInit {
  validacionRegistro = false;
  C4_CAMPO_5
  C7_CAMPO_8
  C8_CAMPO_9
  C10_CAMPO_11
  C11_CAMPO_12
  C17_CAMPO_18
  C20_CAMPO_20
  C23_CAMPO_22
  C45_CAMPO_36
  C46_CAMPO_37
  C47_CAMPO_38
  C48_CAMPO_39
  C50_CAMPO_41
  C52_CAMPO_43
  C55_CAMPO_46
  C57_CAMPO_48
  C63_CAMPO_54
  C66_CAMPO_57
  C71_CAMPO_62
  C72_CAMPO_62_1
  C73_CAMPO_62_2
  C74_CAMPO_62_3
  C75_CAMPO_62_4
  C76_CAMPO_62_5
  C77_CAMPO_62_6
  C78_CAMPO_62_7
  C79_CAMPO_62_8
  C80_CAMPO_62_9
  C81_CAMPO_62_10
  C82_CAMPO_62_11
  C85_CAMPO_64
  C88_CAMPO_67
  C90_CAMPO_69
  C99_CAMPO_70_1
  C100_CAMPO_70_2
  C101_CAMPO_70_3
  C102_CAMPO_70_4
  C103_CAMPO_70_5
  C104_CAMPO_70_6
  C116_CAMPO_79
  C117_CAMPO_80

  erc: ERC = {
    ID_CUENTA_ERC: '',
    CAMPO_1: '',
    CAMPO_2: '',
    CAMPO_3: '',
    CAMPO_4: '',
    CAMPO_5: '',
    CAMPO_6: '',
    CAMPO_7: '',
    CAMPO_8: '',
    CAMPO_9: '',
    CAMPO_10: '',
    CAMPO_11: '',
    CAMPO_12: '',
    CAMPO_13: '',
    CAMPO_14: '',
    CAMPO_15: '',
    CAMPO_16: '',
    CAMPO_17: '',
    CAMPO_18: '',
    CAMPO_19: '',
    CAMPO_19_1: '',
    CAMPO_20: '',
    CAMPO_21: '',
    CAMPO_21_1: '',
    CAMPO_22: '',
    CAMPO_23: '',
    CAMPO_24: '',
    CAMPO_25: '',
    CAMPO_26: '',
    CAMPO_27: '',
    CAMPO_27_1: '',
    CAMPO_28: '',
    CAMPO_28_1: '',
    CAMPO_29: '',
    CAMPO_29_1: '',
    CAMPO_30: '',
    CAMPO_30_1: '',
    CAMPO_31: '',
    CAMPO_31_1: '',
    CAMPO_32: '',
    CAMPO_32_1: '',
    CAMPO_33: '',
    CAMPO_33_1: '',
    CAMPO_34: '',
    CAMPO_34_1: '',
    CAMPO_35: '',
    CAMPO_36: '',
    CAMPO_37: '',
    CAMPO_38: '',
    CAMPO_39: '',
    CAMPO_40: '',
    CAMPO_41: '',
    CAMPO_42: '',
    CAMPO_43: '',
    CAMPO_44: '',
    CAMPO_45: '',
    CAMPO_46: '',
    CAMPO_47: '',
    CAMPO_48: '',
    CAMPO_49: '',
    CAMPO_50: '',
    CAMPO_51: '',
    CAMPO_52: '',
    CAMPO_53: '',
    CAMPO_54: '',
    CAMPO_55: '',
    CAMPO_56: '',
    CAMPO_57: '',
    CAMPO_58: '',
    CAMPO_59: '',
    CAMPO_60: '',
    CAMPO_61: '',
    CAMPO_62: '',
    CAMPO_62_1: '',
    CAMPO_62_2: '',
    CAMPO_62_3: '',
    CAMPO_62_4: '',
    CAMPO_62_5: '',
    CAMPO_62_6: '',
    CAMPO_62_7: '',
    CAMPO_62_8: '',
    CAMPO_62_9: '',
    CAMPO_62_10: '',
    CAMPO_62_11: '',
    CAMPO_63: '',
    CAMPO_63_1: '',
    CAMPO_64: '',
    CAMPO_65: '',
    CAMPO_66: '',
    CAMPO_67: '',
    CAMPO_68: '',
    CAMPO_69: '',
    CAMPO_69_1: '',
    CAMPO_69_2: '',
    CAMPO_69_3: '',
    CAMPO_69_4: '',
    CAMPO_69_5: '',
    CAMPO_69_6: '',
    CAMPO_69_7: '',
    CAMPO_70: '',
    CAMPO_70_1: '',
    CAMPO_70_2: '',
    CAMPO_70_3: '',
    CAMPO_70_4: '',
    CAMPO_70_5: '',
    CAMPO_70_6: '',
    CAMPO_70_7: '',
    CAMPO_70_8: '',
    CAMPO_70_9: '',
    CAMPO_71: '',
    CAMPO_72: '',
    CAMPO_73: '',
    CAMPO_74: '',
    CAMPO_75: '',
    CAMPO_76: '',
    CAMPO_77: '',
    CAMPO_78: '',
    CAMPO_79: '',
    CAMPO_80: '',
    CAMPO_80_1: '',
  }


  constructor(private OpcionesListasErcService: OpcionesListasErcService, private CuentaErcService: CuentaErcService) { }

  ngOnInit(): void {
    this.funcionesdeCarga();
  }

  funcionesdeCarga() {
    this.cargarTipoDocumento5();
    this.cargarSexo8();
    this.cargarRegimenAfilicacion9();
    this.cargarPertenenciaEtnica11();
    this.cargarGrupopoblacional12();
    this.cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18();
    this.cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20();
    this.cargarEtiologíadelaERC22();
    this.cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36();
    this.cargarElusuariorecibeAntagonista37();
    this.cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38();
    this.cargarEstadioERCEnfermedad39();
    this.cargarLapersonaencuentraprogramatenciónERC41();
    this.cargarModoInicioTerapiaReemplazoRenal43();
    this.cargarHemodiálisis46();
    this.cargarCostototalhemodiálisisduranteperíodoreporte48();
    this.cargarVacunaHepatitis54();
    this.cargarTerapiaDialíticaERCestadio57();
    this.cargarÚltimavaloraciónclínicapornefrología62();
    this.cargarSereportócánceractivoúltimos12mese62_1();
    this.cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2();
    this.cargarSereportocomocontraindicaciónparatransplanterenal62_3();
    this.cargarSereportocontraindicacióntransplanterenal62_4();
    this.cargarSereportocontraindicacióntransplanterena62_5();
    this.cargarSereportoenfermedadcardiaca62_6();
    this.cargarSereportoinfecciónVIH62_7();
    this.cargarSereportoinfecciónVIH62_8();
    this.cargarSereportocomocontraindicación62_9();
    this.cargarSereportocomocontraindicación62_10();
    this.cargarSereportocomocontraindicación62_11();
    this.cargarElusuarioharecibidotrasplanterenal64();
    this.cargarTipodedonante67();
    this.cargarElusuariohapresentadoalgunacomplicación69();
    this.cargarEnalgunmomentodesdeelultimoreporte70_1();
    this.cargarEnalgunmomentodesdeelultimoreporte70_2();
    this.cargarEnalgunmomentodesdeelultimoreporte70_3();
    this.cargarEnalgunmomentodesdeelultimoreporte70_4();
    this.cargarEnalgunmomentodesdeelultimoreporte70_5();
    this.cargarEnalgunmomentodesdeelultimoreporte70_6();
    this.cargarNovedadconrespectoalreporteanterior79();
    this.cargarCausadeMuerte80();
  }

  cargarTipoDocumento5() {
    this.OpcionesListasErcService.cargarTipoDocumento5().subscribe(res => {
      this.C4_CAMPO_5 = res;
    })
  }
  cargarSexo8() {
    this.OpcionesListasErcService.cargarSexo8().subscribe(res => {
      this.C7_CAMPO_8 = res;
    })
  }
  cargarRegimenAfilicacion9() {
    this.OpcionesListasErcService.cargarRegimenAfilicacion9().subscribe(res => {
      this.C8_CAMPO_9 = res;
    })
  }
  cargarPertenenciaEtnica11() {
    this.OpcionesListasErcService.cargarPertenenciaEtnica11().subscribe(res => {
      this.C10_CAMPO_11 = res;
    })
  }
  cargarGrupopoblacional12() {
    this.OpcionesListasErcService.cargarGrupopoblacional12().subscribe(res => {
      this.C11_CAMPO_12 = res;
    })
  }
  cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18() {
    this.OpcionesListasErcService.cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18().subscribe(res => {
      this.C17_CAMPO_18 = res;
    })
  }
  cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20() {
    this.OpcionesListasErcService.cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20().subscribe(res => {
      this.C20_CAMPO_20 = res;
    })
  }
  cargarEtiologíadelaERC22() {
    this.OpcionesListasErcService.cargarEtiologíadelaERC22().subscribe(res => {
      this.C23_CAMPO_22 = res;
    })
  }
  cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36() {
    this.OpcionesListasErcService.cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36().subscribe(res => {
      this.C45_CAMPO_36 = res;
    })
  }
  cargarElusuariorecibeAntagonista37() {
    this.OpcionesListasErcService.cargarElusuariorecibeAntagonista37().subscribe(res => {
      this.C46_CAMPO_37 = res;
    })
  }
  cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38() {
    this.OpcionesListasErcService.cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38().subscribe(res => {
      this.C47_CAMPO_38 = res;
    })
  }
  cargarEstadioERCEnfermedad39() {
    this.OpcionesListasErcService.cargarEstadioERCEnfermedad39().subscribe(res => {
      this.C48_CAMPO_39 = res;
    })
  }
  cargarLapersonaencuentraprogramatenciónERC41() {
    this.OpcionesListasErcService.cargarLapersonaencuentraprogramatenciónERC41().subscribe(res => {
      this.C50_CAMPO_41 = res;
    })
  }
  cargarModoInicioTerapiaReemplazoRenal43() {
    this.OpcionesListasErcService.cargarModoInicioTerapiaReemplazoRenal43().subscribe(res => {
      this.C52_CAMPO_43 = res;
    })
  }
  cargarHemodiálisis46() {
    this.OpcionesListasErcService.cargarHemodiálisis46().subscribe(res => {
      this.C55_CAMPO_46 = res;
    })
  }
  cargarCostototalhemodiálisisduranteperíodoreporte48() {
    this.OpcionesListasErcService.cargarCostototalhemodiálisisduranteperíodoreporte48().subscribe(res => {
      this.C57_CAMPO_48 = res;
    })
  }
  cargarVacunaHepatitis54() {
    this.OpcionesListasErcService.cargarVacunaHepatitis54().subscribe(res => {
      this.C63_CAMPO_54 = res;
    })
  }
  cargarTerapiaDialíticaERCestadio57() {
    this.OpcionesListasErcService.cargarTerapiaDialíticaERCestadio57().subscribe(res => {
      this.C66_CAMPO_57 = res;
    })
  }
  cargarÚltimavaloraciónclínicapornefrología62() {
    this.OpcionesListasErcService.cargarÚltimavaloraciónclínicapornefrología62().subscribe(res => {
      this.C71_CAMPO_62 = res;
    })
  }
  cargarSereportócánceractivoúltimos12mese62_1() {
    this.OpcionesListasErcService.cargarSereportócánceractivoúltimos12mese62_1().subscribe(res => {
      this.C72_CAMPO_62_1 = res;
    })
  }
  cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2() {
    this.OpcionesListasErcService.cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2().subscribe(res => {
      this.C73_CAMPO_62_2 = res;
    })
  }
  cargarSereportocomocontraindicaciónparatransplanterenal62_3() {
    this.OpcionesListasErcService.cargarSereportocomocontraindicaciónparatransplanterenal62_3().subscribe(res => {
      this.C74_CAMPO_62_3 = res;
    })
  }
  cargarSereportocontraindicacióntransplanterenal62_4() {
    this.OpcionesListasErcService.cargarSereportocontraindicacióntransplanterenal62_4().subscribe(res => {
      this.C75_CAMPO_62_4 = res;
    })
  }
  cargarSereportocontraindicacióntransplanterena62_5() {
    this.OpcionesListasErcService.cargarSereportocontraindicacióntransplanterena62_5().subscribe(res => {
      this.C76_CAMPO_62_5 = res;
    })
  }
  cargarSereportoenfermedadcardiaca62_6() {
    this.OpcionesListasErcService.cargarSereportoenfermedadcardiaca62_6().subscribe(res => {
      this.C77_CAMPO_62_6 = res;
    })
  }
  cargarSereportoinfecciónVIH62_7() {
    this.OpcionesListasErcService.cargarSereportoinfecciónVIH62_7().subscribe(res => {
      this.C78_CAMPO_62_7 = res;
    })
  }
  cargarSereportoinfecciónVIH62_8() {
    this.OpcionesListasErcService.cargarSereportoinfecciónVIH62_8().subscribe(res => {
      this.C79_CAMPO_62_8 = res;
    })
  }
  cargarSereportocomocontraindicación62_9() {
    this.OpcionesListasErcService.cargarSereportocomocontraindicación62_9().subscribe(res => {
      this.C80_CAMPO_62_9 = res;
    })
  }
  cargarSereportocomocontraindicación62_10() {
    this.OpcionesListasErcService.cargarSereportocomocontraindicación62_10().subscribe(res => {
      this.C81_CAMPO_62_10 = res;
    })
  }
  cargarSereportocomocontraindicación62_11() {
    this.OpcionesListasErcService.cargarSereportocomocontraindicación62_11().subscribe(res => {
      this.C82_CAMPO_62_11 = res;
    })
  }
  cargarElusuarioharecibidotrasplanterenal64() {
    this.OpcionesListasErcService.cargarElusuarioharecibidotrasplanterenal64().subscribe(res => {
      this.C85_CAMPO_64 = res;
    })
  }
  cargarTipodedonante67() {
    this.OpcionesListasErcService.cargarTipodedonante67().subscribe(res => {
      this.C88_CAMPO_67 = res;
    })
  }
  cargarElusuariohapresentadoalgunacomplicación69() {
    this.OpcionesListasErcService.cargarElusuariohapresentadoalgunacomplicación69().subscribe(res => {
      this.C90_CAMPO_69 = res;
    })
  }
  cargarEnalgunmomentodesdeelultimoreporte70_1() {
    this.OpcionesListasErcService.cargarEnalgunmomentodesdeelultimoreporte70_1().subscribe(res => {
      this.C99_CAMPO_70_1 = res;
    })
  }
  cargarEnalgunmomentodesdeelultimoreporte70_2() {
    this.OpcionesListasErcService.cargarEnalgunmomentodesdeelultimoreporte70_2().subscribe(res => {
      this.C100_CAMPO_70_2 = res;
    })
  }
  cargarEnalgunmomentodesdeelultimoreporte70_3() {
    this.OpcionesListasErcService.cargarEnalgunmomentodesdeelultimoreporte70_3().subscribe(res => {
      this.C101_CAMPO_70_3 = res;
    })
  }
  cargarEnalgunmomentodesdeelultimoreporte70_4() {
    this.OpcionesListasErcService.cargarEnalgunmomentodesdeelultimoreporte70_4().subscribe(res => {
      this.C102_CAMPO_70_4 = res;
    })
  }
  cargarEnalgunmomentodesdeelultimoreporte70_5() {
    this.OpcionesListasErcService.cargarEnalgunmomentodesdeelultimoreporte70_5().subscribe(res => {
      this.C103_CAMPO_70_5 = res;
    })
  }
  cargarEnalgunmomentodesdeelultimoreporte70_6() {
    this.OpcionesListasErcService.cargarEnalgunmomentodesdeelultimoreporte70_6().subscribe(res => {
      this.C104_CAMPO_70_6 = res;
    })
  }
  cargarNovedadconrespectoalreporteanterior79() {
    this.OpcionesListasErcService.cargarNovedadconrespectoalreporteanterior79().subscribe(res => {
      console.log('campo79')

      this.C116_CAMPO_79 = res;
      console.log(this.C116_CAMPO_79)
    })
  }
  cargarCausadeMuerte80() {
    this.OpcionesListasErcService.cargarCausadeMuerte80().subscribe(res => {
      this.C117_CAMPO_80 = res;
    })
  }

  guardarDatos() {
    delete this.erc.ID_CUENTA_ERC;
    this.CuentaErcService.GuardarErc(this.erc).subscribe(res => {
      console.log(this.erc)
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
    })

  }

  guardarCamposValidacion() {
    delete this.erc.ID_CUENTA_ERC;
    this.CuentaErcService.GuardarErc(this.erc).subscribe(res => {
      console.log(this.erc)
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
    })

  }

  nuevoRegistro() {
    this.erc = {
      CAMPO_1: '',
      CAMPO_2: '',
      CAMPO_3: '',
      CAMPO_4: '',
      CAMPO_5: '',
      CAMPO_6: '',
      CAMPO_7: '',
      CAMPO_8: '',
      CAMPO_9: '',
      CAMPO_10: '',
      CAMPO_11: '',
      CAMPO_12: '',
      CAMPO_13: '',
      CAMPO_14: '',
      CAMPO_15: '',
      CAMPO_16: '',
      CAMPO_17: '',
      CAMPO_18: '',
      CAMPO_19: '',
      CAMPO_19_1: '',
      CAMPO_20: '',
      CAMPO_21: '',
      CAMPO_21_1: '',
      CAMPO_22: '',
      CAMPO_23: '',
      CAMPO_24: '',
      CAMPO_25: '',
      CAMPO_26: '',
      CAMPO_27: '',
      CAMPO_27_1: '',
      CAMPO_28: '',
      CAMPO_28_1: '',
      CAMPO_29: '',
      CAMPO_29_1: '',
      CAMPO_30: '',
      CAMPO_30_1: '',
      CAMPO_31: '',
      CAMPO_31_1: '',
      CAMPO_32: '',
      CAMPO_32_1: '',
      CAMPO_33: '',
      CAMPO_33_1: '',
      CAMPO_34: '',
      CAMPO_34_1: '',
      CAMPO_35: '',
      CAMPO_36: '',
      CAMPO_37: '',
      CAMPO_38: '',
      CAMPO_39: '',
      CAMPO_40: '',
      CAMPO_41: '',
      CAMPO_42: '',
      CAMPO_43: '',
      CAMPO_44: '',
      CAMPO_45: '',
      CAMPO_46: '',
      CAMPO_47: '',
      CAMPO_48: '',
      CAMPO_49: '',
      CAMPO_50: '',
      CAMPO_51: '',
      CAMPO_52: '',
      CAMPO_53: '',
      CAMPO_54: '',
      CAMPO_55: '',
      CAMPO_56: '',
      CAMPO_57: '',
      CAMPO_58: '',
      CAMPO_59: '',
      CAMPO_60: '',
      CAMPO_61: '',
      CAMPO_62: '',
      CAMPO_62_1: '',
      CAMPO_62_2: '',
      CAMPO_62_3: '',
      CAMPO_62_4: '',
      CAMPO_62_5: '',
      CAMPO_62_6: '',
      CAMPO_62_7: '',
      CAMPO_62_8: '',
      CAMPO_62_9: '',
      CAMPO_62_10: '',
      CAMPO_62_11: '',
      CAMPO_63: '',
      CAMPO_63_1: '',
      CAMPO_64: '',
      CAMPO_65: '',
      CAMPO_66: '',
      CAMPO_67: '',
      CAMPO_68: '',
      CAMPO_69: '',
      CAMPO_69_1: '',
      CAMPO_69_2: '',
      CAMPO_69_3: '',
      CAMPO_69_4: '',
      CAMPO_69_5: '',
      CAMPO_69_6: '',
      CAMPO_69_7: '',
      CAMPO_70: '',
      CAMPO_70_1: '',
      CAMPO_70_2: '',
      CAMPO_70_3: '',
      CAMPO_70_4: '',
      CAMPO_70_5: '',
      CAMPO_70_6: '',
      CAMPO_70_7: '',
      CAMPO_70_8: '',
      CAMPO_70_9: '',
      CAMPO_71: '',
      CAMPO_72: '',
      CAMPO_73: '',
      CAMPO_74: '',
      CAMPO_75: '',
      CAMPO_76: '',
      CAMPO_77: '',
      CAMPO_78: '',
      CAMPO_79: '',
      CAMPO_80: '',
      CAMPO_80_1: '',
    }
  }

  GuardarRegistros() {
    if (this.validacionRegistro == true) {
      this.guardarCamposValidacion()
    } else {
      this.guardarDatos();
    }
  }

}
