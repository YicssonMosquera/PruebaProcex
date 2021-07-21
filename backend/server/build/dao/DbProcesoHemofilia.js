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
    static actualizar(body, ID_PROCESO_HEMOFILIA, cb) {
        try {
            database_1.default.query('update bd_proceso_hemofilia set ? where ID_PROCESO_HEMOFILIA = ? ', [body, ID_PROCESO_HEMOFILIA], function (err, result, fields) {
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
            database_1.default.query('select * from bd_proceso_hemofilia where ID_PROCESO_HEMOFILIA = ? ', [id], function (err, result, fields) {
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
    consultarCargue(page, row, radicado, nombreArchivo, vigente, estado) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select P.NUMERO_RADICACION, P.NOMBRE_ARCHIVO, P.FECHA_CREACION, P.REGISTROS_PROCESADOS, P.REGISTROS_VALIDOS, P.ERRORES_CA, P.ERRORES_CE, P.ERRORES_CD, ";
                query += "CASE WHEN P.ESTADO_PROCESO = 1 then 'En proceso' WHEN P.ESTADO_PROCESO = 2 then 'Exitoso'  WHEN P.ESTADO_PROCESO = 3 then 'Rechazado'  WHEN P.ESTADO_PROCESO = 4 then 'Con errores' end as Estado, ";
                query += "(P.REGISTROS_VALIDOS * 100) / P.REGISTROS_PROCESADOS AS Porcentaje, ";
                query += "P.VIGENTE, P.TIPO_USUARIO, P.USUARIO_CREACION as Login, P.RUTA_ARCHIVO from bd_proceso_hemofilia P where  P.NUMERO_RADICACION  LIKE '%" + radicado + "%' and P.NOMBRE_ARCHIVO LIKE '%" + nombreArchivo + "%'  and P.VIGENTE LIKE '%" + vigente + "%'  and P.ESTADO_PROCESO LIKE '%" + estado + "%' order by P.NUMERO_RADICACION desc limit ?,? ";
                database_1.default.query(query, [page, row], function (err, result, fields) {
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
    getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select count(0) as numero_registro from bd_proceso_hemofilia ";
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
    getNombreArchivo() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select NOMBRE_ARCHIVO, USUARIO_CREACION  from bd_proceso_hemofilia where VIGENTE = 'S' ";
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
    getVigente(userName, nameFile) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_HEMOFILIA, NOMBRE_ARCHIVO, USUARIO_CREACION  from bd_proceso_hemofilia where VIGENTE = 'S' and NOMBRE_ARCHIVO = ? and USUARIO_CREACION = ?";
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
    static actualizarEstado(Estado, ID_PROCESO_HEMOFILIA) {
        try {
            database_1.default.query('update bd_proceso_hemofilia set VIGENTE = ? where ID_PROCESO_HEMOFILIA = ? ', [Estado, ID_PROCESO_HEMOFILIA], function (err, result, fields) {
                if (err)
                    throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
        ;
    }
    consultarUltimoArchivoCargado(ID_PROCESO_HEMOFILIA) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select * from bd_proceso_hemofilia where ID_PROCESO_HEMOFILIA = ? ";
                database_1.default.query(query, [ID_PROCESO_HEMOFILIA], function (err, result, fields) {
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
exports.default = DBProcesohemofilia;
