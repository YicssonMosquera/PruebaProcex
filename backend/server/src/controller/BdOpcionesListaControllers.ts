import { Request, Response, json, request } from 'express'
import BD_opciones_listas from "../dao/BdOpcionesListas";


class BdOpcionesListaControllers {

    public async cargarGrupoPoblacional3(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarGrupoPoblacional3();
        res.json(opcionesLista);
    }
    public async cargarRadiografiaManosDiagnóstico22(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarRadiografiaManosDiagnóstico22();
        res.json(opcionesLista);
    }
    public async cargarRadiografiaPiesDiagnóstico23(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarRadiografiaPiesDiagnóstico23();
        res.json(opcionesLista);
    }
    public async cargarFactorReumatoideoInicial26(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarFactorReumatoideoInicial26();
        res.json(opcionesLista);
    }
    public async cargarParcialOrinaInicial31(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarParcialOrinaInicial31();
        res.json(opcionesLista);
    }
    public async cargarALTInicial32(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarALTInicial32();
        res.json(opcionesLista);
    }
    public async AntiCCPDiagnóstico33(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.AntiCCPDiagnóstico33();
        res.json(opcionesLista);
    }
    public async cargarHTADiagnóstico34(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarHTADiagnóstico34();
        res.json(opcionesLista);
    }

    public async DMDiagnóstico35(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.DMDiagnóstico35();
        res.json(opcionesLista);
    }
    public async cargarECVDiagnóstico36(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarECVDiagnóstico36();
        res.json(opcionesLista);
    }
    public async cargarERCDiagnóstico37(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarERCDiagnóstico37();
        res.json(opcionesLista);
    }
    public async cargarOsteoporosisDiagnóstico38(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarOsteoporosisDiagnóstico38();
        res.json(opcionesLista);
    }
    public async cargarSindromeSjogrenDiagnóstico39(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarSindromeSjogrenDiagnóstico39();
        res.json(opcionesLista);
    }
    public async cargarProfesionalRealizóPrimerDAS2841(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarProfesionalRealizóPrimerDAS2841();
        res.json(opcionesLista);
    }

    public async cargarAnalgesicosNoOpioidesInicio45_2(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAnalgesicosNoOpioidesInicio45_2();
        res.json(opcionesLista);
    }
    public async cargarAnalgesicosInicio145_3(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAnalgesicosInicio145_3();
        res.json(opcionesLista);
    }
    public async cargarAINESinicio45_4(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAINESinicio45_4();
        res.json(opcionesLista);
    }
    public async cargarCorticoidesInicio45_5(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCorticoidesInicio45_5();
        res.json(opcionesLista);
    }
    public async cargarTamizajeTBantesinicioDMARD145_7(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarTamizajeTBantesinicioDMARD145_7();
        res.json(opcionesLista);
    }
    public async cargarAntecedentelinfomaantesinicioDMARD45_8(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAntecedentelinfomaantesinicioDMARD45_8();
        res.json(opcionesLista);
    }

    public async cargarAzatioprina46_1(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAzatioprina46_1();
        res.json(opcionesLista);
    }

    public async cargarCiclosporina46_2(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCiclosporina46_2();
        res.json(opcionesLista);
    }

    public async cargarCiclofosfamida46_3(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCiclofosfamida46_3();
        res.json(opcionesLista);
    }

    public async cargarCloroquina46_4(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCloroquina46_4();
        res.json(opcionesLista);
    }

    public async cargarDpenicilaimina46_5(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarDpenicilaimina46_5();
        res.json(opcionesLista);
    }

    public async cargarEtanercept46_6(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarEtanercept46_6();
        res.json(opcionesLista);
    }

    public async cargarLeflunomida46_7(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarLeflunomida46_7();
        res.json(opcionesLista);
    }

    public async cargarMetotrexate46_8(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarMetotrexate46_8();
        res.json(opcionesLista);
    }

    public async cargarRituximab46_9(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarRituximab46_9();
        res.json(opcionesLista);
    }

    public async cargarSulfasalazina46_10(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarSulfasalazina46_10();
        res.json(opcionesLista);
    }

    public async cargarAbatacept47_1(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAbatacept47_1();
        res.json(opcionesLista);
    }

    public async cargarAdalimumab_47_2(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAdalimumab_47_2();
        res.json(opcionesLista);
    }

    public async cargarCertolizumab47_3(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCertolizumab47_3();
        res.json(opcionesLista);
    }

    public async cargarGolimumab47_4(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarGolimumab47_4();
        res.json(opcionesLista);
    }

    public async cargarHidroxicloroquina47_5(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarHidroxicloroquina47_5();
        res.json(opcionesLista);
    }

    public async cargarInfliximab47_6(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarInfliximab47_6();
        res.json(opcionesLista);
    }

    public async cargarSalesdeoro47_7(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarSalesdeoro47_7();
        res.json(opcionesLista);
    }

    public async cargarTocilizumab47_8(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarTocilizumab47_8();
        res.json(opcionesLista);
    }

