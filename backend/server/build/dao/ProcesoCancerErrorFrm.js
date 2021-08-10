"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProcesoCancerErrorFrm {
    static guardar(cancerError) {
        try {
            database_1.default.query('insert into bd_proceso_cancer_error_frm set ?', cancerError, function (err, result, fields) {
                if (err)
                    throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
    static actualizarEstado(Estado, ID_PROCESO_CANCER_ERROR) {
        try {
            database_1.default.query('update bd_proceso_cancer_error_frm set VIGENTE = ? where ID_PROCESO_CANCER_ERROR = ? ', [Estado, ID_PROCESO_CANCER_ERROR], function (err, result, fields) {
                if (err)
                    throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
    getVigente(userName, ID_PROCESO_CANCER_ERROR) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_CANCER_ERROR, ID_CUENTA_CANCER, USUARIO_CREACION  from bd_proceso_cancer_error_frm where VIGENTE = 'S' and USUARIO_CREACION = ? and ID_CUENTA_CANCER = ? ";
                database_1.default.query(query, [userName, ID_PROCESO_CANCER_ERROR], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.default = ProcesoCancerErrorFrm;
