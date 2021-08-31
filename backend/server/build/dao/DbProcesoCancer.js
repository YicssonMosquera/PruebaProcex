"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DbProcesoCancer {
    static guardar(body, cb) {
        try {
            database_1.default.query('insert into bd_proceso_cancer set ?', body, function (err, result, fields) {
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
    static buscarPorId(id, cb) {
        try {
            database_1.default.query('select * from bd_proceso_cancer where ID_PROCESO_CANCER = ? ', [id], function (err, result, fields) {
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
    static actualizar(body, ID_PROCESO_CANCER, cb) {
        try {
            database_1.default.query('update bd_proceso_cancer set ? where ID_PROCESO_CANCER = ? ', [body, ID_PROCESO_CANCER], function (err, result, fields) {
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
    getVigente(userName, nameFile) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_CANCER, NOMBRE_ARCHIVO, USUARIO_CREACION  from bd_proceso_cancer where VIGENTE = 'S' and NOMBRE_ARCHIVO = ? and USUARIO_CREACION = ?";
                database_1.default.query(query, [userName, nameFile], function (err, result, fields) {
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
    consultarUltimoArchivoCargado(ID_PROCESO_CANCER) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select * from bd_proceso_cancer where ID_PROCESO_CANCER = ? ";
                database_1.default.query(query, [ID_PROCESO_CANCER], function (err, result, fields) {
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
    static actualizarEstado(Estado, ID_PROCESO_CANCER) {
        try {
            database_1.default.query('update bd_proceso_cancer set VIGENTE = ? where ID_PROCESO_CANCER = ? ', [Estado, ID_PROCESO_CANCER], function (err, result, fields) {
                if (err)
                    throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
    getNombreArchivo() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select NOMBRE_ARCHIVO, USUARIO_CREACION  from bd_proceso_cancer where VIGENTE = 'S' ";
                database_1.default.query(query, function (err, result, fields) {
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
exports.default = DbProcesoCancer;
