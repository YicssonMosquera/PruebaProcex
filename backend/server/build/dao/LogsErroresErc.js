"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LogsErroresErc {
    LogsErroresFrm(CAMPO_6) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select E.NUMERO_CAMPO, E.TIPO_ERROR, E.DESCRIPCION_ERROR ";
                query += "from bd_proceso_erc_error_frm E, cuenta_erc C  ";
                query += "where C.ID_CUENTA_ERC = E.ID_CUENTA_ERC and E.VIGENTE = 'S' and C.CAMPO_6 = ? ";
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
exports.default = LogsErroresErc;
