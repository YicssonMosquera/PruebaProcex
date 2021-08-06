import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import keys from '../../../keys'

@Injectable({
  providedIn: 'root'
})
export class OpcionesListasCancerService {
  API_URI = keys.api.API_URI + '/opcionesListasCancer';

  constructor(private http: HttpClient) { }

  
  cargarCancer5() {
    return this.http.get(`${this.API_URI}/C4_CAMPO_5`)
  }

  cargarCancer8() {
    return this.http.get(`${this.API_URI}/C7_CAMPO_8`)
  }

  cargarCancer10() {
    return this.http.get(`${this.API_URI}/C9_CAMPO_10`)
  }

  cargarCancer12() {
    return this.http.get(`${this.API_URI}/C11_CAMPO_12`)
  }

  cargarCancer13() {
    return this.http.get(`${this.API_URI}/C12_CAMPO_13`)
  }

  cargarCancer21() {
    return this.http.get(`${this.API_URI}/C20_CAMPO_21`)
  }

  cargarCancer22() {
    return this.http.get(`${this.API_URI}/C21_CAMPO_22`)
  }

  cargarCancer25() {
    return this.http.get(`${this.API_URI}/C24_CAMPO_25`)
  }

  cargarCancer27() {
    return this.http.get(`${this.API_URI}/C26_CAMPO_27`)
  }

  cargarCancer28() {
    return this.http.get(`${this.API_URI}/C27_CAMPO_28`)
  }

  cargarCancer31() {
    return this.http.get(`${this.API_URI}/C30_CAMPO_31`)
  }

  cargarCancer33() {
    return this.http.get(`${this.API_URI}/C32_CAMPO_33`)
  }

  cargarCancer34() {
    return this.http.get(`${this.API_URI}/C33_CAMPO_34`)
  }

  cargarCancer36() {
    return this.http.get(`${this.API_URI}/C35_CAMPO_36`)
  }

  cargarCancer37() {
    return this.http.get(`${this.API_URI}/C36_CAMPO_37`)
  }

  cargarCancer38() {
    return this.http.get(`${this.API_URI}/C37_CAMPO_38`)
  }

  cargarCancer40() {
    return this.http.get(`${this.API_URI}/C39_CAMPO_40`)
  }

  cargarCancer41() {
    return this.http.get(`${this.API_URI}/C40_CAMPO_41`)
  }

  cargarCancer42() {
    return this.http.get(`${this.API_URI}/C41_CAMPO_42`)
  }

  cargarCancer44() {
    return this.http.get(`${this.API_URI}/C43_CAMPO_44`)
  }

  cargarCancer45() {
    return this.http.get(`${this.API_URI}/C44_CAMPO_45`)
  }

  cargarCancer46() {
    return this.http.get(`${this.API_URI}/C45_CAMPO_46`)
  }

  cargarCancer46_1() {
    return this.http.get(`${this.API_URI}/C46_CAMPO_46_1`)
  }

  cargarCancer46_2() {
    return this.http.get(`${this.API_URI}/C47_CAMPO_46_2`)
  }

  cargarCancer46_3() {
    return this.http.get(`${this.API_URI}/C48_CAMPO_46_3`)
  }

  cargarCancer46_4() {
    return this.http.get(`${this.API_URI}/C49_CAMPO_46_4`)
  }

  cargarCancer46_5() {
    return this.http.get(`${this.API_URI}/C50_CAMPO_46_5`)
  }

  cargarCancer46_6() {
    return this.http.get(`${this.API_URI}/C51_CAMPO_46_6`)
  }

  cargarCancer46_7() {
    return this.http.get(`${this.API_URI}/C52_CAMPO_46_7`)
  }

  cargarCancer46_8() {
    return this.http.get(`${this.API_URI}/C53_CAMPO_46_8`)
  }

  cargarCancer47() {
    return this.http.get(`${this.API_URI}/C54_CAMPO_47`)
  }

  cargarCancer48() {
    return this.http.get(`${this.API_URI}/C55_CAMPO_48`)
  }

  cargarCancer50() {
    return this.http.get(`${this.API_URI}/C57_CAMPO_50`)
  }

  cargarCancer51() {
    return this.http.get(`${this.API_URI}/C58_CAMPO_51`)
  }

  cargarCancer52() {
    return this.http.get(`${this.API_URI}/C59_CAMPO_52`)
  }

  cargarCancer53() {
    return this.http.get(`${this.API_URI}/C60_CAMPO_53`)
  }

  cargarCancer53_1() {
    return this.http.get(`${this.API_URI}/C61_CAMPO_53_1`)
  }

  cargarCancer53_2() {
    return this.http.get(`${this.API_URI}/C62_CAMPO_53_2`)
  }

  cargarCancer53_3() {
    return this.http.get(`${this.API_URI}/C63_CAMPO_53_3`)
  }

