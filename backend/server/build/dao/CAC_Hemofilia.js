"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CAC_Hemofilia {
    static Guardarhemofilia(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('insert into Cuenta_hemofilia set ?', newDatos, function (err, result, fields) {
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
    Actualizarhemofilia(newDatos, Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query('UPDATE Cuenta_hemofilia set ? where Cuenta_hemofilia.CAMPO_6 = ?', [newDatos, Campo_6], function (err, result, fields) {
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
    getOne(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                database_1.default.query("select ID_CUENTA_HEMOFILIA from Cuenta_hemofilia where Cuenta_hemofilia.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    resolev(result[0].ID_CUENTA_HEMOFILIA);
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
}
exports.default = CAC_Hemofilia;
