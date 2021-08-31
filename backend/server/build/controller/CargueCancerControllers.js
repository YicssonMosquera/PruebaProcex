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
exports.cargueCancerControllers = void 0;
const DbProcesoCancer_1 = __importDefault(require("../dao/DbProcesoCancer"));
const LogicaDbProcesoCancerCargue_1 = __importDefault(require("../logica/LogicaDbProcesoCancerCargue"));
const FileZipUtil_1 = __importDefault(require("../utils/FileZipUtil"));
class CargueCancerControllers {
    guardarCancer(req, res) {
        LogicaDbProcesoCancerCargue_1.default.guardar();
        res.json({ message: 'Datos guardado con exito' });
    }
    guardarHemofiliaFile(req, res) {
        FileZipUtil_1.default.getFileTxt(req.file, req.body, function (txt, longitud, ruta, nombreZip, nombreTxt, body, perfil) {
            var isValid = LogicaDbProcesoCancerCargue_1.default.validarNombresFile(nombreZip, nombreTxt);
            if (isValid) {
                LogicaDbProcesoCancerCargue_1.default.cargarCancer(txt, longitud, ruta, nombreZip, body, perfil).then(function (idProcesoCancer) {
                    res.json(idProcesoCancer);
                });
            }
            else {
                res.json({ error: 'el nombre del txt no cohincide con el nombre del zip' });
            }
        });
    }
    // public async consultarCargue(req: Request, res: Response) {
    //     const obHemofilia = new DbProcesoCancer()
    //     const { page, row, radicado, nombreArchvio, vigente, estado } = req.body
    //     const pagina = row * page
    //     const hemofilia = await obHemofilia.consultarCargue(pagina, row, radicado, nombreArchvio, vigente, estado);
    //     const data = await obHemofilia.getNumeroRegistro();
    //     const respuesta = { hemofilia: hemofilia, numero_registro: data[0].numero_registro };
    //     res.json(respuesta);
    // }
    consultarNombreArchivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const obCancer = new DbProcesoCancer_1.default();
            const nombreArchivo = yield obCancer.getNombreArchivo();
            res.json(nombreArchivo);
        });
    }
}
exports.cargueCancerControllers = new CargueCancerControllers();