  cargarCancer53_4() {
    return this.http.get(`${this.API_URI}/C64_CAMPO_53_4`)
  }

  cargarCancer53_5() {
    return this.http.get(`${this.API_URI}/C65_CAMPO_53_5`)
  }

  cargarCancer53_6() {
    return this.http.get(`${this.API_URI}/C66_CAMPO_53_6`)
  }

  cargarCancer53_7() {
    return this.http.get(`${this.API_URI}/C67_CAMPO_53_7`)
  }

  cargarCancer53_8() {
    return this.http.get(`${this.API_URI}/C68_CAMPO_53_8`)
  }

  cargarCancer53_9() {
    return this.http.get(`${this.API_URI}/C69_CAMPO_53_9`)
  }

  cargarCancer54() {
    return this.http.get(`${this.API_URI}/C70_CAMPO_54`)
  }

  cargarCancer55() {
    return this.http.get(`${this.API_URI}/C71_CAMPO_55`)
  }

  cargarCancer56() {
    return this.http.get(`${this.API_URI}/C72_CAMPO_56`)
  }

  cargarCancer57() {
    return this.http.get(`${this.API_URI}/C73_CAMPO_57`)
  }

  cargarCancer59() {
    return this.http.get(`${this.API_URI}/C75_CAMPO_59`)
  }

  cargarCancer60() {
    return this.http.get(`${this.API_URI}/C76_CAMPO_60`)
  }

  cargarCancer61() {
    return this.http.get(`${this.API_URI}/C77_CAMPO_61`)
  }

  cargarCancer63() {
    return this.http.get(`${this.API_URI}/C79_CAMPO_63`)
  }

  cargarCancer64() {
    return this.http.get(`${this.API_URI}/C80_CAMPO_64`)
  }

  cargarCancer65() {
    return this.http.get(`${this.API_URI}/C81_CAMPO_65`)
  }

  cargarCancer66() {
    return this.http.get(`${this.API_URI}/C82_CAMPO_66`)
  }

  cargarCancer66_1() {
    return this.http.get(`${this.API_URI}/C83_CAMPO_66_1`)
  }

  cargarCancer66_2() {
    return this.http.get(`${this.API_URI}/C84_CAMPO_66_2`)
  }

  cargarCancer66_3() {
    return this.http.get(`${this.API_URI}/C85_CAMPO_66_3`)
  }

  cargarCancer66_4() {
    return this.http.get(`${this.API_URI}/C86_CAMPO_66_4`)
  }

  cargarCancer66_5() {
    return this.http.get(`${this.API_URI}/C87_CAMPO_66_5`)
  }

  cargarCancer66_6() {
    return this.http.get(`${this.API_URI}/C88_CAMPO_66_6`)
  }

  cargarCancer66_7() {
    return this.http.get(`${this.API_URI}/C89_CAMPO_66_7`)
  }

  cargarCancer66_8() {
    return this.http.get(`${this.API_URI}/C90_CAMPO_66_8`)
  }

  cargarCancer66_9() {
    return this.http.get(`${this.API_URI}/C91_CAMPO_66_9`)
  }

  cargarCancer67() {
    return this.http.get(`${this.API_URI}/C92_CAMPO_67`)
  }

  cargarCancer68() {
    return this.http.get(`${this.API_URI}/C93_CAMPO_68`)
  }

  cargarCancer69() {
    return this.http.get(`${this.API_URI}/C94_CAMPO_69`)
  }

  cargarCancer70() {
    return this.http.get(`${this.API_URI}/C95_CAMPO_70`)
  }

  cargarCancer72() {
    return this.http.get(`${this.API_URI}/C97_CAMPO_72`)
  }

  cargarCancer73() {
    return this.http.get(`${this.API_URI}/C98_CAMPO_73`)
  }

  cargarCancer74() {
    return this.http.get(`${this.API_URI}/C99_CAMPO_74`)
  }

  cargarCancer75() {
    return this.http.get(`${this.API_URI}/C100_CAMPO_75`)
  }

  cargarCancer77() {
    return this.http.get(`${this.API_URI}/C102_CAMPO_77`)
  }

  cargarCancer78() {
    return this.http.get(`${this.API_URI}/C103_CAMPO_78`)
  }

  cargarCancer79() {
    return this.http.get(`${this.API_URI}/C104_CAMPO_79`)
  }

  cargarCancer81() {
    return this.http.get(`${this.API_URI}/C106_CAMPO_81`)
  }

  cargarCancer82() {
    return this.http.get(`${this.API_URI}/C107_CAMPO_82`)
  }

  cargarCancer83() {
    return this.http.get(`${this.API_URI}/C108_CAMPO_83`)
  }

  cargarCancer84() {
    return this.http.get(`${this.API_URI}/C109_CAMPO_84`)
  }

  cargarCancer85() {
    return this.http.get(`${this.API_URI}/C110_CAMPO_85`)
  }

