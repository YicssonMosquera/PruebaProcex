"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BdOpcionesListasERCControllers_1 = require("../controller/BdOpcionesListasERCControllers");
class BdOpcionesListasERCRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/C4_CAMPO_5', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarTipoDocumento5);
        this.router.get('/C7_CAMPO_8', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSexo8);
        this.router.get('/C8_CAMPO_9', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarRegimenAfilicacion9);
        this.router.get('/C10_CAMPO_11', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarPertenenciaEtnica11);
        this.router.get('/C11_CAMPO_12', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarGrupopoblacional12);
        this.router.get('/C17_CAMPO_18', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18);
        this.router.get('/C20_CAMPO_20', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20);
        this.router.get('/C23_CAMPO_22', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEtiologíadelaERC22);
        this.router.get('/C45_CAMPO_36', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36);
        this.router.get('/C46_CAMPO_37', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarElusuariorecibeAntagonista37);
        this.router.get('/C47_CAMPO_38', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38);
        this.router.get('/C48_CAMPO_39', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEstadioERCEnfermedad39);
        this.router.get('/C50_CAMPO_41', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarLapersonaencuentraprogramatenciónERC41);
        this.router.get('/C52_CAMPO_43', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarModoInicioTerapiaReemplazoRenal43);
        this.router.get('/C55_CAMPO_46', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarHemodiálisis46);
        this.router.get('/C57_CAMPO_48', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarCostototalhemodiálisisduranteperíodoreporte48);
        this.router.get('/C63_CAMPO_54', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarVacunaHepatitis54);
        this.router.get('/C66_CAMPO_57', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarTerapiaDialíticaERCestadio57);
        this.router.get('/C71_CAMPO_62', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarÚltimavaloraciónclínicapornefrología62);
        this.router.get('/C72_CAMPO_62_1', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportócánceractivoúltimos12mese62_1);
        this.router.get('/C73_CAMPO_62_2', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2);
        this.router.get('/C74_CAMPO_62_3', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportocomocontraindicaciónparatransplanterenal62_3);
        this.router.get('/C75_CAMPO_62_4', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportocontraindicacióntransplanterenal62_4);
        this.router.get('/C76_CAMPO_62_5', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportocontraindicacióntransplanterena62_5);
        this.router.get('/C77_CAMPO_62_6', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportoenfermedadcardiaca62_6);
        this.router.get('/C78_CAMPO_62_7', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportoinfecciónVIH62_7);
        this.router.get('/C79_CAMPO_62_8', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportoinfecciónVIH62_8);
        this.router.get('/C80_CAMPO_62_9', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportocomocontraindicación62_9);
        this.router.get('/C81_CAMPO_62_10', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportocomocontraindicación62_10);
        this.router.get('/C82_CAMPO_62_11', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarSereportocomocontraindicación62_11);
        this.router.get('/C85_CAMPO_64', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarElusuarioharecibidotrasplanterenal64);
        this.router.get('/C88_CAMPO_67', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarTipodedonante67);
        this.router.get('/C90_CAMPO_69', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarElusuariohapresentadoalgunacomplicación69);
        this.router.get('/C99_CAMPO_70_1', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEnalgunmomentodesdeelultimoreporte70_1);
        this.router.get('/C100_CAMPO_70_2', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEnalgunmomentodesdeelultimoreporte70_2);
        this.router.get('/C101_CAMPO_70_3', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEnalgunmomentodesdeelultimoreporte70_3);
        this.router.get('/C102_CAMPO_70_4', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEnalgunmomentodesdeelultimoreporte70_4);
        this.router.get('/C103_CAMPO_70_5', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEnalgunmomentodesdeelultimoreporte70_5);
        this.router.get('/C104_CAMPO_70_6', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarEnalgunmomentodesdeelultimoreporte70_6);
        this.router.get('/C116_CAMPO_79', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarNovedadconrespectoalreporteanterior79);
        this.router.get('/C117_CAMPO_80', BdOpcionesListasERCControllers_1.bdOpcionesListasERCControllers.cargarCausadeMuerte80);
    }
}
const bdOpcionesListasERCroutes = new BdOpcionesListasERCRoutes();
exports.default = bdOpcionesListasERCroutes.router;
