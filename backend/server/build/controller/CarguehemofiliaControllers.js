"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carguehemofiliacontrollers = void 0;
const LogicaDbProcesoHemofilia_1 = __importDefault(require("../logica/LogicaDbProcesoHemofilia"));
class Carguehemofiliacontrollers {
    guardarHemofilia(req, res) {
        LogicaDbProcesoHemofilia_1.default.guardar(req.body);
        res.json({ message: 'Datos guardado con exito' });
    }
    guardarHemofiliaFile(req, res) {
        console.log(req.body);
        console.log("------------------------------------------------------");
        console.log(req.file);
    }
}
exports.carguehemofiliacontrollers = new Carguehemofiliacontrollers();
