"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BdProcesoCancerDetalle {
    static guardar(newDatos) {
        try {
            database_1.default.query('insert into bd_proceso_cancer_detalle set ?', [newDatos]);
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
}
exports.default = BdProcesoCancerDetalle;
