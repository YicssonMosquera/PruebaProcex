import { Request, Response, json, request } from 'express'
import pool from '../database'


class DBProcesohemofilia{ 
    public static  guardar(body,cb) {
        try {
             pool.query('insert into bd_proceso_hemofilia set ?', body, function(err, result, fields) {
                if (err) throw err;
                cb(result);
             
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizar(body,ID_PROCESO_HEMOFILIA,cb) {
        try {
             pool.query('update bd_proceso_hemofilia set ? where ID_PROCESO_HEMOFILIA = ? ', [body,ID_PROCESO_HEMOFILIA], function(err, result, fields) {
                if (err) throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }


    public static buscarPorId(id,cb) {
        try {
            pool.query('select * from bd_proceso_hemofilia where ID_PROCESO_HEMOFILIA = ? ', [id], function(err, result, fields) {
                if (err) throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }


}


export default DBProcesohemofilia;