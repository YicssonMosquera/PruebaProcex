import { Router } from 'express'
import { opciones_listasCancerController } from '../controller/opciones_listasCancerControllers';

class BdopcionesListasCANCERroutes {
    public router: Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/C4_CAMPO_5',opciones_listasCancerController.cancer5);
        this.router.get('/C7_CAMPO_8',opciones_listasCancerController.cancer8);
        this.router.get('/C9_CAMPO_10',opciones_listasCancerController.cancer10);
        this.router.get('/C11_CAMPO_12',opciones_listasCancerController.cancer12);
        this.router.get('/C12_CAMPO_13',opciones_listasCancerController.cancer13);
        this.router.get('/C20_CAMPO_21',opciones_listasCancerController.cancer21);
        this.router.get('/C21_CAMPO_22',opciones_listasCancerController.cancer22);
        this.router.get('/C24_CAMPO_25',opciones_listasCancerController.cancer25);
        this.router.get('/C26_CAMPO_27',opciones_listasCancerController.cancer27);
        this.router.get('/C27_CAMPO_28',opciones_listasCancerController.cancer28);
        this.router.get('/C30_CAMPO_31',opciones_listasCancerController.cancer31);
        this.router.get('/C32_CAMPO_33',opciones_listasCancerController.cancer33);
        this.router.get('/C33_CAMPO_34',opciones_listasCancerController.cancer34);
        this.router.get('/C35_CAMPO_36',opciones_listasCancerController.cancer36);
        this.router.get('/C36_CAMPO_37',opciones_listasCancerController.cancer37);
        this.router.get('/C37_CAMPO_38',opciones_listasCancerController.cancer38);
        this.router.get('/C39_CAMPO_40',opciones_listasCancerController.cancer40);
        this.router.get('/C40_CAMPO_41',opciones_listasCancerController.cancer41);
        this.router.get('/C41_CAMPO_42',opciones_listasCancerController.cancer42);
        this.router.get('/C43_CAMPO_44',opciones_listasCancerController.cancer44);
        this.router.get('/C44_CAMPO_45',opciones_listasCancerController.cancer45);
        this.router.get('/C45_CAMPO_46',opciones_listasCancerController.cancer46);
        this.router.get('/C46_CAMPO_46_1',opciones_listasCancerController.cancer46_1);
        this.router.get('/C47_CAMPO_46_2',opciones_listasCancerController.cancer46_2);
        this.router.get('/C48_CAMPO_46_3',opciones_listasCancerController.cancer46_3);
        this.router.get('/C49_CAMPO_46_4',opciones_listasCancerController.cancer46_4);
        this.router.get('/C50_CAMPO_46_5',opciones_listasCancerController.cancer46_5);
        this.router.get('/C51_CAMPO_46_6',opciones_listasCancerController.cancer46_6);
        this.router.get('/C52_CAMPO_46_7',opciones_listasCancerController.cancer46_7);
        this.router.get('/C53_CAMPO_46_8',opciones_listasCancerController.cancer46_8);
        this.router.get('/C54_CAMPO_47',opciones_listasCancerController.cancer47);
        this.router.get('/C55_CAMPO_48',opciones_listasCancerController.cancer48);
        this.router.get('/C57_CAMPO_50',opciones_listasCancerController.cancer50);
        this.router.get('/C58_CAMPO_51',opciones_listasCancerController.cancer51);
        this.router.get('/C59_CAMPO_52',opciones_listasCancerController.cancer52);
        this.router.get('/C60_CAMPO_53',opciones_listasCancerController.cancer53);
        this.router.get('/C61_CAMPO_53_1',opciones_listasCancerController.cancer53_1);
        this.router.get('/C62_CAMPO_53_2',opciones_listasCancerController.cancer53_2);
        this.router.get('/C63_CAMPO_53_3',opciones_listasCancerController.cancer53_3);
        this.router.get('/C64_CAMPO_53_4',opciones_listasCancerController.cancer53_4);
        this.router.get('/C65_CAMPO_53_5',opciones_listasCancerController.cancer53_5);
        this.router.get('/C66_CAMPO_53_6',opciones_listasCancerController.cancer53_6);
        this.router.get('/C67_CAMPO_53_7',opciones_listasCancerController.cancer53_7);
        this.router.get('/C68_CAMPO_53_8',opciones_listasCancerController.cancer53_8);
        this.router.get('/C69_CAMPO_53_9',opciones_listasCancerController.cancer53_9);
        this.router.get('/C70_CAMPO_54',opciones_listasCancerController.cancer54);
        this.router.get('/C71_CAMPO_55',opciones_listasCancerController.cancer55);
        this.router.get('/C72_CAMPO_56',opciones_listasCancerController.cancer56);
        this.router.get('/C73_CAMPO_57',opciones_listasCancerController.cancer57);
        this.router.get('/C75_CAMPO_59',opciones_listasCancerController.cancer59);
        this.router.get('/C76_CAMPO_60',opciones_listasCancerController.cancer60);
        this.router.get('/C77_CAMPO_61',opciones_listasCancerController.cancer61);
        this.router.get('/C79_CAMPO_63',opciones_listasCancerController.cancer63);
        this.router.get('/C80_CAMPO_64',opciones_listasCancerController.cancer64);
        this.router.get('/C81_CAMPO_65',opciones_listasCancerController.cancer65);
        this.router.get('/C82_CAMPO_66',opciones_listasCancerController.cancer66);
        this.router.get('/C83_CAMPO_66_1',opciones_listasCancerController.cancer66_1);
        this.router.get('/C84_CAMPO_66_2',opciones_listasCancerController.cancer66_2);
        this.router.get('/C85_CAMPO_66_3',opciones_listasCancerController.cancer66_3);
        this.router.get('/C86_CAMPO_66_4',opciones_listasCancerController.cancer66_4);
        this.router.get('/C87_CAMPO_66_5',opciones_listasCancerController.cancer66_5);
        this.router.get('/C88_CAMPO_66_6',opciones_listasCancerController.cancer66_6);
        this.router.get('/C89_CAMPO_66_7',opciones_listasCancerController.cancer66_7);
        this.router.get('/C90_CAMPO_66_8',opciones_listasCancerController.cancer66_8);
        this.router.get('/C91_CAMPO_66_9',opciones_listasCancerController.cancer66_9);
        this.router.get('/C92_CAMPO_67',opciones_listasCancerController.cancer67);
        this.router.get('/C93_CAMPO_68',opciones_listasCancerController.cancer68);
        this.router.get('/C94_CAMPO_69',opciones_listasCancerController.cancer69);
        this.router.get('/C95_CAMPO_70',opciones_listasCancerController.cancer70);
        this.router.get('/C97_CAMPO_72',opciones_listasCancerController.cancer72);
        this.router.get('/C98_CAMPO_73',opciones_listasCancerController.cancer73);
        this.router.get('/C99_CAMPO_74',opciones_listasCancerController.cancer74);
        this.router.get('/C100_CAMPO_75',opciones_listasCancerController.cancer75);
        this.router.get('/C102_CAMPO_77',opciones_listasCancerController.cancer77);
        this.router.get('/C103_CAMPO_78',opciones_listasCancerController.cancer78);
        this.router.get('/C104_CAMPO_79',opciones_listasCancerController.cancer79);
        this.router.get('/C106_CAMPO_81',opciones_listasCancerController.cancer81);
        this.router.get('/C107_CAMPO_82',opciones_listasCancerController.cancer82);
        this.router.get('/C108_CAMPO_83',opciones_listasCancerController.cancer83);
        this.router.get('/C109_CAMPO_84',opciones_listasCancerController.cancer84);
        this.router.get('/C110_CAMPO_85',opciones_listasCancerController.cancer85);
        this.router.get('/C111_CAMPO_86',opciones_listasCancerController.cancer86);
        this.router.get('/C112_CAMPO_87',opciones_listasCancerController.cancer87);
        this.router.get('/C114_CAMPO_89',opciones_listasCancerController.cancer89);
        this.router.get('/C115_CAMPO_90',opciones_listasCancerController.cancer90);
        this.router.get('/C116_CAMPO_91',opciones_listasCancerController.cancer91);
        this.router.get('/C117_CAMPO_92',opciones_listasCancerController.cancer92);
        this.router.get('/C118_CAMPO_93',opciones_listasCancerController.cancer93);
        this.router.get('/C120_CAMPO_95',opciones_listasCancerController.cancer95);
        this.router.get('/C121_CAMPO_96',opciones_listasCancerController.cancer96);
        this.router.get('/C123_CAMPO_98',opciones_listasCancerController.cancer98);
        this.router.get('/C124_CAMPO_99',opciones_listasCancerController.cancer99);
        this.router.get('/C125_CAMPO_100',opciones_listasCancerController.cancer100);
        this.router.get('/C126_CAMPO_101',opciones_listasCancerController.cancer101);
        this.router.get('/C127_CAMPO_102',opciones_listasCancerController.cancer102);
        this.router.get('/C129_CAMPO_104',opciones_listasCancerController.cancer104);
        this.router.get('/C130_CAMPO_105',opciones_listasCancerController.cancer105);
        this.router.get('/C131_CAMPO_106',opciones_listasCancerController.cancer106);
        this.router.get('/C132_CAMPO_107',opciones_listasCancerController.cancer107);
        this.router.get('/C133_CAMPO_108',opciones_listasCancerController.cancer108);
        this.router.get('/C135_CAMPO_110',opciones_listasCancerController.cancer110);
        this.router.get('/C136_CAMPO_111',opciones_listasCancerController.cancer111);
        this.router.get('/C138_CAMPO_113',opciones_listasCancerController.cancer113);
        this.router.get('/C139_CAMPO_114',opciones_listasCancerController.cancer114);
        this.router.get('/C140_CAMPO_114_1',opciones_listasCancerController.cancer114_1);
        this.router.get('/C141_CAMPO_114_2',opciones_listasCancerController.cancer114_2);
        this.router.get('/C142_CAMPO_114_3',opciones_listasCancerController.cancer114_3);
        this.router.get('/C143_CAMPO_114_4',opciones_listasCancerController.cancer114_4);
        this.router.get('/C144_CAMPO_114_5',opciones_listasCancerController.cancer114_5);
        this.router.get('/C145_CAMPO_114_6',opciones_listasCancerController.cancer114_6);
        this.router.get('/C147_CAMPO_116',opciones_listasCancerController.cancer116);
        this.router.get('/C148_CAMPO_117',opciones_listasCancerController.cancer117);
        this.router.get('/C150_CAMPO_119',opciones_listasCancerController.cancer119);
        this.router.get('/C151_CAMPO_120',opciones_listasCancerController.cancer120);
        this.router.get('/C153_CAMPO_122',opciones_listasCancerController.cancer122);
        this.router.get('/C154_CAMPO_123',opciones_listasCancerController.cancer123);
        this.router.get('/C155_CAMPO_124',opciones_listasCancerController.cancer124);
        this.router.get('/C156_CAMPO_125',opciones_listasCancerController.cancer125);
        this.router.get('/C157_CAMPO_126',opciones_listasCancerController.cancer126);
        this.router.get('/C158_CAMPO_127',opciones_listasCancerController.cancer127);
        this.router.get('/C159_CAMPO_128',opciones_listasCancerController.cancer128);
        this.router.get('/C160_CAMPO_129',opciones_listasCancerController.cancer129);
        this.router.get('/C163_CAMPO_132',opciones_listasCancerController.cancer132);
       
    }

}




const bdopcionesListasCANCERroutes = new BdopcionesListasCANCERroutes()
export default bdopcionesListasCANCERroutes.router