    public async cargarTofacitinib47_9(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarTofacitinib47_9();
        res.json(opcionesLista);
    }
    public async cargarAnakinra47_10(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAnakinra47_10();
        res.json(opcionesLista);
    }
    public async cargarRadiografiademanos49(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarRadiografiademanos49();
        res.json(opcionesLista);
    }
    public async cargarRadiografiadepies50(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarRadiografiadepies50();
        res.json(opcionesLista);
    }
    public async cargarParcialdeOrinaúltimosemestre57(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarParcialdeOrinaúltimosemestre57();
        res.json(opcionesLista);
    }
    public async cargarALTultimosemestre58(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarALTultimosemestre58();
        res.json(opcionesLista);
    }
    public async cargarHTAactual59(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarHTAactual59();
        res.json(opcionesLista);
    }
    public async cargarDMactua60(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarDMactua60();
        res.json(opcionesLista);
    }
    public async cargarECVactual61(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarECVactual61();
        res.json(opcionesLista);
    }
    public async cargarERCactual62(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarERCactual62();
        res.json(opcionesLista);
    }
    public async cargarOsteoporosisactual63(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarOsteoporosisactual63();
        res.json(opcionesLista);
    }
    public async cargarSindromeSjogrenactual64(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarSindromeSjogrenactual64();
        res.json(opcionesLista);
    }
    public async cargarProfesionalrealizoultimoDAS28_66(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarProfesionalrealizoultimoDAS28_66();
        res.json(opcionesLista);
    }
    public async cargarEstadoactividadactualdelaARegúnDAS28_68(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarEstadoactividadactualdelaARegúnDAS28_68();
        res.json(opcionesLista);
    }
    public async cargarAnalgesicosNoOpioides71_1(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAnalgesicosNoOpioides71_1();
        res.json(opcionesLista);
    }
    public async cargarAnalgesicosOpioides71_2(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAnalgesicosOpioides71_2();
        res.json(opcionesLista);
    }
    public async cargarAINES71_3(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAINES71_3();
        res.json(opcionesLista);
    }
    public async cargarCorticoides71_4(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCorticoides71_4();
        res.json(opcionesLista);
    }
    public async cargarCalcio71_6(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCalcio71_6();
        res.json(opcionesLista);
    }
    public async cargarVitaminaD71_7(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarVitaminaD71_7();
        res.json(opcionesLista);
    }
    public async cargarAzatioprina73_1(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAzatioprina73_1();
        res.json(opcionesLista);
    }
    public async cargarCiclosporina73_2(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCiclosporina73_2();
        res.json(opcionesLista);
    }
    public async cargarCiclofosfamida73_3(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCiclofosfamida73_3();
        res.json(opcionesLista);
    }
    public async cargarCorticoides73_4(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCorticoides73_4();
        res.json(opcionesLista);
    }
    public async cargarDpenicilaimina73_5(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarDpenicilaimina73_5();
        res.json(opcionesLista);
    }
    public async cargarEtanercept73_6(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarEtanercept73_6();
        res.json(opcionesLista);
    }
    public async cargarLeflunomida73_7(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarLeflunomida73_7();
        res.json(opcionesLista);
    }
    public async cargarMetotrexate73_8(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarMetotrexate73_8();
        res.json(opcionesLista);
    }
    public async cargarRituximab73_9(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarRituximab73_9();
        res.json(opcionesLista);
    }
    public async cargarSulfasalazina73_10(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarSulfasalazina73_10();
        res.json(opcionesLista);
    }
    public async cargarAbatacept74_1(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAbatacept74_1();
        res.json(opcionesLista);
    }
    public async cargarAdalimumab74_2(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAdalimumab74_2();
        res.json(opcionesLista);
    }
    public async cargarCertolizumab74_3(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCertolizumab74_3();
        res.json(opcionesLista);
    }
    public async cargarGolimumab74_4(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarGolimumab74_4();
        res.json(opcionesLista);
    }
    public async cargaHidroxicloroquina74_5(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargaHidroxicloroquina74_5();
        res.json(opcionesLista);
    }
    public async cargarInfliximab74_6(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarInfliximab74_6();
        res.json(opcionesLista);
    }
    public async cargarSalesdeoro74_7(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarSalesdeoro74_7();
        res.json(opcionesLista);
    }
    public async cargarTocilizumab74_8(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarTocilizumab74_8();
        res.json(opcionesLista);
    }
    public async cargarTofacitinib74_9(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarTofacitinib74_9();
        res.json(opcionesLista);
    }
    public async cargarAnakinra74_10(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarAnakinra74_10();
        res.json(opcionesLista);
    }
    public async cargarReemplazoarticular1porAR575_4(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarReemplazoarticular1porAR575_4();
        res.json(opcionesLista);
    }
    public async cargarReemplazoarticular2porAR75_5(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarReemplazoarticular2porAR75_5();
        res.json(opcionesLista);
    }
    public async cargarReemplazoarticular3porAR75_6(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarReemplazoarticular3porAR75_6();
        res.json(opcionesLista);
    }
    public async cargarReemplazoarticula4porAR75_7(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarReemplazoarticula4porAR75_7();
        res.json(opcionesLista);
    }
    public async cargarQuienhacelaatencionclinicaparaAR80(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarQuienhacelaatencionclinicaparaAR80();
        res.json(opcionesLista);
    }
    public async cargarNovedaddelpacienterespectoalreporteanterior81(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarNovedaddelpacienterespectoalreporteanterior81();
        res.json(opcionesLista);
    }
    public async cargarCausademuerte85(req: Request, res: Response) {
        const opcionesLista = await BD_opciones_listas.cargarCausademuerte85();
        res.json(opcionesLista);
    }

}
export const bdopcionesListaControllers = new BdOpcionesListaControllers();