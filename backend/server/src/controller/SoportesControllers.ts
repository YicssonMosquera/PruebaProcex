import { Request, Response, json, request } from 'express'
import pool from '../database'
import path from 'path'
import fs from 'fs-extra'

class SoportesControllers{
    
  
    public async  GuardarSoporte(req: Request, res: Response){
        try {

            const { Nombre_Archivo, Usuariocargue, Anulado, Fecha_anulacion, Usuario_anulacion,Observaciones_anulacion, Entregable } = req.body;
            const newsoporte = {
                Nombre_Archivo: Nombre_Archivo,
                Usuariocargue: Usuariocargue,
                Anulado:Anulado,
                Fecha_anulacion:Fecha_anulacion,
                Usuario_anulacion:Usuario_anulacion,
                Observaciones_anulacion:Observaciones_anulacion,
                Entregable:Entregable,
                Ruta_soporte: req.file.path
            };
            console.log(newsoporte);
            await pool.query('insert into  soportes set ?', [newsoporte])
            console.log(req.body)
            res.json({ message: 'Datos guardado con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
   
    }
}

export const  soportesControllers = new SoportesControllers();