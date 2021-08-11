import { Component, OnInit } from '@angular/core';
import { OpcionesListasCancerService } from '../../services/opcionesListas-cancer/opciones-listas-cancer.service';
import { HemofiliaService } from '../../services/hemofilia/hemofilia.service';
import { Cancer } from '../../models/cancer'
import { CACCancerServiceService } from '../../services/CAC-cancer/cac-cancer-service.service'
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import {LogsErroresCancerService} from 'src/app/services/logsErroresCancer/logs-errores-cancer.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancer-edit',
  templateUrl: './cancer-edit.component.html',
  styleUrls: ['./cancer-edit.component.css']
})
export class CancerEditComponent implements OnInit {
  validacionRegistro = false;
  Cancerlist
  _cancer_1 = true;
  _cancer_3 = true;
  _cancer_7 = true;
  _cancer_8 = true;
  private CC;
  cancer5: any;
  cancer8: any;
  Ocupacion: any;
  cancer10: any;
  cancer12: any;
  cancer13: any;
  municipioresidencia: any;
  cancer21: any;
  cancer22: any;
  cancer25: any;
  cancer27: any;
  cancer28: any;
  cancer31: any;
  cancer33: any;
  cancer34: any;
  cancer36: any;
  cancer37: any;
  cancer38: any;
  cancer40: any;
  cancer41: any;
  cancer42: any;
  cancer44: any;
  cancer45: any;
  cancer46: any;
  cancer46_1: any;
  cancer46_2: any;
  cancer46_3: any;
  cancer46_4: any;
  cancer46_5: any;
  cancer46_6: any;
  cancer46_7: any;
  cancer46_8: any;
  cancer47: any;
  cancer48: any;
  cancer50: any;
  cancer51: any;
  cancer52: any;
  cancer53: any;
  cancer53_1: any;
  cancer53_2: any;
  cancer53_3: any;
  cancer53_4: any;
  cancer53_5: any;
  cancer53_6: any;
  cancer53_7: any;
  cancer53_8: any;
  cancer53_9: any;
  cancer54: any;
  cancer55: any;
  cancer56: any;
  cancer57: any;
  cancer59: any;
  cancer60: any;
  cancer61: any;
  cancer63: any;
  cancer64: any;
  cancer65: any;
  cancer66: any;
  cancer66_1: any;
  cancer66_2: any;
  cancer66_3: any;
  cancer66_4: any;
  cancer66_5: any;
  cancer66_6: any;
  cancer66_7: any;
  cancer66_8: any;
  cancer66_9: any;
  cancer67: any;
  cancer68: any;
  cancer69: any;
  cancer70: any;
  cancer72: any;
  cancer73: any;
  cancer74: any;
  cancer75: any;
  cancer77: any;
  cancer78: any;
  cancer79: any;
  cancer81: any;
  cancer82: any;
  cancer83: any;
  cancer84: any;
  cancer85: any;
  cancer86: any;
  cancer87: any;
  cancer89: any;
  cancer90: any;
  cancer91: any;
  cancer92: any;
  cancer93: any;
  cancer95: any;
  cancer96: any;
  cancer98: any;
  cancer99: any;
  cancer100: any;
  cancer101: any;
  cancer102: any;
  cancer104: any;
  cancer105: any;
  cancer106: any;
  cancer107: any;
  cancer108: any;
  cancer110: any;
  cancer111: any;
  cancer113: any;
  cancer114: any;
  cancer114_1: any;
  cancer114_2: any;
  cancer114_3: any;
  cancer114_4: any;
  cancer114_5: any;
  cancer114_6: any;
  cancer116: any;
  cancer117: any;
  cancer119: any;
  cancer120: any;
  cancer122: any;
  cancer123: any;
  cancer124: any;
  cancer125: any;
  cancer126: any;
  cancer127: any;
  cancer128: any;
  cancer129: any;
  cancer132: any;

  CANCER: any;
  nacimiento


  cancer: Cancer = {
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
    CAMPO_20: '',
    CAMPO_21: '',
    CAMPO_22: '',
    CAMPO_23: '',
    CAMPO_24: '',
    CAMPO_25: '',
    CAMPO_26: '',
    CAMPO_27: '',
    CAMPO_28: '',
    CAMPO_29: '',
    CAMPO_30: '',
    CAMPO_31: '',
    CAMPO_32: '',
    CAMPO_33: '',
    CAMPO_34: '',
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
    CAMPO_46_1: '',
    CAMPO_46_2: '',
    CAMPO_46_3: '',
    CAMPO_46_4: '',
    CAMPO_46_5: '',
    CAMPO_46_6: '',
    CAMPO_46_7: '',
    CAMPO_46_8: '',
    CAMPO_47: '',
    CAMPO_48: '',
    CAMPO_49: '',
    CAMPO_50: '',
    CAMPO_51: '',
    CAMPO_52: '',
    CAMPO_53: '',
    CAMPO_53_1: '',
    CAMPO_53_2: '',
    CAMPO_53_3: '',
    CAMPO_53_4: '',
    CAMPO_53_5: '',
    CAMPO_53_6: '',
    CAMPO_53_7: '',
    CAMPO_53_8: '',
    CAMPO_53_9: '',
    CAMPO_54: '',
    CAMPO_55: '',
    CAMPO_56: '',
    CAMPO_57: '',
    CAMPO_58: '',
    CAMPO_59: '',
    CAMPO_60: '',
    CAMPO_61: '',
    CAMPO_62: '',
    CAMPO_63: '',
    CAMPO_64: '',
    CAMPO_65: '',
    CAMPO_66: '',
    CAMPO_66_1: '',
    CAMPO_66_2: '',
    CAMPO_66_3: '',
    CAMPO_66_4: '',
    CAMPO_66_5: '',
    CAMPO_66_6: '',
    CAMPO_66_7: '',
    CAMPO_66_8: '',
    CAMPO_66_9: '',
    CAMPO_67: '',
    CAMPO_68: '',
    CAMPO_69: '',
    CAMPO_70: '',
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
    CAMPO_81: '',
    CAMPO_82: '',
    CAMPO_83: '',
    CAMPO_84: '',
    CAMPO_85: '',
    CAMPO_86: '',
    CAMPO_87: '',
    CAMPO_88: '',
    CAMPO_89: '',
    CAMPO_90: '',
    CAMPO_91: '',
    CAMPO_92: '',
    CAMPO_93: '',
    CAMPO_94: '',
    CAMPO_95: '',
    CAMPO_96: '',
    CAMPO_97: '',
    CAMPO_98: '',
    CAMPO_99: '',
    CAMPO_100: '',
    CAMPO_101: '',
    CAMPO_102: '',
    CAMPO_103: '',
    CAMPO_104: '',
    CAMPO_105: '',
    CAMPO_106: '',
    CAMPO_107: '',
    CAMPO_108: '',
    CAMPO_109: '',
    CAMPO_110: '',
    CAMPO_111: '',
    CAMPO_112: '',
    CAMPO_113: '',
    CAMPO_114: '',
    CAMPO_114_1: '',
    CAMPO_114_2: '',
    CAMPO_114_3: '',
    CAMPO_114_4: '',
    CAMPO_114_5: '',
    CAMPO_114_6: '',
    CAMPO_115: '',
    CAMPO_116: '',
    CAMPO_117: '',
    CAMPO_118: '',
    CAMPO_119: '',
    CAMPO_120: '',
    CAMPO_121: '',
    CAMPO_122: '',
    CAMPO_123: '',
    CAMPO_124: '',
    CAMPO_125: '',
    CAMPO_126: '',
    CAMPO_127: '',
    CAMPO_128: '',
    CAMPO_129: '',
    CAMPO_130: '',
    CAMPO_131: '',
    CAMPO_132: '',
    CAMPO_133: '',
    CAMPO_134: '',

  }
  constructor(private cacCancerServiceService: CACCancerServiceService, private hemofiliaservice: HemofiliaService, private opcionesListasCancerService: OpcionesListasCancerService, activateRoute: ActivatedRoute,
    config: NgbModalConfig, private modalService: NgbModal, public tabs: AppComponent, private LogsErroresCancerService:LogsErroresCancerService) {
    this.CC = activateRoute.snapshot.params['cc']; config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.Funcionesdecarga();
  }

