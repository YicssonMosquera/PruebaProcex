"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesoHemofiliaFrmControllers = void 0;
const logicaHemofiliaFormulario_1 = __importDefault(require("../logica/logicaHemofiliaFormulario"));
const logicaHemofiliaFormularioUpdate_1 = __importDefault(require("../logica/logicaHemofiliaFormularioUpdate"));
class ProcesoHemofiliaFrmControllers {
    guardarHemofiliaFrm(req, res) {
        logicaHemofiliaFormulario_1.default.cargarHemofiliaFrm(req.body);
        res.json('valido');
    }
    guardarHemofiliaUpdate(req, res) {
        const { Campo_6 } = req.params;
        logicaHemofiliaFormularioUpdate_1.default.cargarHemofiliaFrm(req.body, Campo_6);
        res.json('valido');
    }
}
exports.procesoHemofiliaFrmControllers = new ProcesoHemofiliaFrmControllers();
