"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LogsHerrores {
    cargarHerroresTipoB(NUMERO_RADICACION) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select bd_proceso_hemofilia.NUMERO_RADICACION as 'Numero radicacion', bd_proceso_hemofilia.NOMBRE_ARCHIVO as 'Nombre archivo', ";
                query += "bd_proceso_hemofilia.FECHA_CREACION as 'Fecha procesado',bd_proceso_hemofilia.REGISTROS_PROCESADOS as 'Registros procesados', ";
                query += "bd_proceso_hemofilia.ERRORES_CD as 'Cantidad errores', bd_proceso_hemofilia.USUARIO_CREACION as 'Usuario', ";
                query += "bd_proceso_hemofilia_error.NUMERO_REGISTRO as 'fila del error', bd_proceso_hemofilia_error.DESCRIPCION_ERROR as 'Descripcion' ";
                query += "from bd_proceso_hemofilia,bd_proceso_hemofilia_error where bd_proceso_hemofilia.ID_PROCESO_HEMOFILIA = bd_proceso_hemofilia_error.ID_PROCESO_HEMOFILIA ";
                query += "and bd_proceso_hemofilia_error.TIPO_ERROR = 'B' and bd_proceso_hemofilia.NUMERO_RADICACION = ? ";
                database_1.default.query(query, [NUMERO_RADICACION], function (err, result, fields) {
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
    cargarHerroresTipoA(NUMERO_RADICACION) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select bd_proceso_hemofilia.NUMERO_RADICACION as 'Numero radicacion', bd_proceso_hemofilia.NOMBRE_ARCHIVO as 'Nombre archivo', ";
                query += "bd_proceso_hemofilia.FECHA_CREACION as 'Fecha procesado',bd_proceso_hemofilia.REGISTROS_PROCESADOS as 'Registros procesados', ";
                query += "bd_proceso_hemofilia.ERRORES_CD as 'Cantidad errores', bd_proceso_hemofilia.USUARIO_CREACION as 'Usuario', ";
                query += "bd_proceso_hemofilia_error.NUMERO_REGISTRO as 'fila del error', bd_proceso_hemofilia_error.NUMERO_CAMPO as 'Campo del error', bd_proceso_hemofilia_error.DESCRIPCION_ERROR as 'Descripcion' ";
                query += "from bd_proceso_hemofilia,bd_proceso_hemofilia_error where bd_proceso_hemofilia.ID_PROCESO_HEMOFILIA = bd_proceso_hemofilia_error.ID_PROCESO_HEMOFILIA ";
                query += "and bd_proceso_hemofilia_error.TIPO_ERROR = 'CE' and bd_proceso_hemofilia.NUMERO_RADICACION = ? ";
                database_1.default.query(query, [NUMERO_RADICACION], function (err, result, fields) {
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
    cargarHerroresLogsExcel(NUMERO_RADICACION) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select bd_proceso_hemofilia.NUMERO_RADICACION as 'Numero_radicacion', bd_proceso_hemofilia.NOMBRE_ARCHIVO as 'Nombre_archivo', ";
                query += "bd_proceso_hemofilia.FECHA_CREACION as 'Fecha_procesado',bd_proceso_hemofilia.REGISTROS_PROCESADOS as 'Registros_procesados', ";
                query += "bd_proceso_hemofilia.ERRORES_CD as 'Cantidad_errores', bd_proceso_hemofilia.USUARIO_CREACION as 'Usuario', bd_proceso_hemofilia_error.NUMERO_CAMPO as 'Numero_campo', ";
                query += "bd_proceso_hemofilia_error.NUMERO_REGISTRO as 'fila_del_error', bd_proceso_hemofilia_error.TIPO_ERROR as 'Tipo_error', bd_proceso_hemofilia_error.DESCRIPCION_ERROR as 'Descripcion' ";
                query += "from bd_proceso_hemofilia,bd_proceso_hemofilia_error where bd_proceso_hemofilia.ID_PROCESO_HEMOFILIA = bd_proceso_hemofilia_error.ID_PROCESO_HEMOFILIA ";
                query += "and bd_proceso_hemofilia.NUMERO_RADICACION = ? ";
                database_1.default.query(query, [NUMERO_RADICACION], function (err, result, fields) {
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
exports.default = LogsHerrores;
