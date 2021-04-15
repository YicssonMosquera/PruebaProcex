import { Request, Response, json, request } from 'express'
import pool from '../database'

class Agregar4505controllers{
 

    public async Guardar4505(req: Request, res: Response) {
        try {
            await pool.query('insert into  res4505 set ?', [req.body])
            console.log(req.body)
            res.json({ message: 'Datos guardado con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };


    }

    public async prueba(req: Request, res: Response) {
        try {
            await pool.query('insert into tbldatosexcel set ?', [req.body])
            console.log(req.body)
            res.json({ message: 'Datos guardado con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };


    }
    
    
    public async cargar4505(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query('SELECT * FROM tbldatosexcel', function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

}
export const  agregar4505controllers = new Agregar4505controllers();