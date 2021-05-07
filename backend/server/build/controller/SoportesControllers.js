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
exports.soportesControllers = void 0;
const database_1 = __importDefault(require("../database"));
class SoportesControllers {
    GuardarSoporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { Nombre_Archivo, Usuariocargue, Anulado, Fecha_anulacion, Usuario_anulacion, Observaciones_anulacion, Entregable } = req.body;
                const newsoporte = {
                    Nombre_Archivo: Nombre_Archivo,
                    Usuariocargue: Usuariocargue,
                    Anulado: Anulado,
                    Fecha_anulacion: Fecha_anulacion,
                    Usuario_anulacion: Usuario_anulacion,
                    Observaciones_anulacion: Observaciones_anulacion,
                    Entregable: Entregable,
                    Ruta_soporte: req.file.path
                };
                console.log(newsoporte);
                yield database_1.default.query('insert into  soportes set ?', [newsoporte]);
                console.log(req.body);
                res.json({ message: 'Datos guardado con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.soportesControllers = new SoportesControllers();
