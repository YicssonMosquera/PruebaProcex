import { Request, Response, json, request } from 'express'
import pool from '../database'


class DbEstructuraArchivoCampo{ 
    public static  buscarTodos(cb) {
        try {
             pool.query("select * from bd_estructura_archivo_campo", function(err, result, fields) {
                if (err) throw err;
                cb(result);
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

}


export default DbEstructuraArchivoCampo;