  cargarCancer86() {
    return this.http.get(`${this.API_URI}/C111_CAMPO_86`)
  }

  cargarCancer87() {
    return this.http.get(`${this.API_URI}/C112_CAMPO_87`)
  }

  cargarCancer89() {
    return this.http.get(`${this.API_URI}/C114_CAMPO_89`)
  }

  cargarCancer90() {
    return this.http.get(`${this.API_URI}/C115_CAMPO_90`)
  }

  cargarCancer91() {
    return this.http.get(`${this.API_URI}/C116_CAMPO_91`)
  }

  cargarCancer92() {
    return this.http.get(`${this.API_URI}/C117_CAMPO_92`)
  }

  cargarCancer93() {
    return this.http.get(`${this.API_URI}/C118_CAMPO_93`)
  }

  cargarCancer95() {
    return this.http.get(`${this.API_URI}/C120_CAMPO_95`)
  }

  cargarCancer96() {
    return this.http.get(`${this.API_URI}/C121_CAMPO_96`)
  }

  cargarCancer98() {
    return this.http.get(`${this.API_URI}/C123_CAMPO_98`)
  }

  cargarCancer99() {
    return this.http.get(`${this.API_URI}/C124_CAMPO_99`)
  }

  cargarCancer100() {
    return this.http.get(`${this.API_URI}/C125_CAMPO_100`)
  }

  cargarCancer101() {
    return this.http.get(`${this.API_URI}/C126_CAMPO_101`)
  }

  cargarCancer102() {
    return this.http.get(`${this.API_URI}/C127_CAMPO_102`)
  }

  cargarCancer104() {
    return this.http.get(`${this.API_URI}/C129_CAMPO_104`)
  }

  cargarCancer105() {
    return this.http.get(`${this.API_URI}/C130_CAMPO_105`)
  }

  cargarCancer106() {
    return this.http.get(`${this.API_URI}/C131_CAMPO_106`)
  }

  cargarCancer107() {
    return this.http.get(`${this.API_URI}/C132_CAMPO_107`)
  }

  cargarCancer108() {
    return this.http.get(`${this.API_URI}/C133_CAMPO_108`)
  }

  cargarCancer110() {
    return this.http.get(`${this.API_URI}/C135_CAMPO_110`)
  }

  cargarCancer111() {
    return this.http.get(`${this.API_URI}/C136_CAMPO_111`)
  }

  cargarCancer113() {
    return this.http.get(`${this.API_URI}/C138_CAMPO_113`)
  }

  cargarCancer114() {
    return this.http.get(`${this.API_URI}/C139_CAMPO_114`)
  }

  cargarCancer114_1() {
    return this.http.get(`${this.API_URI}/C140_CAMPO_114_1`)
  }

  cargarCancer114_2() {
    return this.http.get(`${this.API_URI}/C141_CAMPO_114_2`)
  }

  cargarCancer114_3() {
    return this.http.get(`${this.API_URI}/C142_CAMPO_114_3`)
  }

  cargarCancer114_4() {
    return this.http.get(`${this.API_URI}/C143_CAMPO_114_4`)
  }

  cargarCancer114_5() {
    return this.http.get(`${this.API_URI}/C144_CAMPO_114_5`)
  }

  cargarCancer114_6() {
    return this.http.get(`${this.API_URI}/C145_CAMPO_114_6`)
  }

  cargarCancer116() {
    return this.http.get(`${this.API_URI}/C147_CAMPO_116`)
  }

  cargarCancer117() {
    return this.http.get(`${this.API_URI}/C148_CAMPO_117`)
  }

  cargarCancer119() {
    return this.http.get(`${this.API_URI}/C150_CAMPO_119`)
  }

  cargarCancer120() {
    return this.http.get(`${this.API_URI}/C151_CAMPO_120`)
  }

  cargarCancer122() {
    return this.http.get(`${this.API_URI}/C153_CAMPO_122`)
  }

  cargarCancer123() {
    return this.http.get(`${this.API_URI}/C154_CAMPO_123`)
  }

  cargarCancer124() {
    return this.http.get(`${this.API_URI}/C155_CAMPO_124`)
  }

  cargarCancer125() {
    return this.http.get(`${this.API_URI}/C156_CAMPO_125`)
  }

  cargarCancer126() {
    return this.http.get(`${this.API_URI}/C157_CAMPO_126`)
  }

  cargarCancer127() {
    return this.http.get(`${this.API_URI}/C158_CAMPO_127`)
  }

  cargarCancer128() {
    return this.http.get(`${this.API_URI}/C159_CAMPO_128`)
  }

  cargarCancer129() {
    return this.http.get(`${this.API_URI}/C160_CAMPO_129`)
  }

  cargarCancer132() {
    return this.http.get(`${this.API_URI}/C163_CAMPO_132`)
  }


}
