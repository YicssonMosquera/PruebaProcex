import { Request, Response, json, request } from 'express'
import pool from '../database'


class DBProcesohemofilia {
    public static guardar(body, cb) {
        try {
            pool.query('insert into bd_proceso_hemofilia set ?', body, function (err, result, fields) {
                if (err) throw err;
                cb(result);

            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizar(body, ID_PROCESO_HEMOFILIA, cb) {
        try {
            pool.query('update bd_proceso_hemofilia set ? where ID_PROCESO_HEMOFILIA = ? ', [body, ID_PROCESO_HEMOFILIA], function (err, result, fields) {
                if (err) throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }


    public static buscarPorId(id, cb) {
        try {
            pool.query('select * from bd_proceso_hemofilia where ID_PROCESO_HEMOFILIA = ? ', [id], function (err, result, fields) {
                if (err) throw err;
                cb(result);

            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public consultarCargue(page, row) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select P.NUMERO_RADICACION, P.NOMBRE_ARCHIVO, P.FECHA_CREACION, P.REGISTROS_PROCESADOS, P.REGISTROS_VALIDOS, P.ERRORES_CA, P.ERRORES_CE, P.ERRORES_CD, ";
                query += "CASE WHEN P.ESTADO_PROCESO = 1 then 'En proceso' WHEN P.ESTADO_PROCESO = 2 then 'Exitoso'  WHEN P.ESTADO_PROCESO = 3 then 'Rechazado'  WHEN P.ESTADO_PROCESO = 4 then 'Con errores' end as Estado, ";
                query += "(P.REGISTROS_VALIDOS * 100) / P.REGISTROS_PROCESADOS AS Porcentaje, ";
                query += "P.VIGENTE, P.TIPO_USUARIO, P.USUARIO_CREACION as Login from bd_proceso_hemofilia P limit ?,? "
                pool.query(query, [page, row], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select count(0) as numero_registro from bd_proceso_hemofilia ";
                pool.query(query, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    



}


export default DBProcesohemofilia;