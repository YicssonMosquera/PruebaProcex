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
}
exports.bdopcionesListaControllers = new BdOpcionesListaControllers();
