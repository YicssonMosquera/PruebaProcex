"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bdopcionesListaControllers = void 0;
const BdOpcionesListas_1 = __importDefault(require("../dao/BdOpcionesListas"));
class BdOpcionesListaControllers {
    cargarGrupoPoblacional3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarGrupoPoblacional3();
            res.json(opcionesLista);
        });
    }
    cargarRadiografiaManosDiagnóstico22(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarRadiografiaManosDiagnóstico22();
            res.json(opcionesLista);
        });
    }
    cargarRadiografiaPiesDiagnóstico23(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarRadiografiaPiesDiagnóstico23();
            res.json(opcionesLista);
        });
    }
    cargarFactorReumatoideoInicial26(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarFactorReumatoideoInicial26();
            res.json(opcionesLista);
        });
    }
    cargarParcialOrinaInicial31(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarParcialOrinaInicial31();
            res.json(opcionesLista);
        });
    }
    cargarALTInicial32(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarALTInicial32();
            res.json(opcionesLista);
        });
    }
    AntiCCPDiagnóstico33(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.AntiCCPDiagnóstico33();
            res.json(opcionesLista);
        });
    }
    cargarHTADiagnóstico34(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarHTADiagnóstico34();
            res.json(opcionesLista);
        });
    }
    DMDiagnóstico35(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.DMDiagnóstico35();
            res.json(opcionesLista);
        });
    }
    cargarECVDiagnóstico36(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarECVDiagnóstico36();
            res.json(opcionesLista);
        });
    }
    cargarERCDiagnóstico37(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarERCDiagnóstico37();
            res.json(opcionesLista);
        });
    }
    cargarOsteoporosisDiagnóstico38(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarOsteoporosisDiagnóstico38();
            res.json(opcionesLista);
        });
    }
    cargarSindromeSjogrenDiagnóstico39(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarSindromeSjogrenDiagnóstico39();
            res.json(opcionesLista);
        });
    }
    cargarProfesionalRealizóPrimerDAS2841(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarProfesionalRealizóPrimerDAS2841();
            res.json(opcionesLista);
        });
    }
    cargarAnalgesicosNoOpioidesInicio45_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAnalgesicosNoOpioidesInicio45_2();
            res.json(opcionesLista);
        });
    }
    cargarAnalgesicosInicio145_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAnalgesicosInicio145_3();
            res.json(opcionesLista);
        });
    }
    cargarAINESinicio45_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAINESinicio45_4();
            res.json(opcionesLista);
        });
    }
    cargarCorticoidesInicio45_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCorticoidesInicio45_5();
            res.json(opcionesLista);
        });
    }
    cargarTamizajeTBantesinicioDMARD145_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarTamizajeTBantesinicioDMARD145_7();
            res.json(opcionesLista);
        });
    }
    cargarAntecedentelinfomaantesinicioDMARD45_8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAntecedentelinfomaantesinicioDMARD45_8();
            res.json(opcionesLista);
        });
    }
    cargarAzatioprina46_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAzatioprina46_1();
            res.json(opcionesLista);
        });
    }
    cargarCiclosporina46_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCiclosporina46_2();
            res.json(opcionesLista);
        });
    }
    cargarCiclofosfamida46_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCiclofosfamida46_3();
            res.json(opcionesLista);
        });
    }
    cargarCloroquina46_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCloroquina46_4();
            res.json(opcionesLista);
        });
    }
    cargarDpenicilaimina46_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarDpenicilaimina46_5();
            res.json(opcionesLista);
        });
    }
    cargarEtanercept46_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarEtanercept46_6();
            res.json(opcionesLista);
        });
    }
    cargarLeflunomida46_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarLeflunomida46_7();
            res.json(opcionesLista);
        });
    }
    cargarMetotrexate46_8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarMetotrexate46_8();
            res.json(opcionesLista);
        });
    }
    cargarRituximab46_9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarRituximab46_9();
            res.json(opcionesLista);
        });
    }
    cargarSulfasalazina46_10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarSulfasalazina46_10();
            res.json(opcionesLista);
        });
    }
    cargarAbatacept47_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAbatacept47_1();
            res.json(opcionesLista);
        });
    }
    cargarAdalimumab_47_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAdalimumab_47_2();
            res.json(opcionesLista);
        });
    }
    cargarCertolizumab47_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCertolizumab47_3();
            res.json(opcionesLista);
        });
    }
    cargarGolimumab47_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarGolimumab47_4();
            res.json(opcionesLista);
        });
    }
    cargarHidroxicloroquina47_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarHidroxicloroquina47_5();
            res.json(opcionesLista);
        });
    }
    cargarInfliximab47_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarInfliximab47_6();
            res.json(opcionesLista);
        });
    }
    cargarSalesdeoro47_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarSalesdeoro47_7();
            res.json(opcionesLista);
        });
    }
    cargarTocilizumab47_8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarTocilizumab47_8();
            res.json(opcionesLista);
        });
    }
    cargarTofacitinib47_9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarTofacitinib47_9();
            res.json(opcionesLista);
        });
    }
    cargarAnakinra47_10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAnakinra47_10();
            res.json(opcionesLista);
        });
    }
    cargarRadiografiademanos49(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarRadiografiademanos49();
            res.json(opcionesLista);
        });
    }
    cargarRadiografiadepies50(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarRadiografiadepies50();
            res.json(opcionesLista);
        });
    }
    cargarParcialdeOrinaúltimosemestre57(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarParcialdeOrinaúltimosemestre57();
            res.json(opcionesLista);
        });
    }
    cargarALTultimosemestre58(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarALTultimosemestre58();
            res.json(opcionesLista);
        });
    }
    cargarHTAactual59(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarHTAactual59();
            res.json(opcionesLista);
        });
    }
    cargarDMactua60(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarDMactua60();
            res.json(opcionesLista);
        });
    }
    cargarECVactual61(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarECVactual61();
            res.json(opcionesLista);
        });
    }
    cargarERCactual62(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarERCactual62();
            res.json(opcionesLista);
        });
    }
    cargarOsteoporosisactual63(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarOsteoporosisactual63();
            res.json(opcionesLista);
        });
    }
    cargarSindromeSjogrenactual64(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarSindromeSjogrenactual64();
            res.json(opcionesLista);
        });
    }
    cargarProfesionalrealizoultimoDAS28_66(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarProfesionalrealizoultimoDAS28_66();
            res.json(opcionesLista);
        });
    }
    cargarEstadoactividadactualdelaARegúnDAS28_68(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarEstadoactividadactualdelaARegúnDAS28_68();
            res.json(opcionesLista);
        });
    }
    cargarAnalgesicosNoOpioides71_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAnalgesicosNoOpioides71_1();
            res.json(opcionesLista);
        });
    }
    cargarAnalgesicosOpioides71_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAnalgesicosOpioides71_2();
            res.json(opcionesLista);
        });
    }
    cargarAINES71_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAINES71_3();
            res.json(opcionesLista);
        });
    }
    cargarCorticoides71_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCorticoides71_4();
            res.json(opcionesLista);
        });
    }
    cargarCalcio71_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCalcio71_6();
            res.json(opcionesLista);
        });
    }
    cargarVitaminaD71_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarVitaminaD71_7();
            res.json(opcionesLista);
        });
    }
    cargarAzatioprina73_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAzatioprina73_1();
            res.json(opcionesLista);
        });
    }
    cargarCiclosporina73_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCiclosporina73_2();
            res.json(opcionesLista);
        });
    }
    cargarCiclofosfamida73_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCiclofosfamida73_3();
            res.json(opcionesLista);
        });
    }
    cargarCorticoides73_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCorticoides73_4();
            res.json(opcionesLista);
        });
    }
    cargarDpenicilaimina73_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarDpenicilaimina73_5();
            res.json(opcionesLista);
        });
    }
    cargarEtanercept73_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarEtanercept73_6();
            res.json(opcionesLista);
        });
    }
    cargarLeflunomida73_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarLeflunomida73_7();
            res.json(opcionesLista);
        });
    }
    cargarMetotrexate73_8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarMetotrexate73_8();
            res.json(opcionesLista);
        });
    }
    cargarRituximab73_9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarRituximab73_9();
            res.json(opcionesLista);
        });
    }
    cargarSulfasalazina73_10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarSulfasalazina73_10();
            res.json(opcionesLista);
        });
    }
    cargarAbatacept74_1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAbatacept74_1();
            res.json(opcionesLista);
        });
    }
    cargarAdalimumab74_2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAdalimumab74_2();
            res.json(opcionesLista);
        });
    }
    cargarCertolizumab74_3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCertolizumab74_3();
            res.json(opcionesLista);
        });
    }
    cargarGolimumab74_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarGolimumab74_4();
            res.json(opcionesLista);
        });
    }
    cargaHidroxicloroquina74_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargaHidroxicloroquina74_5();
            res.json(opcionesLista);
        });
    }
    cargarInfliximab74_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarInfliximab74_6();
            res.json(opcionesLista);
        });
    }
    cargarSalesdeoro74_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarSalesdeoro74_7();
            res.json(opcionesLista);
        });
    }
    cargarTocilizumab74_8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarTocilizumab74_8();
            res.json(opcionesLista);
        });
    }
    cargarTofacitinib74_9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarTofacitinib74_9();
            res.json(opcionesLista);
        });
    }
    cargarAnakinra74_10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarAnakinra74_10();
            res.json(opcionesLista);
        });
    }
    cargarReemplazoarticular1porAR575_4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarReemplazoarticular1porAR575_4();
            res.json(opcionesLista);
        });
    }
    cargarReemplazoarticular2porAR75_5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarReemplazoarticular2porAR75_5();
            res.json(opcionesLista);
        });
    }
    cargarReemplazoarticular3porAR75_6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarReemplazoarticular3porAR75_6();
            res.json(opcionesLista);
        });
    }
    cargarReemplazoarticula4porAR75_7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarReemplazoarticula4porAR75_7();
            res.json(opcionesLista);
        });
    }
    cargarQuienhacelaatencionclinicaparaAR80(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarQuienhacelaatencionclinicaparaAR80();
            res.json(opcionesLista);
        });
    }
    cargarNovedaddelpacienterespectoalreporteanterior81(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarNovedaddelpacienterespectoalreporteanterior81();
            res.json(opcionesLista);
        });
    }
    cargarCausademuerte85(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const opcionesLista = yield BdOpcionesListas_1.default.cargarCausademuerte85();
            res.json(opcionesLista);
        });
    }
}
exports.bdopcionesListaControllers = new BdOpcionesListaControllers();
