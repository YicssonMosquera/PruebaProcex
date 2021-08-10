"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LogsErroresCancer {
    LogsErroresFrm(CAMPO_6) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select A.NUMERO_CAMPO, A.TIPO_ERROR, A.DESCRIPCION_ERROR ";
                query += "from  bd_proceso_cancer_error_frm A, cuenta_cancer C  ";
                query += "where C.ID_CUENTA_CANCER = A.ID_CUENTA_CANCER and A.VIGENTE = 'S' and C.CAMPO_6 =w ? ";
                database_1.default.query(query, [CAMPO_6], function (err, result, fields) {
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
exports.default = LogsErroresCancer;
