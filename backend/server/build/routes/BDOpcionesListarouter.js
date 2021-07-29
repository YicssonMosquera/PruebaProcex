"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BdOpcionesListaControllers_1 = require("../controller/BdOpcionesListaControllers");
class BdOpcioneslistasRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/C2_CAMPO_3', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarGrupoPoblacional3);
        this.router.get('/C21_CAMPO_22', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarRadiografiaManosDiagnóstico22);
        this.router.get('/C22_CAMPO_23', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarRadiografiaPiesDiagnóstico23);
        this.router.get('/C25_CAMPO_26', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarFactorReumatoideoInicial26);
        this.router.get('/C30_CAMPO_31', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarParcialOrinaInicial31);
        this.router.get('/C31_CAMPO_32', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarALTInicial32);
        this.router.get('/C32_CAMPO_33', BdOpcionesListaControllers_1.bdopcionesListaControllers.AntiCCPDiagnóstico33);
        this.router.get('/C33_CAMPO_34', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarHTADiagnóstico34);
        this.router.get('/C34_CAMPO_35', BdOpcionesListaControllers_1.bdopcionesListaControllers.DMDiagnóstico35);
        this.router.get('/C35_CAMPO_36', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarECVDiagnóstico36);
        this.router.get('/C36_CAMPO_37', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarERCDiagnóstico37);
        this.router.get('/C37_CAMPO_38', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarOsteoporosisDiagnóstico38);
        this.router.get('/C38_CAMPO_39', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarSindromeSjogrenDiagnóstico39);
        this.router.get('/C40_CAMPO_41', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarProfesionalRealizóPrimerDAS2841);
        this.router.get('/C45_CAMPO_45_2', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAnalgesicosNoOpioidesInicio45_2);
        this.router.get('/C46_CAMPO_45_3', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAnalgesicosInicio145_3);
        this.router.get('/C46_CAMPO_45_4', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAINESinicio45_4);
        this.router.get('/C46_CAMPO_45_5', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCorticoidesInicio45_5);
        this.router.get('/C50_CAMPO_45_7', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarTamizajeTBantesinicioDMARD145_7);
        this.router.get('/C51_CAMPO_45_8', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAntecedentelinfomaantesinicioDMARD45_8);
        this.router.get('/C52_CAMPO_46_1', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAzatioprina46_1);
        this.router.get('/C53_CAMPO_46_2', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCiclosporina46_2);
        this.router.get('/C54_CAMPO_46_3', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCiclofosfamida46_3);
        this.router.get('/C55_CAMPO_46_4', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCloroquina46_4);
        this.router.get('/C56_CAMPO_46_5', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarDpenicilaimina46_5);
        this.router.get('/C57_CAMPO_46_6', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarEtanercept46_6);
        this.router.get('/C58_CAMPO_46_7', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarLeflunomida46_7);
        this.router.get('/C59_CAMPO_46_8', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarMetotrexate46_8);
        this.router.get('/C60_CAMPO_46_9', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarRituximab46_9);
        this.router.get('/C61_CAMPO_46_10', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarSulfasalazina46_10);
        this.router.get('/C62_CAMPO_47_1', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAbatacept47_1);
        this.router.get('/C63_CAMPO_47_2', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAdalimumab_47_2);
        this.router.get('/C64_CAMPO_47_3', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCertolizumab47_3);
        this.router.get('/C65_CAMPO_47_4', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarGolimumab47_4);
        this.router.get('/C66_CAMPO_47_5', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarHidroxicloroquina47_5);
        this.router.get('/C67_CAMPO_47_6', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarInfliximab47_6);
        this.router.get('/C68_CAMPO_47_7', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarSalesdeoro47_7);
        this.router.get('/C69_CAMPO_47_8', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarTocilizumab47_8);
        this.router.get('/C70_CAMPO_47_9', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarTofacitinib47_9);
        this.router.get('/C71_CAMPO_47_10', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAnakinra47_10);
        this.router.get('/C77_CAMPO_49', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarRadiografiademanos49);
        this.router.get('/C78_CAMPO_50', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarRadiografiadepies50);
        this.router.get('/C85_CAMPO_57', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarParcialdeOrinaúltimosemestre57);
        this.router.get('/C86_CAMPO_58', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarALTultimosemestre58);
        this.router.get('/C87_CAMPO_59', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarHTAactual59);
        this.router.get('/C88_CAMPO_60', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarDMactua60);
        this.router.get('/C89_CAMPO_61', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarECVactual61);
        this.router.get('/C90_CAMPO_62', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarERCactual62);
        this.router.get('/C91_CAMPO_63', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarOsteoporosisactual63);
        this.router.get('/C92_CAMPO_64', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarSindromeSjogrenactual64);
        this.router.get('/C94_CAMPO_66', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarProfesionalrealizoultimoDAS28_66);
        this.router.get('/C96_CAMPO_68', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarEstadoactividadactualdelaARegúnDAS28_68);
        this.router.get('/C99_CAMPO_71_1', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAnalgesicosNoOpioides71_1);
        this.router.get('/C100_CAMPO_71_2', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAnalgesicosOpioides71_2);
        this.router.get('/C101_CAMPO_71_3', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAINES71_3);
        this.router.get('/C102_CAMPO_71_4', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCorticoides71_4);
        this.router.get('/C104_CAMPO_71_6', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCalcio71_6);
        this.router.get('/C105_CAMPO_71_7', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarVitaminaD71_7);
        this.router.get('/C107_CAMPO_73_1', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAzatioprina73_1);
        this.router.get('/C108_CAMPO_73_2', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCiclosporina73_2);
        this.router.get('/C109_CAMPO_73_3', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCiclofosfamida73_3);
        this.router.get('/C110_CAMPO_73_4', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCorticoides73_4);
        this.router.get('/C111_CAMPO_73_5', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarDpenicilaimina73_5);
        this.router.get('/C112_CAMPO_73_6', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarEtanercept73_6);
        this.router.get('/C113_CAMPO_73_7', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarLeflunomida73_7);
        this.router.get('/C114_CAMPO_73_8', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarMetotrexate73_8);
        this.router.get('/C115_CAMPO_73_9', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarRituximab73_9);
        this.router.get('/C116_CAMPO_73_10', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarSulfasalazina73_10);
        this.router.get('/C117_CAMPO_74_1', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAbatacept74_1);
        this.router.get('/C118_CAMPO_74_2', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAdalimumab74_2);
        this.router.get('/C119_CAMPO_74_3', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCertolizumab74_3);
        this.router.get('/C120_CAMPO_74_4', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarGolimumab74_4);
        this.router.get('/C121_CAMPO_74_5', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargaHidroxicloroquina74_5);
        this.router.get('/C122_CAMPO_74_6', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarInfliximab74_6);
        this.router.get('/C123_CAMPO_74_7', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarSalesdeoro74_7);
        this.router.get('/C124_CAMPO_74_8', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarTocilizumab74_8);
        this.router.get('/C125_CAMPO_74_9', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarTofacitinib74_9);
        this.router.get('/C126_CAMPO_74_10', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarAnakinra74_10);
        this.router.get('/C134_CAMPO_75_4', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarReemplazoarticular1porAR575_4);
        this.router.get('/C135_CAMPO_75_5', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarReemplazoarticular2porAR75_5);
        this.router.get('/C136_CAMPO_75_6', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarReemplazoarticular3porAR75_6);
        this.router.get('/C137_CAMPO_75_7', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarReemplazoarticula4porAR75_7);
        this.router.get('/C142_CAMPO_80', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarQuienhacelaatencionclinicaparaAR80);
        this.router.get('/C143_CAMPO_81', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarNovedaddelpacienterespectoalreporteanterior81);
        this.router.get('/C147_CAMPO_85', BdOpcionesListaControllers_1.bdopcionesListaControllers.cargarCausademuerte85);
    }
}
const bdopcioneslistasRouter = new BdOpcioneslistasRouter();
exports.default = bdopcioneslistasRouter.router;