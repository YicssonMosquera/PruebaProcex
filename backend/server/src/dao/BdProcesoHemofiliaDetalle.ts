import { Request, Response, json, request } from 'express'
import pool from '../database'
import { Hemofiliaerror } from '../models/hemofiliaerror';

class BDProcesohemofiliaDetalle{ 
    public static  guardar(newDatos) {
        try {
            pool.query('insert into bd_proceso_hemofilia_detalle set ?', [newDatos])
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

}


export default BDProcesohemofiliaDetalle;