"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DBProcesohemofilia {
    static guardar(body, cb) {
        try {
            database_1.default.query('insert into bd_proceso_hemofilia set ?', body, function (err, result, fields) {
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
exports.default = DBProcesohemofilia;
