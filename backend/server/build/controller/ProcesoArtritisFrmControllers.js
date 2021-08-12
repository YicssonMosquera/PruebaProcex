"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procesoArtritisFrmControllers = void 0;
const LogicaCACArtritisFrm_1 = __importDefault(require("../logica/LogicaCACArtritisFrm"));
const LogicaCACArtritisUpdate_1 = __importDefault(require("../logica/LogicaCACArtritisUpdate"));
class ProcesoArtritisFrmControllers {
    guardarArtritisFrm(req, res) {
        LogicaCACArtritisFrm_1.default.cargarCACArtritis(req.body);
        res.json('valido');
    }
    guardarArtritisUpdate(req, res) {
        const { CAMPO_9 } = req.params;
        LogicaCACArtritisUpdate_1.default.cargarArtritis(req.body, CAMPO_9);
        res.json('valido');
    }
}
exports.procesoArtritisFrmControllers = new ProcesoArtritisFrmControllers();
