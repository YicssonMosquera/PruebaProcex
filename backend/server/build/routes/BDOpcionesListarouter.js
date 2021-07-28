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
    }
}
const bdopcioneslistasRouter = new BdOpcioneslistasRouter();
exports.default = bdopcioneslistasRouter.router;
