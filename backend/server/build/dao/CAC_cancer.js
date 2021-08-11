"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
var moment = require('moment');
class CAC_cancer {
    static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into cuenta_cancer set ? ', newDatos, function (err, result, fields) {
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
    static getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                const Clientes = database_1.default.query("select count(0) as numero_registro from cuenta_cancer", function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron Datos' });
            }
            ;
        });
    }
    static CargarRegistroCancer(Tipodocumento, numerodocumeto, page, row) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT ID_CUENTA_CANCER, CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8 ";
                query += "from cuenta_cancer";
                query += " where CAMPO_5 LIKE '%" + Tipodocumento + "%' and CAMPO_6 LIKE '%" + numerodocumeto + "%' limit ?,? ";
                const Clientes = database_1.default.query(query, [page, row], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    Actualizarcancer(newDatos, Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('UPDATE cuenta_cancer set ? where cuenta_cancer.CAMPO_6 = ? ', [newDatos, Campo_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    static CargarIdentificacion(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select * from cuenta_cancer where cuenta_cancer.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    //cargar Id cuenta cancer
    getOne(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select ID_CUENTA_CANCER from cuenta_cancer where cuenta_cancer.CAMPO_6  = ? ", [Campo_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result[0].ID_CUENTA_CANCER);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    static consultaAfiliado(Campo_6, Campo_5) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('select * from afiliado where afiliado.NUMERO_IDENTIFICACION = ? and TIPO_DOCUMENTO = ?  ', [Campo_6, Campo_5], function (err, result, fields) {
                    if (err)
                        throw err;
                    for (let index = 0; index < result.length; index++) {
                        const element = result[index];
                        element.FECHA_NACIMIENTO = moment(new Date(element.FECHA_NACIMIENTO)).format('YYYY-MM-DD');
                        resolev(element);
                    }
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.default = CAC_cancer;
