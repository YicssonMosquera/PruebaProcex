"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carguehemofiliacontrollers = void 0;
const LogicaDbProcesoHemofilia_1 = __importDefault(require("../logica/LogicaDbProcesoHemofilia"));
const FileZipUtil_1 = __importDefault(require("../utils/FileZipUtil"));
var AdmZip = require('adm-zip');
class Carguehemofiliacontrollers {
    guardarHemofilia(req, res) {
        LogicaDbProcesoHemofilia_1.default.guardar();
        res.json({ message: 'Datos guardado con exito' });
    }
    guardarHemofiliaFile(req) {
        FileZipUtil_1.default.getFileTxt(req.file, req.body, function (txt, longitud, ruta, nombre, body) {
            LogicaDbProcesoHemofilia_1.default.cargarHemofilia(txt, longitud, ruta, nombre, body);
        });
    }
}
exports.carguehemofiliacontrollers = new Carguehemofiliacontrollers();
