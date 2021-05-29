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


}


export default  DBParametroAplicacion