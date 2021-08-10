"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesoCancerFrmConrollers = void 0;
const LogicaCACCancerFrm_1 = __importDefault(require("../logica/LogicaCACCancerFrm"));
const LogicaCACCancerUpdate_1 = __importDefault(require("../logica/LogicaCACCancerUpdate"));
class ProcesoCancerFrmConrollers {
    guardarCancerFrm(req, res) {
        LogicaCACCancerFrm_1.default.cargarCACCancer(req.body);
        res.json('valido');
    }
    guardarCancerUpdate(req, res) {
        const { Campo_6 } = req.params;
        LogicaCACCancerUpdate_1.default.cargarCancer(req.body, Campo_6);
        res.json('valido');
    }
}
exports.procesoCancerFrmConrollers = new ProcesoCancerFrmConrollers();
