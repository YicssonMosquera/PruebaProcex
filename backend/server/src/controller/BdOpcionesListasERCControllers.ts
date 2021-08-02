import { Request, Response, json, request } from 'express'
import BdOcionesListasERC from "../dao/BdOcionesListasERC";

class BdOpcionesListasERCControllers {
    public async cargarTipoDocumento5(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarTipoDocumento5();
        res.json(ERC);
    }

    public async cargarSexo8(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSexo8();
        res.json(ERC);
    }
    public async cargarRegimenAfilicacion9(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarRegimenAfilicacion9();
        res.json(ERC);
    }
    public async cargarPertenenciaEtnica11(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarPertenenciaEtnica11();
        res.json(ERC);
    }
    public async cargarGrupopoblacional12(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarGrupopoblacional12();
        res.json(ERC);
    }
    public async cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarGElusuarioiagnósticoconfirmadoHipertensiónArterialHTA18();
        res.json(ERC);
    }
    public async cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarElusuariotienediagnósticoconfirmadoDiabetesMellitus20();
        res.json(ERC);
    }
    public async cargarEtiologíadelaERC22(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEtiologíadelaERC22();
        res.json(ERC);
    }
    public async cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarElusuariorecibeInhibidorEnzimaconvertidoraangiotensina36();
        res.json(ERC);
    }
    public async cargarElusuariorecibeAntagonista37(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarElusuariorecibeAntagonista37();
        res.json(ERC);
    }
    public async cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarElusuariotienediagnósticoenfermedadrenalcrónicacualquiersusestadios38();
        res.json(ERC);
    }
    public async cargarEstadioERCEnfermedad39(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEstadioERCEnfermedad39();
        res.json(ERC);
    }
    public async cargarLapersonaencuentraprogramatenciónERC41(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarLapersonaencuentraprogramatenciónERC41();
        res.json(ERC);
    }
    public async cargarModoInicioTerapiaReemplazoRenal43(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarModoInicioTerapiaReemplazoRenal43();
        res.json(ERC);
    }
    public async cargarHemodiálisis46(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarHemodiálisis46();
        res.json(ERC);
    }
    public async cargarCostototalhemodiálisisduranteperíodoreporte48(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarCostototalhemodiálisisduranteperíodoreporte48();
        res.json(ERC);
    }
    public async cargarVacunaHepatitis54(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarVacunaHepatitis54();
        res.json(ERC);
    }
    public async cargarTerapiaDialíticaERCestadio57(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarTerapiaDialíticaERCestadio57();
        res.json(ERC);
    }
    public async cargarÚltimavaloraciónclínicapornefrología62(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarÚltimavaloraciónclínicapornefrología62();
        res.json(ERC);
    }
    public async cargarSereportócánceractivoúltimos12mese62_1(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportócánceractivoúltimos12mese62_1();
        res.json(ERC);
    }
    public async cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportoinfeccióncrónicaactivatratadanocontrolada62_2();
        res.json(ERC);
    }
    public async cargarSereportocomocontraindicaciónparatransplanterenal62_3(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportocomocontraindicaciónparatransplanterenal62_3();
        res.json(ERC);
    }

    public async cargarSereportocontraindicacióntransplanterenal62_4(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportocontraindicacióntransplanterenal62_4();
        res.json(ERC);
    }
    public async cargarSereportocontraindicacióntransplanterena62_5(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportocontraindicacióntransplanterena62_5();
        res.json(ERC);
    }
    public async cargarSereportoenfermedadcardiaca62_6(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportoenfermedadcardiaca62_6();
        res.json(ERC);
    }
    public async cargarSereportoinfecciónVIH62_7(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportoinfecciónVIH62_7();
        res.json(ERC);
    }
    public async cargarSereportoinfecciónVIH62_8(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportoinfecciónVIH62_8();
        res.json(ERC);
    }
    public async cargarSereportocomocontraindicación62_9(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportocomocontraindicación62_9();
        res.json(ERC);
    }
    public async cargarSereportocomocontraindicación62_10(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportocomocontraindicación62_10();
        res.json(ERC);
    }
    public async cargarSereportocomocontraindicación62_11(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarSereportocomocontraindicación62_11();
        res.json(ERC);
    }
    public async cargarElusuarioharecibidotrasplanterenal64(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarElusuarioharecibidotrasplanterenal64();
        res.json(ERC);
    }
    public async cargarTipodedonante67(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarTipodedonante67();
        res.json(ERC);
    }
    public async cargarElusuariohapresentadoalgunacomplicación69(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarElusuariohapresentadoalgunacomplicación69();
        res.json(ERC);
    }
    public async cargarEnalgunmomentodesdeelultimoreporte70_1(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEnalgunmomentodesdeelultimoreporte70_1();
        res.json(ERC);
    }
    public async cargarEnalgunmomentodesdeelultimoreporte70_2(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEnalgunmomentodesdeelultimoreporte70_2();
        res.json(ERC);
    }
    public async cargarEnalgunmomentodesdeelultimoreporte70_3(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEnalgunmomentodesdeelultimoreporte70_3();
        res.json(ERC);
    }
    public async cargarEnalgunmomentodesdeelultimoreporte70_4(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEnalgunmomentodesdeelultimoreporte70_4();
        res.json(ERC);
    }
    public async cargarEnalgunmomentodesdeelultimoreporte70_5(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEnalgunmomentodesdeelultimoreporte70_5();
        res.json(ERC);
    }
    public async cargarEnalgunmomentodesdeelultimoreporte70_6(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarEnalgunmomentodesdeelultimoreporte70_6();
        res.json(ERC);
    }
    public async cargarNovedadconrespectoalreporteanterior79(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarNovedadconrespectoalreporteanterior79();
        res.json(ERC);
    }
    public async cargarCausadeMuerte80(req: Request, res: Response) {
        const ERC = await BdOcionesListasERC.cargarCausadeMuerte80();
        res.json(ERC);
    }

}

export const bdOpcionesListasERCControllers = new BdOpcionesListasERCControllers();
