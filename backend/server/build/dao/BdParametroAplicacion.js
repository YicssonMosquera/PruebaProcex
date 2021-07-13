"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DBParametroAplicacion {
    static actualizar(body, cb) {
        try {
            database_1.default.query('update bd_parametro_aplicacion set ? where ID_PARAMETRO_APLICACION = 558 ', [body], function (err, result, fields) {
                if (err)
                    throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
    static buscarPorId(cb) {
        try {
            database_1.default.query('select * from bd_parametro_aplicacion where ID_PARAMETRO_APLICACION = 558 ', function (err, result, fields) {
                if (err)
                    throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
    static fechaCorte(cb) {
        try {
            var query = "select VALOR_PARAMETRO from bd_parametro_aplicacion where ID_PARAMETRO_APLICACION = 559 ";
            database_1.default.query(query, function (err, result, fields) {
                if (err)
                    throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
}
exports.default = DBParametroAplicacion;
