"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesoErcControllers = void 0;
const LogicaCACErcFrm_1 = __importDefault(require("../logica/LogicaCACErcFrm"));
const LogicaCACErcUpdate_1 = __importDefault(require("../logica/LogicaCACErcUpdate"));
class ProcesoErcControllers {
    guardarErcFrm(req, res) {
        LogicaCACErcFrm_1.default.cargarErc(req.body);
        res.json('valido');
    }
    guardarErcUpdate(req, res) {
        const { CAMPO_6 } = req.params;
        LogicaCACErcUpdate_1.default.cargarErc(req.body, CAMPO_6);
        res.json('valido');
    }
}
exports.procesoErcControllers = new ProcesoErcControllers();