  Funcionesdecarga() {

    this.Cargarregistrohemofilia();
    this.cargarCancer5();
    this.cargarCancer8();
    this.cargarCancer10();
    this.cargarCancer12();
    this.cargarCancer13();
    this.cargarCancer21();
    this.cargarCancer22();
    this.cargarCancer25();
    this.cargarCancer27();
    this.cargarCancer28();
    this.cargarCancer31();
    this.cargarCancer33();
    this.cargarCancer34();
    this.cargarCancer36();
    this.cargarCancer37();
    this.cargarCancer38();
    this.cargarCancer40();
    this.cargarCancer41();
    this.cargarCancer42();
    this.cargarCancer44();
    this.cargarCancer45();
    this.cargarCancer46();
    this.cargarCancer46_1();
    this.cargarCancer46_2();
    this.cargarCancer46_3();
    this.cargarCancer46_4();
    this.cargarCancer46_5();
    this.cargarCancer46_6();
    this.cargarCancer46_7();
    this.cargarCancer46_8();
    this.cargarCancer47();
    this.cargarCancer48();
    this.cargarCancer50();
    this.cargarCancer51();
    this.cargarCancer52();
    this.cargarCancer53();
    this.cargarCancer53_1();
    this.cargarCancer53_2();
    this.cargarCancer53_3();
    this.cargarCancer53_4();
    this.cargarCancer53_5();
    this.cargarCancer53_6();
    this.cargarCancer53_7();
    this.cargarCancer53_8();
    this.cargarCancer53_9();
    this.cargarCancer54();
    this.cargarCancer55();
    this.cargarCancer56();
    this.cargarCancer57();
    this.cargarCancer59();
    this.cargarCancer60();
    this.cargarCancer61();
    this.cargarCancer63();
    this.cargarCancer64();
    this.cargarCancer65();
    this.cargarCancer66();
    this.cargarCancer66_1();
    this.cargarCancer66_2();
    this.cargarCancer66_3();
    this.cargarCancer66_4();
    this.cargarCancer66_5();
    this.cargarCancer66_6();
    this.cargarCancer66_7();
    this.cargarCancer66_8();
    this.cargarCancer66_9();
    this.cargarCancer67();
    this.cargarCancer68();
    this.cargarCancer69();
    this.cargarCancer70();
    this.cargarCancer72();
    this.cargarCancer73();
    this.cargarCancer74();
    this.cargarCancer75();
    this.cargarCancer77();
    this.cargarCancer78();
    this.cargarCancer79();
    this.cargarCancer81();
    this.cargarCancer82();
    this.cargarCancer83();
    this.cargarCancer84();
    this.cargarCancer85();
    this.cargarCancer86();
    this.cargarCancer87();
    this.cargarCancer89();
    this.cargarCancer90();
    this.cargarCancer91();
    this.cargarCancer92();
    this.cargarCancer93();
    this.cargarCancer95();
    this.cargarCancer96();
    this.cargarCancer98();
    this.cargarCancer99();
    this.cargarCancer100();
    this.cargarCancer101();
    this.cargarCancer102();
    this.cargarCancer104();
    this.cargarCancer105();
    this.cargarCancer106();
    this.cargarCancer107();
    this.cargarCancer108();
    this.cargarCancer110();
    this.cargarCancer111();
    this.cargarCancer113();
    this.cargarCancer114();
    this.cargarCancer114_1();
    this.cargarCancer114_2();
    this.cargarCancer114_3();
    this.cargarCancer114_4();
    this.cargarCancer114_5();
    this.cargarCancer114_6();
    this.cargarCancer116();
    this.cargarCancer117();
    this.cargarCancer119();
    this.cargarCancer120();
    this.cargarCancer122();
    this.cargarCancer123();
    this.cargarCancer124();
    this.cargarCancer125();
    this.cargarCancer126();
    this.cargarCancer127();
    this.cargarCancer128();
    this.cargarCancer129();
    this.cargarCancer132();
    this.CargarOcupacion();
    this.CargarMunicipioresidencia();

  }



  Cargarregistrohemofilia() {
    this.cacCancerServiceService.CargarIdentificacion(this.CC).subscribe(res => {
      this.CANCER = res;

      for (let i = 0; i < this.CANCER.length; i++) {
        this.cancer.CAMPO_1 = this.CANCER[i].CAMPO_1
        this.cancer.CAMPO_3 = this.CANCER[i].CAMPO_3
        this.cancer.CAMPO_7 = this.CANCER[i].CAMPO_7
        this.cancer.CAMPO_8 = this.CANCER[i].CAMPO_8
        this.cancer.CAMPO_16 = this.CANCER[i].CAMPO_16
        this.cancer.CAMPO_18 = this.CANCER[i].CAMPO_18
        this.cancer.CAMPO_19 = this.CANCER[i].CAMPO_19
        this.cancer.CAMPO_20 = this.CANCER[i].CAMPO_20
        this.cancer.CAMPO_23 = this.CANCER[i].CAMPO_23
        this.cancer.CAMPO_24 = this.CANCER[i].CAMPO_24
        this.cancer.CAMPO_26 = this.CANCER[i].CAMPO_26
        this.cancer.CAMPO_30 = this.CANCER[i].CAMPO_30
        this.cancer.CAMPO_32 = this.CANCER[i].CAMPO_32
        this.cancer.CAMPO_35 = this.CANCER[i].CAMPO_35
        this.cancer.CAMPO_39 = this.CANCER[i].CAMPO_39
        this.cancer.CAMPO_43 = this.CANCER[i].CAMPO_43
        this.cancer.CAMPO_49 = this.CANCER[i].CAMPO_49
        this.cancer.CAMPO_58 = this.CANCER[i].CAMPO_58
        this.cancer.CAMPO_62 = this.CANCER[i].CAMPO_62
        this.cancer.CAMPO_71 = this.CANCER[i].CAMPO_71
        this.cancer.CAMPO_76 = this.CANCER[i].CAMPO_76
        this.cancer.CAMPO_80 = this.CANCER[i].CAMPO_80
        this.cancer.CAMPO_88 = this.CANCER[i].CAMPO_88
        this.cancer.CAMPO_94 = this.CANCER[i].CAMPO_94
        this.cancer.CAMPO_97 = this.CANCER[i].CAMPO_97
        this.cancer.CAMPO_103 = this.CANCER[i].CAMPO_103
        this.cancer.CAMPO_109 = this.CANCER[i].CAMPO_109
        this.cancer.CAMPO_112 = this.CANCER[i].CAMPO_112
        this.cancer.CAMPO_115 = this.CANCER[i].CAMPO_115
        this.cancer.CAMPO_118 = this.CANCER[i].CAMPO_118
        this.cancer.CAMPO_121 = this.CANCER[i].CAMPO_121
        this.cancer.CAMPO_130 = this.CANCER[i].CAMPO_130
        this.cancer.CAMPO_131 = this.CANCER[i].CAMPO_131
        this.cancer.CAMPO_134 = this.CANCER[i].CAMPO_134
      }
      this.nacimiento = new Date(this.cancer.CAMPO_7);

    })
  }



