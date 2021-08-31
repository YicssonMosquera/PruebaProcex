import { Request, Response, json, request } from 'express'
import pool from '../database'


class DBParametroAplicacion{ 
    public static actualizar(body,cb) {
        try {
             pool.query('update bd_parametro_aplicacion set ? where ID_PARAMETRO_APLICACION = 558 ', [body], function(err, result, fields) {
                if (err) throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizarCancer(body,cb) {
        try {
             pool.query('update bd_parametro_aplicacion set ? where ID_PARAMETRO_APLICACION = 560 ', [body], function(err, result, fields) {
                if (err) throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }


    public static buscarPorId(cb) {
        try {
            pool.query('select * from bd_parametro_aplicacion where ID_PARAMETRO_APLICACION = 558 ',function(err, result, fields) {
                if (err) throw err;
                cb(result);
               
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static buscarCancerPorId(cb) {
        try {
            pool.query('select * from bd_parametro_aplicacion where ID_PARAMETRO_APLICACION = 560 ',function(err, result, fields) {
                if (err) throw err;
                cb(result);
               
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static fechaCorte() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select VALOR_PARAMETRO from bd_parametro_aplicacion where ID_PARAMETRO_APLICACION = 559 ";
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


export default  DBParametroAplicacion