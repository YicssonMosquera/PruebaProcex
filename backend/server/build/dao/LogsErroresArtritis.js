"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LogsErroresArtritis {
    LogsErroresFrm(CAMPO_9) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select A.NUMERO_CAMPO, A.TIPO_ERROR, A.DESCRIPCION_ERROR ";
                query += "from  bd_proceso_artritis_error_frm A, cuenta_artritis C  ";
                query += "where C.ID_CUENTA_ARTRITIS = A.ID_CUENTA_ARTRITIS and A.VIGENTE = 'S' and C.CAMPO_9 =? ";
                database_1.default.query(query, [CAMPO_9], function (err, result, fields) {
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
exports.default = LogsErroresArtritis;