  GuargarDatos() {

    let entro = false;
    if (this.CANCER[0].CAMPO_1 == '') {
      this._cancer_1 = false;
      entro = true;
    } else {
      this._cancer_1 = true;
    }

    if (this.CANCER[0].CAMPO_3 == '') {
      this._cancer_3 = false;
      entro = true;
    } else {
      this._cancer_3 = true;
    }
    if (this.CANCER[0].CAMPO_7 == '') {
      this._cancer_7 = false;
      entro = true;
    } else {
      this._cancer_7 = true;
    }
    if (this.CANCER[0].CAMPO_8 == '') {
      this._cancer_8 = false;
      entro = true;
    } else {
      this._cancer_8 = true;
    }

    if (entro == true) {
      Swal.fire({
        icon: 'error',
        title: '¡Advertencia!',
        text: 'Digite los campos obligatorios',
      })

    } else {


      for (let i = 0; i < this.CANCER.length; i++) {
        this.cancer.CAMPO_1 = this.CANCER[i].CAMPO_1
        this.cancer.CAMPO_2 = this.CANCER[i].CAMPO_2
        this.cancer.CAMPO_3 = this.CANCER[i].CAMPO_3
        this.cancer.CAMPO_4 = this.CANCER[i].CAMPO_4
        this.cancer.CAMPO_5 = this.CANCER[i].CAMPO_5
        this.cancer.CAMPO_6 = this.CANCER[i].CAMPO_6
        this.cancer.CAMPO_7 = this.CANCER[i].CAMPO_7
        this.cancer.CAMPO_8 = this.CANCER[i].CAMPO_8
        this.cancer.CAMPO_9 = this.CANCER[i].CAMPO_9
        this.cancer.CAMPO_10 = this.CANCER[i].CAMPO_10
        this.cancer.CAMPO_11 = this.CANCER[i].CAMPO_11
        this.cancer.CAMPO_12 = this.CANCER[i].CAMPO_12
        this.cancer.CAMPO_13 = this.CANCER[i].CAMPO_13
        this.cancer.CAMPO_14 = this.CANCER[i].CAMPO_14
        this.cancer.CAMPO_15 = this.CANCER[i].CAMPO_15
        this.cancer.CAMPO_16 = this.CANCER[i].CAMPO_16
        this.cancer.CAMPO_17 = this.CANCER[i].CAMPO_17
        this.cancer.CAMPO_18 = this.CANCER[i].CAMPO_18
        this.cancer.CAMPO_19 = this.CANCER[i].CAMPO_19
        this.cancer.CAMPO_20 = this.CANCER[i].CAMPO_20
        this.cancer.CAMPO_21 = this.CANCER[i].CAMPO_21
        this.cancer.CAMPO_22 = this.CANCER[i].CAMPO_22
        this.cancer.CAMPO_23 = this.CANCER[i].CAMPO_23
        this.cancer.CAMPO_24 = this.CANCER[i].CAMPO_24
        this.cancer.CAMPO_25 = this.CANCER[i].CAMPO_25
        this.cancer.CAMPO_26 = this.CANCER[i].CAMPO_26
        this.cancer.CAMPO_27 = this.CANCER[i].CAMPO_27
        this.cancer.CAMPO_28 = this.CANCER[i].CAMPO_28
        this.cancer.CAMPO_29 = this.CANCER[i].CAMPO_29
        this.cancer.CAMPO_30 = this.CANCER[i].CAMPO_30
        this.cancer.CAMPO_31 = this.CANCER[i].CAMPO_31
        this.cancer.CAMPO_32 = this.CANCER[i].CAMPO_32
        this.cancer.CAMPO_33 = this.CANCER[i].CAMPO_33
        this.cancer.CAMPO_34 = this.CANCER[i].CAMPO_34
        this.cancer.CAMPO_35 = this.CANCER[i].CAMPO_35
        this.cancer.CAMPO_36 = this.CANCER[i].CAMPO_36
        this.cancer.CAMPO_37 = this.CANCER[i].CAMPO_37
        this.cancer.CAMPO_38 = this.CANCER[i].CAMPO_38
        this.cancer.CAMPO_39 = this.CANCER[i].CAMPO_39
        this.cancer.CAMPO_40 = this.CANCER[i].CAMPO_40
        this.cancer.CAMPO_41 = this.CANCER[i].CAMPO_41
        this.cancer.CAMPO_42 = this.CANCER[i].CAMPO_42
        this.cancer.CAMPO_43 = this.CANCER[i].CAMPO_43
        this.cancer.CAMPO_44 = this.CANCER[i].CAMPO_44
        this.cancer.CAMPO_45 = this.CANCER[i].CAMPO_45
        this.cancer.CAMPO_46 = this.CANCER[i].CAMPO_46
        this.cancer.CAMPO_46_1 = this.CANCER[i].CAMPO_46_1
        this.cancer.CAMPO_46_2 = this.CANCER[i].CAMPO_46_2
        this.cancer.CAMPO_46_3 = this.CANCER[i].CAMPO_46_3
        this.cancer.CAMPO_46_4 = this.CANCER[i].CAMPO_46_4
        this.cancer.CAMPO_46_5 = this.CANCER[i].CAMPO_46_5
        this.cancer.CAMPO_46_6 = this.CANCER[i].CAMPO_46_6
        this.cancer.CAMPO_46_7 = this.CANCER[i].CAMPO_46_7
        this.cancer.CAMPO_46_8 = this.CANCER[i].CAMPO_46_8
        this.cancer.CAMPO_47 = this.CANCER[i].CAMPO_47
        this.cancer.CAMPO_48 = this.CANCER[i].CAMPO_48
        this.cancer.CAMPO_49 = this.CANCER[i].CAMPO_49
        this.cancer.CAMPO_50 = this.CANCER[i].CAMPO_50
        this.cancer.CAMPO_51 = this.CANCER[i].CAMPO_51
        this.cancer.CAMPO_52 = this.CANCER[i].CAMPO_52
        this.cancer.CAMPO_53 = this.CANCER[i].CAMPO_53
        this.cancer.CAMPO_53_1 = this.CANCER[i].CAMPO_53_1
        this.cancer.CAMPO_53_2 = this.CANCER[i].CAMPO_53_2
        this.cancer.CAMPO_53_3 = this.CANCER[i].CAMPO_53_3
        this.cancer.CAMPO_53_4 = this.CANCER[i].CAMPO_53_4
        this.cancer.CAMPO_53_5 = this.CANCER[i].CAMPO_53_5
        this.cancer.CAMPO_53_6 = this.CANCER[i].CAMPO_53_6
        this.cancer.CAMPO_53_7 = this.CANCER[i].CAMPO_53_7
        this.cancer.CAMPO_53_8 = this.CANCER[i].CAMPO_53_8
        this.cancer.CAMPO_53_9 = this.CANCER[i].CAMPO_53_9
        this.cancer.CAMPO_54 = this.CANCER[i].CAMPO_54
        this.cancer.CAMPO_55 = this.CANCER[i].CAMPO_55
        this.cancer.CAMPO_56 = this.CANCER[i].CAMPO_56
        this.cancer.CAMPO_57 = this.CANCER[i].CAMPO_57
        this.cancer.CAMPO_58 = this.CANCER[i].CAMPO_58
        this.cancer.CAMPO_59 = this.CANCER[i].CAMPO_59
        this.cancer.CAMPO_60 = this.CANCER[i].CAMPO_60
        this.cancer.CAMPO_61 = this.CANCER[i].CAMPO_61
        this.cancer.CAMPO_62 = this.CANCER[i].CAMPO_62
        this.cancer.CAMPO_63 = this.CANCER[i].CAMPO_63
        this.cancer.CAMPO_64 = this.CANCER[i].CAMPO_64
        this.cancer.CAMPO_65 = this.CANCER[i].CAMPO_65
        this.cancer.CAMPO_66 = this.CANCER[i].CAMPO_66
        this.cancer.CAMPO_66_1 = this.CANCER[i].CAMPO_66_1
        this.cancer.CAMPO_66_2 = this.CANCER[i].CAMPO_66_2
        this.cancer.CAMPO_66_3 = this.CANCER[i].CAMPO_66_3
        this.cancer.CAMPO_66_4 = this.CANCER[i].CAMPO_66_4
        this.cancer.CAMPO_66_5 = this.CANCER[i].CAMPO_66_5
        this.cancer.CAMPO_66_6 = this.CANCER[i].CAMPO_66_6
        this.cancer.CAMPO_66_7 = this.CANCER[i].CAMPO_66_7
        this.cancer.CAMPO_66_8 = this.CANCER[i].CAMPO_66_8
        this.cancer.CAMPO_66_9 = this.CANCER[i].CAMPO_66_9
        this.cancer.CAMPO_67 = this.CANCER[i].CAMPO_67
        this.cancer.CAMPO_68 = this.CANCER[i].CAMPO_68
        this.cancer.CAMPO_69 = this.CANCER[i].CAMPO_69
        this.cancer.CAMPO_70 = this.CANCER[i].CAMPO_70
        this.cancer.CAMPO_71 = this.CANCER[i].CAMPO_71
        this.cancer.CAMPO_72 = this.CANCER[i].CAMPO_72
        this.cancer.CAMPO_73 = this.CANCER[i].CAMPO_73
        this.cancer.CAMPO_74 = this.CANCER[i].CAMPO_74
        this.cancer.CAMPO_75 = this.CANCER[i].CAMPO_75
        this.cancer.CAMPO_76 = this.CANCER[i].CAMPO_76
        this.cancer.CAMPO_77 = this.CANCER[i].CAMPO_77
        this.cancer.CAMPO_78 = this.CANCER[i].CAMPO_78
        this.cancer.CAMPO_79 = this.CANCER[i].CAMPO_79
        this.cancer.CAMPO_80 = this.CANCER[i].CAMPO_80
        this.cancer.CAMPO_81 = this.CANCER[i].CAMPO_81
        this.cancer.CAMPO_82 = this.CANCER[i].CAMPO_82
        this.cancer.CAMPO_83 = this.CANCER[i].CAMPO_83
        this.cancer.CAMPO_84 = this.CANCER[i].CAMPO_84
        this.cancer.CAMPO_85 = this.CANCER[i].CAMPO_85
        this.cancer.CAMPO_86 = this.CANCER[i].CAMPO_86
        this.cancer.CAMPO_87 = this.CANCER[i].CAMPO_87
        this.cancer.CAMPO_88 = this.CANCER[i].CAMPO_88
        this.cancer.CAMPO_89 = this.CANCER[i].CAMPO_89
        this.cancer.CAMPO_90 = this.CANCER[i].CAMPO_90
        this.cancer.CAMPO_91 = this.CANCER[i].CAMPO_91
        this.cancer.CAMPO_92 = this.CANCER[i].CAMPO_92
        this.cancer.CAMPO_93 = this.CANCER[i].CAMPO_93
        this.cancer.CAMPO_94 = this.CANCER[i].CAMPO_94
        this.cancer.CAMPO_95 = this.CANCER[i].CAMPO_95
        this.cancer.CAMPO_96 = this.CANCER[i].CAMPO_96
        this.cancer.CAMPO_97 = this.CANCER[i].CAMPO_97
        this.cancer.CAMPO_98 = this.CANCER[i].CAMPO_98
        this.cancer.CAMPO_99 = this.CANCER[i].CAMPO_99
        this.cancer.CAMPO_100 = this.CANCER[i].CAMPO_100
        this.cancer.CAMPO_101 = this.CANCER[i].CAMPO_101
        this.cancer.CAMPO_102 = this.CANCER[i].CAMPO_102
        this.cancer.CAMPO_103 = this.CANCER[i].CAMPO_103
        this.cancer.CAMPO_104 = this.CANCER[i].CAMPO_104
        this.cancer.CAMPO_105 = this.CANCER[i].CAMPO_105
        this.cancer.CAMPO_106 = this.CANCER[i].CAMPO_106
        this.cancer.CAMPO_107 = this.CANCER[i].CAMPO_107
        this.cancer.CAMPO_108 = this.CANCER[i].CAMPO_108
        this.cancer.CAMPO_109 = this.CANCER[i].CAMPO_109
        this.cancer.CAMPO_110 = this.CANCER[i].CAMPO_110
        this.cancer.CAMPO_111 = this.CANCER[i].CAMPO_111
        this.cancer.CAMPO_112 = this.CANCER[i].CAMPO_112
        this.cancer.CAMPO_113 = this.CANCER[i].CAMPO_113
        this.cancer.CAMPO_114 = this.CANCER[i].CAMPO_114
        this.cancer.CAMPO_114_1 = this.CANCER[i].CAMPO_114_1
        this.cancer.CAMPO_114_2 = this.CANCER[i].CAMPO_114_2
        this.cancer.CAMPO_114_3 = this.CANCER[i].CAMPO_114_3
        this.cancer.CAMPO_114_4 = this.CANCER[i].CAMPO_114_4
        this.cancer.CAMPO_114_5 = this.CANCER[i].CAMPO_114_5
        this.cancer.CAMPO_114_6 = this.CANCER[i].CAMPO_114_6
        this.cancer.CAMPO_115 = this.CANCER[i].CAMPO_115
        this.cancer.CAMPO_116 = this.CANCER[i].CAMPO_116
        this.cancer.CAMPO_117 = this.CANCER[i].CAMPO_117
        this.cancer.CAMPO_118 = this.CANCER[i].CAMPO_118
        this.cancer.CAMPO_119 = this.CANCER[i].CAMPO_119
        this.cancer.CAMPO_120 = this.CANCER[i].CAMPO_120
        this.cancer.CAMPO_121 = this.CANCER[i].CAMPO_121
        this.cancer.CAMPO_122 = this.CANCER[i].CAMPO_122
        this.cancer.CAMPO_123 = this.CANCER[i].CAMPO_123
        this.cancer.CAMPO_124 = this.CANCER[i].CAMPO_124
        this.cancer.CAMPO_125 = this.CANCER[i].CAMPO_125
        this.cancer.CAMPO_126 = this.CANCER[i].CAMPO_126
        this.cancer.CAMPO_127 = this.CANCER[i].CAMPO_127
        this.cancer.CAMPO_128 = this.CANCER[i].CAMPO_128
        this.cancer.CAMPO_129 = this.CANCER[i].CAMPO_129
        this.cancer.CAMPO_130 = this.CANCER[i].CAMPO_130
        this.cancer.CAMPO_131 = this.CANCER[i].CAMPO_131
        this.cancer.CAMPO_132 = this.CANCER[i].CAMPO_132
        this.cancer.CAMPO_133 = this.CANCER[i].CAMPO_133
        this.cancer.CAMPO_134 = this.CANCER[i].CAMPO_134

        let cancer_9 = this.CANCER[i].CAMPO_9.split('.')[0];
        if (cancer_9) {
          this.cancer.CAMPO_9 = cancer_9;
        } else {
          this.cancer.CAMPO_9 = this.CANCER[i].CAMPO_9
        }

        let cancer_14 = this.CANCER[i].CAMPO_14.split('.')[0];
        if (cancer_14) {
          this.cancer.CAMPO_14 = cancer_14;
        } else {
          this.cancer.CAMPO_14 = this.CANCER[i].CAMPO_14
        }

        let cancer_51 = this.CANCER[i].CAMPO_51.split('.')[0];
        if (cancer_51) {
          this.cancer.CAMPO_51 = cancer_51;
        } else {
          this.cancer.CAMPO_51 = this.CANCER[i].CAMPO_51
        }

        let cancer_52 = this.CANCER[i].CAMPO_52.split('.')[0];
        if (cancer_52) {
          this.cancer.CAMPO_52 = cancer_52;
        } else {
          this.cancer.CAMPO_52 = this.CANCER[i].CAMPO_52
        }

        let cancer_64 = this.CANCER[i].CAMPO_64.split('.')[0];
        if (cancer_64) {
          this.cancer.CAMPO_64 = cancer_64;
        } else {
          this.cancer.CAMPO_64 = this.CANCER[i].CAMPO_64
        }

        let cancer_65 = this.CANCER[i].CAMPO_65.split('.')[0];
        if (cancer_65) {
          this.cancer.CAMPO_65 = cancer_65;
        } else {
          this.cancer.CAMPO_65 = this.CANCER[i].CAMPO_65
        }

        let cancer_77 = this.CANCER[i].CAMPO_77.split('.')[0];
        if (cancer_77) {
          this.cancer.CAMPO_77 = cancer_77;
        } else {
          this.cancer.CAMPO_77 = this.CANCER[i].CAMPO_77
        }

        let cancer_82 = this.CANCER[i].CAMPO_82.split('.')[0];
        if (cancer_82) {
          this.cancer.CAMPO_82 = cancer_82;
        } else {
          this.cancer.CAMPO_82 = this.CANCER[i].CAMPO_82
        }

        let cancer_92 = this.CANCER[i].CAMPO_92.split('.')[0];
        if (cancer_92) {
          this.cancer.CAMPO_92 = cancer_92;
        } else {
          this.cancer.CAMPO_92 = this.CANCER[i].CAMPO_92
        }

        let cancer_93 = this.CANCER[i].CAMPO_93.split('.')[0];
        if (cancer_93) {
          this.cancer.CAMPO_93 = cancer_93;
        } else {
          this.cancer.CAMPO_93 = this.CANCER[i].CAMPO_93
        }

        let cancer_101 = this.CANCER[i].CAMPO_101.split('.')[0];
        if (cancer_101) {
          this.cancer.CAMPO_101 = cancer_101;
        } else {
          this.cancer.CAMPO_101 = this.CANCER[i].CAMPO_101
        }

        let cancer_102 = this.CANCER[i].CAMPO_102.split('.')[0];
        if (cancer_102) {
          this.cancer.CAMPO_102 = cancer_102;
        } else {
          this.cancer.CAMPO_102 = this.CANCER[i].CAMPO_102
        }

        let cancer_110 = this.CANCER[i].CAMPO_110.split('.')[0];
        if (cancer_110) {
          this.cancer.CAMPO_110 = cancer_110;
        } else {
          this.cancer.CAMPO_110 = this.CANCER[i].CAMPO_110
        }

        let cancer_113 = this.CANCER[i].CAMPO_113.split('.')[0];
        if (cancer_113) {
          this.cancer.CAMPO_113 = cancer_113;
        } else {
          this.cancer.CAMPO_113 = this.CANCER[i].CAMPO_113
        }

        let cancer_116 = this.CANCER[i].CAMPO_116.split('.')[0];
        if (cancer_116) {
          this.cancer.CAMPO_116 = cancer_116;
        } else {
          this.cancer.CAMPO_116 = this.CANCER[i].CAMPO_116
        }

        let cancer_119 = this.CANCER[i].CAMPO_119.split('.')[0];
        if (cancer_119) {
          this.cancer.CAMPO_119 = cancer_119;
        } else {
          this.cancer.CAMPO_119 = this.CANCER[i].CAMPO_119
        }

        let cancer_122 = this.CANCER[i].CAMPO_122.split('.')[0];
        if (cancer_122) {
          this.cancer.CAMPO_122 = cancer_122;
        } else {
          this.cancer.CAMPO_122 = this.CANCER[i].CAMPO_122
        }
      }

      this.cacCancerServiceService.ActualizarRegistro(this.CC, this.cancer).subscribe(res => {
        console.log(res)
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
  }


  GuardarDatosconValidacion(){
    let entro = false;
    if (this.CANCER[0].CAMPO_1 == '') {
      this._cancer_1 = false;
      entro = true;
    } else {
      this._cancer_1 = true;
    }

    if (this.CANCER[0].CAMPO_3 == '') {
      this._cancer_3 = false;
      entro = true;
    } else {
      this._cancer_3 = true;
    }
    if (this.CANCER[0].CAMPO_7 == '') {
      this._cancer_7 = false;
      entro = true;
    } else {
      this._cancer_7 = true;
    }
    if (this.CANCER[0].CAMPO_8 == '') {
      this._cancer_8 = false;
      entro = true;
    } else {
      this._cancer_8 = true;
    }

    if (entro == true) {
      Swal.fire({
        icon: 'error',
        title: '¡Advertencia!',
        text: 'Digite los campos obligatorios',
      })

    } else {


      for (let i = 0; i < this.CANCER.length; i++) {
        this.cancer.CAMPO_1 = this.CANCER[i].CAMPO_1
        this.cancer.CAMPO_2 = this.CANCER[i].CAMPO_2
        this.cancer.CAMPO_3 = this.CANCER[i].CAMPO_3
        this.cancer.CAMPO_4 = this.CANCER[i].CAMPO_4
        this.cancer.CAMPO_5 = this.CANCER[i].CAMPO_5
        this.cancer.CAMPO_6 = this.CANCER[i].CAMPO_6
        this.cancer.CAMPO_7 = this.CANCER[i].CAMPO_7
        this.cancer.CAMPO_8 = this.CANCER[i].CAMPO_8
        this.cancer.CAMPO_9 = this.CANCER[i].CAMPO_9
        this.cancer.CAMPO_10 = this.CANCER[i].CAMPO_10
        this.cancer.CAMPO_11 = this.CANCER[i].CAMPO_11
        this.cancer.CAMPO_12 = this.CANCER[i].CAMPO_12
        this.cancer.CAMPO_13 = this.CANCER[i].CAMPO_13
        this.cancer.CAMPO_14 = this.CANCER[i].CAMPO_14
        this.cancer.CAMPO_15 = this.CANCER[i].CAMPO_15
        this.cancer.CAMPO_16 = this.CANCER[i].CAMPO_16
        this.cancer.CAMPO_17 = this.CANCER[i].CAMPO_17
        this.cancer.CAMPO_18 = this.CANCER[i].CAMPO_18
        this.cancer.CAMPO_19 = this.CANCER[i].CAMPO_19
        this.cancer.CAMPO_20 = this.CANCER[i].CAMPO_20
        this.cancer.CAMPO_21 = this.CANCER[i].CAMPO_21
        this.cancer.CAMPO_22 = this.CANCER[i].CAMPO_22
        this.cancer.CAMPO_23 = this.CANCER[i].CAMPO_23
        this.cancer.CAMPO_24 = this.CANCER[i].CAMPO_24
        this.cancer.CAMPO_25 = this.CANCER[i].CAMPO_25
        this.cancer.CAMPO_26 = this.CANCER[i].CAMPO_26
        this.cancer.CAMPO_27 = this.CANCER[i].CAMPO_27
        this.cancer.CAMPO_28 = this.CANCER[i].CAMPO_28
        this.cancer.CAMPO_29 = this.CANCER[i].CAMPO_29
        this.cancer.CAMPO_30 = this.CANCER[i].CAMPO_30
        this.cancer.CAMPO_31 = this.CANCER[i].CAMPO_31
        this.cancer.CAMPO_32 = this.CANCER[i].CAMPO_32
        this.cancer.CAMPO_33 = this.CANCER[i].CAMPO_33
        this.cancer.CAMPO_34 = this.CANCER[i].CAMPO_34
        this.cancer.CAMPO_35 = this.CANCER[i].CAMPO_35
        this.cancer.CAMPO_36 = this.CANCER[i].CAMPO_36
        this.cancer.CAMPO_37 = this.CANCER[i].CAMPO_37
        this.cancer.CAMPO_38 = this.CANCER[i].CAMPO_38
        this.cancer.CAMPO_39 = this.CANCER[i].CAMPO_39
        this.cancer.CAMPO_40 = this.CANCER[i].CAMPO_40
        this.cancer.CAMPO_41 = this.CANCER[i].CAMPO_41
        this.cancer.CAMPO_42 = this.CANCER[i].CAMPO_42
        this.cancer.CAMPO_43 = this.CANCER[i].CAMPO_43
        this.cancer.CAMPO_44 = this.CANCER[i].CAMPO_44
        this.cancer.CAMPO_45 = this.CANCER[i].CAMPO_45
        this.cancer.CAMPO_46 = this.CANCER[i].CAMPO_46
        this.cancer.CAMPO_46_1 = this.CANCER[i].CAMPO_46_1
        this.cancer.CAMPO_46_2 = this.CANCER[i].CAMPO_46_2
        this.cancer.CAMPO_46_3 = this.CANCER[i].CAMPO_46_3
        this.cancer.CAMPO_46_4 = this.CANCER[i].CAMPO_46_4
        this.cancer.CAMPO_46_5 = this.CANCER[i].CAMPO_46_5
        this.cancer.CAMPO_46_6 = this.CANCER[i].CAMPO_46_6
        this.cancer.CAMPO_46_7 = this.CANCER[i].CAMPO_46_7
        this.cancer.CAMPO_46_8 = this.CANCER[i].CAMPO_46_8
        this.cancer.CAMPO_47 = this.CANCER[i].CAMPO_47
        this.cancer.CAMPO_48 = this.CANCER[i].CAMPO_48
        this.cancer.CAMPO_49 = this.CANCER[i].CAMPO_49
        this.cancer.CAMPO_50 = this.CANCER[i].CAMPO_50
        this.cancer.CAMPO_51 = this.CANCER[i].CAMPO_51
        this.cancer.CAMPO_52 = this.CANCER[i].CAMPO_52
        this.cancer.CAMPO_53 = this.CANCER[i].CAMPO_53
        this.cancer.CAMPO_53_1 = this.CANCER[i].CAMPO_53_1
        this.cancer.CAMPO_53_2 = this.CANCER[i].CAMPO_53_2
        this.cancer.CAMPO_53_3 = this.CANCER[i].CAMPO_53_3
        this.cancer.CAMPO_53_4 = this.CANCER[i].CAMPO_53_4
        this.cancer.CAMPO_53_5 = this.CANCER[i].CAMPO_53_5
        this.cancer.CAMPO_53_6 = this.CANCER[i].CAMPO_53_6
        this.cancer.CAMPO_53_7 = this.CANCER[i].CAMPO_53_7
        this.cancer.CAMPO_53_8 = this.CANCER[i].CAMPO_53_8
        this.cancer.CAMPO_53_9 = this.CANCER[i].CAMPO_53_9
        this.cancer.CAMPO_54 = this.CANCER[i].CAMPO_54
        this.cancer.CAMPO_55 = this.CANCER[i].CAMPO_55
        this.cancer.CAMPO_56 = this.CANCER[i].CAMPO_56
        this.cancer.CAMPO_57 = this.CANCER[i].CAMPO_57
        this.cancer.CAMPO_58 = this.CANCER[i].CAMPO_58
        this.cancer.CAMPO_59 = this.CANCER[i].CAMPO_59
        this.cancer.CAMPO_60 = this.CANCER[i].CAMPO_60
        this.cancer.CAMPO_61 = this.CANCER[i].CAMPO_61
        this.cancer.CAMPO_62 = this.CANCER[i].CAMPO_62
        this.cancer.CAMPO_63 = this.CANCER[i].CAMPO_63
        this.cancer.CAMPO_64 = this.CANCER[i].CAMPO_64
        this.cancer.CAMPO_65 = this.CANCER[i].CAMPO_65
        this.cancer.CAMPO_66 = this.CANCER[i].CAMPO_66
        this.cancer.CAMPO_66_1 = this.CANCER[i].CAMPO_66_1
        this.cancer.CAMPO_66_2 = this.CANCER[i].CAMPO_66_2
        this.cancer.CAMPO_66_3 = this.CANCER[i].CAMPO_66_3
        this.cancer.CAMPO_66_4 = this.CANCER[i].CAMPO_66_4
        this.cancer.CAMPO_66_5 = this.CANCER[i].CAMPO_66_5
        this.cancer.CAMPO_66_6 = this.CANCER[i].CAMPO_66_6
        this.cancer.CAMPO_66_7 = this.CANCER[i].CAMPO_66_7
        this.cancer.CAMPO_66_8 = this.CANCER[i].CAMPO_66_8
        this.cancer.CAMPO_66_9 = this.CANCER[i].CAMPO_66_9
        this.cancer.CAMPO_67 = this.CANCER[i].CAMPO_67
        this.cancer.CAMPO_68 = this.CANCER[i].CAMPO_68
        this.cancer.CAMPO_69 = this.CANCER[i].CAMPO_69
        this.cancer.CAMPO_70 = this.CANCER[i].CAMPO_70
        this.cancer.CAMPO_71 = this.CANCER[i].CAMPO_71
        this.cancer.CAMPO_72 = this.CANCER[i].CAMPO_72
        this.cancer.CAMPO_73 = this.CANCER[i].CAMPO_73
        this.cancer.CAMPO_74 = this.CANCER[i].CAMPO_74
        this.cancer.CAMPO_75 = this.CANCER[i].CAMPO_75
        this.cancer.CAMPO_76 = this.CANCER[i].CAMPO_76
        this.cancer.CAMPO_77 = this.CANCER[i].CAMPO_77
        this.cancer.CAMPO_78 = this.CANCER[i].CAMPO_78
        this.cancer.CAMPO_79 = this.CANCER[i].CAMPO_79
        this.cancer.CAMPO_80 = this.CANCER[i].CAMPO_80
        this.cancer.CAMPO_81 = this.CANCER[i].CAMPO_81
        this.cancer.CAMPO_82 = this.CANCER[i].CAMPO_82
        this.cancer.CAMPO_83 = this.CANCER[i].CAMPO_83
        this.cancer.CAMPO_84 = this.CANCER[i].CAMPO_84
        this.cancer.CAMPO_85 = this.CANCER[i].CAMPO_85
        this.cancer.CAMPO_86 = this.CANCER[i].CAMPO_86
        this.cancer.CAMPO_87 = this.CANCER[i].CAMPO_87
        this.cancer.CAMPO_88 = this.CANCER[i].CAMPO_88
        this.cancer.CAMPO_89 = this.CANCER[i].CAMPO_89
        this.cancer.CAMPO_90 = this.CANCER[i].CAMPO_90
        this.cancer.CAMPO_91 = this.CANCER[i].CAMPO_91
        this.cancer.CAMPO_92 = this.CANCER[i].CAMPO_92
        this.cancer.CAMPO_93 = this.CANCER[i].CAMPO_93
        this.cancer.CAMPO_94 = this.CANCER[i].CAMPO_94
        this.cancer.CAMPO_95 = this.CANCER[i].CAMPO_95
        this.cancer.CAMPO_96 = this.CANCER[i].CAMPO_96
        this.cancer.CAMPO_97 = this.CANCER[i].CAMPO_97
        this.cancer.CAMPO_98 = this.CANCER[i].CAMPO_98
        this.cancer.CAMPO_99 = this.CANCER[i].CAMPO_99
        this.cancer.CAMPO_100 = this.CANCER[i].CAMPO_100
        this.cancer.CAMPO_101 = this.CANCER[i].CAMPO_101
        this.cancer.CAMPO_102 = this.CANCER[i].CAMPO_102
        this.cancer.CAMPO_103 = this.CANCER[i].CAMPO_103
        this.cancer.CAMPO_104 = this.CANCER[i].CAMPO_104
        this.cancer.CAMPO_105 = this.CANCER[i].CAMPO_105
        this.cancer.CAMPO_106 = this.CANCER[i].CAMPO_106
        this.cancer.CAMPO_107 = this.CANCER[i].CAMPO_107
        this.cancer.CAMPO_108 = this.CANCER[i].CAMPO_108
        this.cancer.CAMPO_109 = this.CANCER[i].CAMPO_109
        this.cancer.CAMPO_110 = this.CANCER[i].CAMPO_110
        this.cancer.CAMPO_111 = this.CANCER[i].CAMPO_111
        this.cancer.CAMPO_112 = this.CANCER[i].CAMPO_112
        this.cancer.CAMPO_113 = this.CANCER[i].CAMPO_113
        this.cancer.CAMPO_114 = this.CANCER[i].CAMPO_114
        this.cancer.CAMPO_114_1 = this.CANCER[i].CAMPO_114_1
        this.cancer.CAMPO_114_2 = this.CANCER[i].CAMPO_114_2
        this.cancer.CAMPO_114_3 = this.CANCER[i].CAMPO_114_3
        this.cancer.CAMPO_114_4 = this.CANCER[i].CAMPO_114_4
        this.cancer.CAMPO_114_5 = this.CANCER[i].CAMPO_114_5
        this.cancer.CAMPO_114_6 = this.CANCER[i].CAMPO_114_6
        this.cancer.CAMPO_115 = this.CANCER[i].CAMPO_115
        this.cancer.CAMPO_116 = this.CANCER[i].CAMPO_116
        this.cancer.CAMPO_117 = this.CANCER[i].CAMPO_117
        this.cancer.CAMPO_118 = this.CANCER[i].CAMPO_118
        this.cancer.CAMPO_119 = this.CANCER[i].CAMPO_119
        this.cancer.CAMPO_120 = this.CANCER[i].CAMPO_120
        this.cancer.CAMPO_121 = this.CANCER[i].CAMPO_121
        this.cancer.CAMPO_122 = this.CANCER[i].CAMPO_122
        this.cancer.CAMPO_123 = this.CANCER[i].CAMPO_123
        this.cancer.CAMPO_124 = this.CANCER[i].CAMPO_124
        this.cancer.CAMPO_125 = this.CANCER[i].CAMPO_125
        this.cancer.CAMPO_126 = this.CANCER[i].CAMPO_126
        this.cancer.CAMPO_127 = this.CANCER[i].CAMPO_127
        this.cancer.CAMPO_128 = this.CANCER[i].CAMPO_128
        this.cancer.CAMPO_129 = this.CANCER[i].CAMPO_129
        this.cancer.CAMPO_130 = this.CANCER[i].CAMPO_130
        this.cancer.CAMPO_131 = this.CANCER[i].CAMPO_131
        this.cancer.CAMPO_132 = this.CANCER[i].CAMPO_132
        this.cancer.CAMPO_133 = this.CANCER[i].CAMPO_133
        this.cancer.CAMPO_134 = this.CANCER[i].CAMPO_134

        let cancer_9 = this.CANCER[i].CAMPO_9.split('.')[0];
        if (cancer_9) {
          this.cancer.CAMPO_9 = cancer_9;
        } else {
          this.cancer.CAMPO_9 = this.CANCER[i].CAMPO_9
        }

        let cancer_14 = this.CANCER[i].CAMPO_14.split('.')[0];
        if (cancer_14) {
          this.cancer.CAMPO_14 = cancer_14;
        } else {
          this.cancer.CAMPO_14 = this.CANCER[i].CAMPO_14
        }

        let cancer_51 = this.CANCER[i].CAMPO_51.split('.')[0];
        if (cancer_51) {
          this.cancer.CAMPO_51 = cancer_51;
        } else {
          this.cancer.CAMPO_51 = this.CANCER[i].CAMPO_51
        }

        let cancer_52 = this.CANCER[i].CAMPO_52.split('.')[0];
        if (cancer_52) {
          this.cancer.CAMPO_52 = cancer_52;
        } else {
          this.cancer.CAMPO_52 = this.CANCER[i].CAMPO_52
        }

        let cancer_64 = this.CANCER[i].CAMPO_64.split('.')[0];
        if (cancer_64) {
          this.cancer.CAMPO_64 = cancer_64;
        } else {
          this.cancer.CAMPO_64 = this.CANCER[i].CAMPO_64
        }

        let cancer_65 = this.CANCER[i].CAMPO_65.split('.')[0];
        if (cancer_65) {
          this.cancer.CAMPO_65 = cancer_65;
        } else {
          this.cancer.CAMPO_65 = this.CANCER[i].CAMPO_65
        }

        let cancer_77 = this.CANCER[i].CAMPO_77.split('.')[0];
        if (cancer_77) {
          this.cancer.CAMPO_77 = cancer_77;
        } else {
          this.cancer.CAMPO_77 = this.CANCER[i].CAMPO_77
        }

        let cancer_82 = this.CANCER[i].CAMPO_82.split('.')[0];
        if (cancer_82) {
          this.cancer.CAMPO_82 = cancer_82;
        } else {
          this.cancer.CAMPO_82 = this.CANCER[i].CAMPO_82
        }

        let cancer_92 = this.CANCER[i].CAMPO_92.split('.')[0];
        if (cancer_92) {
          this.cancer.CAMPO_92 = cancer_92;
        } else {
          this.cancer.CAMPO_92 = this.CANCER[i].CAMPO_92
        }

        let cancer_93 = this.CANCER[i].CAMPO_93.split('.')[0];
        if (cancer_93) {
          this.cancer.CAMPO_93 = cancer_93;
        } else {
          this.cancer.CAMPO_93 = this.CANCER[i].CAMPO_93
        }

        let cancer_101 = this.CANCER[i].CAMPO_101.split('.')[0];
        if (cancer_101) {
          this.cancer.CAMPO_101 = cancer_101;
        } else {
          this.cancer.CAMPO_101 = this.CANCER[i].CAMPO_101
        }

        let cancer_102 = this.CANCER[i].CAMPO_102.split('.')[0];
        if (cancer_102) {
          this.cancer.CAMPO_102 = cancer_102;
        } else {
          this.cancer.CAMPO_102 = this.CANCER[i].CAMPO_102
        }

        let cancer_110 = this.CANCER[i].CAMPO_110.split('.')[0];
        if (cancer_110) {
          this.cancer.CAMPO_110 = cancer_110;
        } else {
          this.cancer.CAMPO_110 = this.CANCER[i].CAMPO_110
        }

        let cancer_113 = this.CANCER[i].CAMPO_113.split('.')[0];
        if (cancer_113) {
          this.cancer.CAMPO_113 = cancer_113;
        } else {
          this.cancer.CAMPO_113 = this.CANCER[i].CAMPO_113
        }

        let cancer_116 = this.CANCER[i].CAMPO_116.split('.')[0];
        if (cancer_116) {
          this.cancer.CAMPO_116 = cancer_116;
        } else {
          this.cancer.CAMPO_116 = this.CANCER[i].CAMPO_116
        }

        let cancer_119 = this.CANCER[i].CAMPO_119.split('.')[0];
        if (cancer_119) {
          this.cancer.CAMPO_119 = cancer_119;
        } else {
          this.cancer.CAMPO_119 = this.CANCER[i].CAMPO_119
        }

        let cancer_122 = this.CANCER[i].CAMPO_122.split('.')[0];
        if (cancer_122) {
          this.cancer.CAMPO_122 = cancer_122;
        } else {
          this.cancer.CAMPO_122 = this.CANCER[i].CAMPO_122
        }
      }

      this.cacCancerServiceService.validarRegistrosEdit(this.CC, this.cancer).subscribe(res => {
        console.log(this.CC)
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
  }


  GuardarRegistros() {
    
    if (this.validacionRegistro == true) {
      console.log(this.validacionRegistro +'entraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.GuardarDatosconValidacion()
    } else {
      console.log(' No           entraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.GuargarDatos();
    }
  }

  CAMPO_7(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de nacimiento debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_7 = this.cancer.CAMPO_7;
    }
  }

  CAMPO_16(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de afiliación a la EAPB que reporta debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_16 = this.cancer.CAMPO_16;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_16 = this.cancer.CAMPO_16;
    }
  }


  CAMPO_18(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de diagnóstico del cáncer reportado actualmente debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_18 = this.cancer.CAMPO_18;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_18 = this.cancer.CAMPO_18;
    }
  }


  CAMPO_19(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de la nota de remisión debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_19 = this.cancer.CAMPO_19;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_19 = this.cancer.CAMPO_19;
    }
  }


  CAMPO_20(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de ingreso a la institución debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_20 = this.cancer.CAMPO_20;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_20 = this.cancer.CAMPO_20;
    }
  }

  CAMPO_23(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de recolección de muestra para estudio histopatológico debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_23 = this.cancer.CAMPO_23;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_23 = this.cancer.CAMPO_23;
    }
  }

  CAMPO_24(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de informe histopatológico válido debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_24 = this.cancer.CAMPO_24;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_24 = this.cancer.CAMPO_24;
    }
  }

  CAMPO_26(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de primera consulta con médico tratante de la enfermedad maligna debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_26 = this.cancer.CAMPO_26;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_26 = this.cancer.CAMPO_26;

    }
  }

  CAMPO_30(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha en que se realizó esta estadificación debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_30 = this.cancer.CAMPO_30;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_30 = this.cancer.CAMPO_30;
    }
  }

  CAMPO_32(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de realización de la última prueba HER2 debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_32 = this.cancer.CAMPO_32;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_32 = this.cancer.CAMPO_32;
    }
  }

  CAMPO_35(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha en que se realizó la estadificación de Dukes debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_35 = this.cancer.CAMPO_35;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_35 = this.cancer.CAMPO_35;
    }
  }

  CAMPO_39(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de clasificación de riesgo debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_39 = this.cancer.CAMPO_39;
    }

    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_39 = this.cancer.CAMPO_39;
    }
  }

  CAMPO_43(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de diagnóstico del otro cáncer primario debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_43 = this.cancer.CAMPO_43;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_43 = this.cancer.CAMPO_43;
    }
  }

  CAMPO_49(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de inicio del primer ciclo de quimioterapia debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_49 = this.cancer.CAMPO_49;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_49 = this.cancer.CAMPO_49;
    }
  }

  CAMPO_58(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de finalización del primer ciclo debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_58 = this.cancer.CAMPO_58;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_58 = this.cancer.CAMPO_58;
    }
  }

  CAMPO_62(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de inicio del último ciclo de quimioterapia debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_62 = this.cancer.CAMPO_62;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_62 = this.cancer.CAMPO_62;
    }
  }

  CAMPO_71(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de finalización del último ciclo debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_71 = this.cancer.CAMPO_71;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_71 = this.cancer.CAMPO_71;
    }
  }

  CAMPO_76(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de realización de la primera cirugía debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_76 = this.cancer.CAMPO_76;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_76 = this.cancer.CAMPO_76;
    }
  }

  CAMPO_80(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de realización del último procedimiento quirúrgico o de reintervención debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_80 = this.cancer.CAMPO_80;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_80 = this.cancer.CAMPO_80;
    }
  }

  CAMPO_88(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de inicio de primer o único esquema de radioterapia suministrado debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_88 = this.cancer.CAMPO_88;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_88 = this.cancer.CAMPO_88;
    }
  }

  CAMPO_94(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de finalización de primer o único esquema de radioterapia debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_94 = this.cancer.CAMPO_94;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_94 = this.cancer.CAMPO_94;
    }
  }

  CAMPO_97(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de inicio del último esquema de radioterapia debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_97 = this.cancer.CAMPO_97;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_97 = this.cancer.CAMPO_97;
    }
  }

  CAMPO_103(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de finalización del último esquema de radioterapia debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_103 = this.cancer.CAMPO_103;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_103 = this.cancer.CAMPO_103;
    }
  }

  CAMPO_109(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de trasplante debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_109 = this.cancer.CAMPO_109;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_109 = this.cancer.CAMPO_109;
    }
  }

  CAMPO_112(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de cirugía debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_112 = this.cancer.CAMPO_112;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_112 = this.cancer.CAMPO_112;
    }
  }

  CAMPO_115(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de primera consulta o procedimiento de cuidado paliativo debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_115 = this.cancer.CAMPO_115;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_115 = this.cancer.CAMPO_115;
    }
  }

  CAMPO_118(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de primera consulta con el servicio de psiquiatría debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_118 = this.cancer.CAMPO_118;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_118 = this.cancer.CAMPO_118;
    }
  }

  CAMPO_121(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de consulta inicial con nutrición debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_121 = this.cancer.CAMPO_121;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_121 = this.cancer.CAMPO_121;
    }
  }

  CAMPO_130(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de desafiliación de la EPS debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_130 = this.cancer.CAMPO_130;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_130 = this.cancer.CAMPO_130;
    }
  }

  CAMPO_131(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de muerte debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_131 = this.cancer.CAMPO_131;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_131 = this.cancer.CAMPO_131;
    }
  }

  CAMPO_134(cancer) {
    var startDate = new Date(cancer);
    var today = new Date();
    if (startDate > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'la Fecha de Corte debe ser menor a la fecha actual',
      })
      this.CANCER[0].CAMPO_134 = this.cancer.CAMPO_134;
    }
    if (startDate < this.nacimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error en la fecha',
        text: 'La Fecha ingresada debe ser mayor a la fecha de nacimiento',
      })
      this.CANCER[0].CAMPO_134 = this.cancer.CAMPO_134;
    }
  }

  cargarCancer5() {
    this.opcionesListasCancerService.cargarCancer5().subscribe(res => {
      this.cancer5 = res;
    })
  }

  cargarCancer8() {
    this.opcionesListasCancerService.cargarCancer8().subscribe(res => {
      this.cancer8 = res;
    })
  }

  CargarOcupacion() {
    this.hemofiliaservice.CargarOcupacion().subscribe(res => {
      this.Ocupacion = res;
    })
  }

  cargarCancer10() {
    this.opcionesListasCancerService.cargarCancer10().subscribe(res => {
      this.cancer10 = res;
    })
  }


  cargarCancer12() {
    this.opcionesListasCancerService.cargarCancer12().subscribe(res => {
      this.cancer12 = res;
    })
  }


  cargarCancer13() {
    this.opcionesListasCancerService.cargarCancer13().subscribe(res => {
      this.cancer13 = res;
    })
  }

  CargarMunicipioresidencia() {
    this.hemofiliaservice.CargarMunicipioresidencia().subscribe(res => {
      this.municipioresidencia = res;
    })
  }

  cargarCancer21() {
    this.opcionesListasCancerService.cargarCancer21().subscribe(res => {
      this.cancer21 = res;
    })
  }


  cargarCancer22() {
    this.opcionesListasCancerService.cargarCancer22().subscribe(res => {
      this.cancer22 = res;
    })
  }


  cargarCancer25() {
    this.opcionesListasCancerService.cargarCancer25().subscribe(res => {
      this.cancer25 = res;
    })
  }


  cargarCancer27() {
    this.opcionesListasCancerService.cargarCancer27().subscribe(res => {
      this.cancer27 = res;
    })
  }


  cargarCancer28() {
    this.opcionesListasCancerService.cargarCancer28().subscribe(res => {
      this.cancer28 = res;
    })
  }


  cargarCancer31() {
    this.opcionesListasCancerService.cargarCancer31().subscribe(res => {
      this.cancer31 = res;
    })
  }


  cargarCancer33() {
    this.opcionesListasCancerService.cargarCancer33().subscribe(res => {
      this.cancer33 = res;
    })
  }


  cargarCancer34() {
    this.opcionesListasCancerService.cargarCancer34().subscribe(res => {
      this.cancer34 = res;
    })
  }


  cargarCancer36() {
    this.opcionesListasCancerService.cargarCancer36().subscribe(res => {
      this.cancer36 = res;
    })
  }


  cargarCancer37() {
    this.opcionesListasCancerService.cargarCancer37().subscribe(res => {
      this.cancer37 = res;
    })
  }

  cargarCancer38() {
    this.opcionesListasCancerService.cargarCancer38().subscribe(res => {
      this.cancer38 = res;
    })
  }

  cargarCancer40() {
    this.opcionesListasCancerService.cargarCancer40().subscribe(res => {
      this.cancer40 = res;
    })
  }

  cargarCancer41() {
    this.opcionesListasCancerService.cargarCancer41().subscribe(res => {
      this.cancer41 = res;
    })
  }


  cargarCancer42() {
    this.opcionesListasCancerService.cargarCancer42().subscribe(res => {
      this.cancer42 = res;
    })
  }


  cargarCancer44() {
    this.opcionesListasCancerService.cargarCancer44().subscribe(res => {
      this.cancer44 = res;
    })
  }


  cargarCancer45() {
    this.opcionesListasCancerService.cargarCancer45().subscribe(res => {
      this.cancer45 = res;
    })
  }


  cargarCancer46() {
    this.opcionesListasCancerService.cargarCancer46().subscribe(res => {
      this.cancer46 = res;
    })
  }


  cargarCancer46_1() {
    this.opcionesListasCancerService.cargarCancer46_1().subscribe(res => {
      this.cancer46_1 = res;
    })
  }


  cargarCancer46_2() {
    this.opcionesListasCancerService.cargarCancer46_2().subscribe(res => {
      this.cancer46_2 = res;
    })
  }


  cargarCancer46_3() {
    this.opcionesListasCancerService.cargarCancer46_3().subscribe(res => {
      this.cancer46_3 = res;
    })
  }


  cargarCancer46_4() {
    this.opcionesListasCancerService.cargarCancer46_4().subscribe(res => {
      this.cancer46_4 = res;
    })
  }


  cargarCancer46_5() {
    this.opcionesListasCancerService.cargarCancer46_5().subscribe(res => {
      this.cancer46_5 = res;
    })
  }


  cargarCancer46_6() {
    this.opcionesListasCancerService.cargarCancer46_6().subscribe(res => {
      this.cancer46_6 = res;
    })
  }


  cargarCancer46_7() {
    this.opcionesListasCancerService.cargarCancer46_7().subscribe(res => {
      this.cancer46_7 = res;
    })
  }


  cargarCancer46_8() {
    this.opcionesListasCancerService.cargarCancer46_8().subscribe(res => {
      this.cancer46_8 = res;
    })
  }


  cargarCancer47() {
    this.opcionesListasCancerService.cargarCancer47().subscribe(res => {
      this.cancer47 = res;
    })
  }


  cargarCancer48() {
    this.opcionesListasCancerService.cargarCancer48().subscribe(res => {
      this.cancer48 = res;
    })
  }


  cargarCancer50() {
    this.opcionesListasCancerService.cargarCancer50().subscribe(res => {
      this.cancer50 = res;
    })
  }


  cargarCancer51() {
    this.opcionesListasCancerService.cargarCancer51().subscribe(res => {
      this.cancer51 = res;
    })
  }


  cargarCancer52() {
    this.opcionesListasCancerService.cargarCancer52().subscribe(res => {
      this.cancer52 = res;
    })
  }


  cargarCancer53() {
    this.opcionesListasCancerService.cargarCancer53().subscribe(res => {
      this.cancer53 = res;
    })
  }


  cargarCancer53_1() {
    this.opcionesListasCancerService.cargarCancer53_1().subscribe(res => {
      this.cancer53_1 = res;
    })
  }


  cargarCancer53_2() {
    this.opcionesListasCancerService.cargarCancer53_2().subscribe(res => {
      this.cancer53_2 = res;
    })
  }


  cargarCancer53_3() {
    this.opcionesListasCancerService.cargarCancer53_3().subscribe(res => {
      this.cancer53_3 = res;
    })
  }


  cargarCancer53_4() {
    this.opcionesListasCancerService.cargarCancer53_4().subscribe(res => {
      this.cancer53_4 = res;
    })
  }


  cargarCancer53_5() {
    this.opcionesListasCancerService.cargarCancer53_5().subscribe(res => {
      this.cancer53_5 = res;
    })
  }


  cargarCancer53_6() {
    this.opcionesListasCancerService.cargarCancer53_6().subscribe(res => {
      this.cancer53_6 = res;
    })
  }


  cargarCancer53_7() {
    this.opcionesListasCancerService.cargarCancer53_7().subscribe(res => {
      this.cancer53_7 = res;
    })
  }


  cargarCancer53_8() {
    this.opcionesListasCancerService.cargarCancer53_8().subscribe(res => {
      this.cancer53_8 = res;
    })
  }


  cargarCancer53_9() {
    this.opcionesListasCancerService.cargarCancer53_9().subscribe(res => {
      this.cancer53_9 = res;
    })
  }


  cargarCancer54() {
    this.opcionesListasCancerService.cargarCancer54().subscribe(res => {
      this.cancer54 = res;
    })
  }


  cargarCancer55() {
    this.opcionesListasCancerService.cargarCancer55().subscribe(res => {
      this.cancer55 = res;
    })
  }


  cargarCancer56() {
    this.opcionesListasCancerService.cargarCancer56().subscribe(res => {
      this.cancer56 = res;
    })
  }


  cargarCancer57() {
    this.opcionesListasCancerService.cargarCancer57().subscribe(res => {
      this.cancer57 = res;
    })
  }


  cargarCancer59() {
    this.opcionesListasCancerService.cargarCancer59().subscribe(res => {
      this.cancer59 = res;
    })
  }


  cargarCancer60() {
    this.opcionesListasCancerService.cargarCancer60().subscribe(res => {
      this.cancer60 = res;
    })
  }


  cargarCancer61() {
    this.opcionesListasCancerService.cargarCancer61().subscribe(res => {
      this.cancer61 = res;
    })
  }


  cargarCancer63() {
    this.opcionesListasCancerService.cargarCancer63().subscribe(res => {
      this.cancer63 = res;
    })
  }


  cargarCancer64() {
    this.opcionesListasCancerService.cargarCancer64().subscribe(res => {
      this.cancer64 = res;
    })
  }


  cargarCancer65() {
    this.opcionesListasCancerService.cargarCancer65().subscribe(res => {
      this.cancer65 = res;
    })
  }


  cargarCancer66() {
    this.opcionesListasCancerService.cargarCancer66().subscribe(res => {
      this.cancer66 = res;
    })
  }


  cargarCancer66_1() {
    this.opcionesListasCancerService.cargarCancer66_1().subscribe(res => {
      this.cancer66_1 = res;
    })
  }


  cargarCancer66_2() {
    this.opcionesListasCancerService.cargarCancer66_2().subscribe(res => {
      this.cancer66_2 = res;
    })
  }


  cargarCancer66_3() {
    this.opcionesListasCancerService.cargarCancer66_3().subscribe(res => {
      this.cancer66_3 = res;
    })
  }


  cargarCancer66_4() {
    this.opcionesListasCancerService.cargarCancer66_4().subscribe(res => {
      this.cancer66_4 = res;
    })
  }


  cargarCancer66_5() {
    this.opcionesListasCancerService.cargarCancer66_5().subscribe(res => {
      this.cancer66_5 = res;
    })
  }


  cargarCancer66_6() {
    this.opcionesListasCancerService.cargarCancer66_6().subscribe(res => {
      this.cancer66_6 = res;
    })
  }


  cargarCancer66_7() {
    this.opcionesListasCancerService.cargarCancer66_7().subscribe(res => {
      this.cancer66_7 = res;
    })
  }


  cargarCancer66_8() {
    this.opcionesListasCancerService.cargarCancer66_8().subscribe(res => {
      this.cancer66_8 = res;
    })
  }


  cargarCancer66_9() {
    this.opcionesListasCancerService.cargarCancer66_9().subscribe(res => {
      this.cancer66_9 = res;
    })
  }


  cargarCancer67() {
    this.opcionesListasCancerService.cargarCancer67().subscribe(res => {
      this.cancer67 = res;
    })
  }


  cargarCancer68() {
    this.opcionesListasCancerService.cargarCancer68().subscribe(res => {
      this.cancer68 = res;
    })
  }


  cargarCancer69() {
    this.opcionesListasCancerService.cargarCancer69().subscribe(res => {
      this.cancer69 = res;
    })
  }


  cargarCancer70() {
    this.opcionesListasCancerService.cargarCancer70().subscribe(res => {
      this.cancer70 = res;
    })
  }


  cargarCancer72() {
    this.opcionesListasCancerService.cargarCancer72().subscribe(res => {
      this.cancer72 = res;
    })
  }


  cargarCancer73() {
    this.opcionesListasCancerService.cargarCancer73().subscribe(res => {
      this.cancer73 = res;
    })
  }


  cargarCancer74() {
    this.opcionesListasCancerService.cargarCancer74().subscribe(res => {
      this.cancer74 = res;
    })
  }


  cargarCancer75() {
    this.opcionesListasCancerService.cargarCancer75().subscribe(res => {
      this.cancer75 = res;
    })
  }


  cargarCancer77() {
    this.opcionesListasCancerService.cargarCancer77().subscribe(res => {
      this.cancer77 = res;
    })
  }


  cargarCancer78() {
    this.opcionesListasCancerService.cargarCancer78().subscribe(res => {
      this.cancer78 = res;
    })
  }


  cargarCancer79() {
    this.opcionesListasCancerService.cargarCancer79().subscribe(res => {
      this.cancer79 = res;
    })
  }


  cargarCancer81() {
    this.opcionesListasCancerService.cargarCancer81().subscribe(res => {
      this.cancer81 = res;
    })
  }


  cargarCancer82() {
    this.opcionesListasCancerService.cargarCancer82().subscribe(res => {
      this.cancer82 = res;
    })
  }


  cargarCancer83() {
    this.opcionesListasCancerService.cargarCancer83().subscribe(res => {
      this.cancer83 = res;
    })
  }


  cargarCancer84() {
    this.opcionesListasCancerService.cargarCancer84().subscribe(res => {
      this.cancer84 = res;
    })
  }


  cargarCancer85() {
    this.opcionesListasCancerService.cargarCancer85().subscribe(res => {
      this.cancer85 = res;
    })
  }


  cargarCancer86() {
    this.opcionesListasCancerService.cargarCancer86().subscribe(res => {
      this.cancer86 = res;
    })
  }


  cargarCancer87() {
    this.opcionesListasCancerService.cargarCancer87().subscribe(res => {
      this.cancer87 = res;
    })
  }


  cargarCancer89() {
    this.opcionesListasCancerService.cargarCancer89().subscribe(res => {
      this.cancer89 = res;
    })
  }


  cargarCancer90() {
    this.opcionesListasCancerService.cargarCancer90().subscribe(res => {
      this.cancer90 = res;
    })
  }


  cargarCancer91() {
    this.opcionesListasCancerService.cargarCancer91().subscribe(res => {
      this.cancer91 = res;
    })
  }


  cargarCancer92() {
    this.opcionesListasCancerService.cargarCancer92().subscribe(res => {
      this.cancer92 = res;
    })
  }


  cargarCancer93() {
    this.opcionesListasCancerService.cargarCancer93().subscribe(res => {
      this.cancer93 = res;
    })
  }


  cargarCancer95() {
    this.opcionesListasCancerService.cargarCancer95().subscribe(res => {
      this.cancer95 = res;
    })
  }


  cargarCancer96() {
    this.opcionesListasCancerService.cargarCancer96().subscribe(res => {
      this.cancer96 = res;
    })
  }


  cargarCancer98() {
    this.opcionesListasCancerService.cargarCancer98().subscribe(res => {
      this.cancer98 = res;
    })
  }


  cargarCancer99() {
    this.opcionesListasCancerService.cargarCancer99().subscribe(res => {
      this.cancer99 = res;
    })
  }


  cargarCancer100() {
    this.opcionesListasCancerService.cargarCancer100().subscribe(res => {
      this.cancer100 = res;
    })
  }


  cargarCancer101() {
    this.opcionesListasCancerService.cargarCancer101().subscribe(res => {
      this.cancer101 = res;
    })
  }


  cargarCancer102() {
    this.opcionesListasCancerService.cargarCancer102().subscribe(res => {
      this.cancer102 = res;
    })
  }


  cargarCancer104() {
    this.opcionesListasCancerService.cargarCancer104().subscribe(res => {
      this.cancer104 = res;
    })
  }


  cargarCancer105() {
    this.opcionesListasCancerService.cargarCancer105().subscribe(res => {
      this.cancer105 = res;
    })
  }


  cargarCancer106() {
    this.opcionesListasCancerService.cargarCancer106().subscribe(res => {
      this.cancer106 = res;
    })
  }


  cargarCancer107() {
    this.opcionesListasCancerService.cargarCancer107().subscribe(res => {
      this.cancer107 = res;
    })
  }


  cargarCancer108() {
    this.opcionesListasCancerService.cargarCancer108().subscribe(res => {
      this.cancer108 = res;
    })
  }


  cargarCancer110() {
    this.opcionesListasCancerService.cargarCancer110().subscribe(res => {
      this.cancer110 = res;
    })
  }


  cargarCancer111() {
    this.opcionesListasCancerService.cargarCancer111().subscribe(res => {
      this.cancer111 = res;
    })
  }


  cargarCancer113() {
    this.opcionesListasCancerService.cargarCancer113().subscribe(res => {
      this.cancer113 = res;
    })
  }


  cargarCancer114() {
    this.opcionesListasCancerService.cargarCancer114().subscribe(res => {
      this.cancer114 = res;
    })
  }


  cargarCancer114_1() {
    this.opcionesListasCancerService.cargarCancer114_1().subscribe(res => {
      this.cancer114_1 = res;
    })
  }


  cargarCancer114_2() {
    this.opcionesListasCancerService.cargarCancer114_2().subscribe(res => {
      this.cancer114_2 = res;
    })
  }


  cargarCancer114_3() {
    this.opcionesListasCancerService.cargarCancer114_3().subscribe(res => {
      this.cancer114_3 = res;
    })
  }


  cargarCancer114_4() {
    this.opcionesListasCancerService.cargarCancer114_4().subscribe(res => {
      this.cancer114_4 = res;
    })
  }


  cargarCancer114_5() {
    this.opcionesListasCancerService.cargarCancer114_5().subscribe(res => {
      this.cancer114_5 = res;
    })
  }


  cargarCancer114_6() {
    this.opcionesListasCancerService.cargarCancer114_6().subscribe(res => {
      this.cancer114_6 = res;
    })
  }


  cargarCancer116() {
    this.opcionesListasCancerService.cargarCancer116().subscribe(res => {
      this.cancer116 = res;
    })
  }


  cargarCancer117() {
    this.opcionesListasCancerService.cargarCancer117().subscribe(res => {
      this.cancer117 = res;
    })
  }


  cargarCancer119() {
    this.opcionesListasCancerService.cargarCancer119().subscribe(res => {
      this.cancer119 = res;
    })
  }


  cargarCancer120() {
    this.opcionesListasCancerService.cargarCancer120().subscribe(res => {
      this.cancer120 = res;
    })
  }


  cargarCancer122() {
    this.opcionesListasCancerService.cargarCancer122().subscribe(res => {
      this.cancer122 = res;
    })
  }


  cargarCancer123() {
    this.opcionesListasCancerService.cargarCancer123().subscribe(res => {
      this.cancer123 = res;
    })
  }


  cargarCancer124() {
    this.opcionesListasCancerService.cargarCancer124().subscribe(res => {
      this.cancer124 = res;
    })
  }


  cargarCancer125() {
    this.opcionesListasCancerService.cargarCancer125().subscribe(res => {
      this.cancer125 = res;
    })
  }


  cargarCancer126() {
    this.opcionesListasCancerService.cargarCancer126().subscribe(res => {
      this.cancer126 = res;
    })
  }


  cargarCancer127() {
    this.opcionesListasCancerService.cargarCancer127().subscribe(res => {
      this.cancer127 = res;
    })
  }


  cargarCancer128() {
    this.opcionesListasCancerService.cargarCancer128().subscribe(res => {
      this.cancer128 = res;
    })
  }


  cargarCancer129() {
    this.opcionesListasCancerService.cargarCancer129().subscribe(res => {
      this.cancer129 = res;
    })
  }


  cargarCancer132() {
    this.opcionesListasCancerService.cargarCancer132().subscribe(res => {
      this.cancer132 = res;
    })
  }

  cargarErrores() {
    this.LogsErroresCancerService.cargarErroresFrm(this.CC).subscribe(res => {
      this.Cancerlist = res;
      console.log(this.Cancerlist)
    })
  }

  openLg(content) {
    this. cargarErrores();
    this.modalService.open(content, { size: 'lg', scrollable: true });
  }
  soporte() {
    this.tabs.crearTab('Soporte', 'Cancer-soporte/' + this.CC);
  }

}
