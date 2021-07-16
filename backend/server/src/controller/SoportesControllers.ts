import { Request, Response, json, request } from 'express'
import pool from '../database'
import path from 'path'
import fs from 'fs-extra'

class SoportesControllers{
    
   
    public async  GuardarSoporte(req: Request, res: Response){
        try {

            const { Nombre_Archivo, Usuariocargue, Anulado, Fecha_anulacion, Usuario_anulacion,Observaciones_anulacion, Entregable,Documento_hemofilia,Tipo_archivo } = req.body;
            const newsoporte = {
                Nombre_Archivo: Nombre_Archivo,
                Usuariocargue: Usuariocargue,
                Anulado:Anulado,
                Fecha_anulacion:Fecha_anulacion,
                Usuario_anulacion:Usuario_anulacion,
                Observaciones_anulacion:Observaciones_anulacion,
                Entregable:Entregable,
                Documento_hemofilia:Documento_hemofilia,
                Tipo_archivo:Tipo_archivo,
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

    public async Cargarsoporteporusuario(req: Request, res: Response) {
        const {Documento_hemofilia,nombreArchivo,tipoArchivo,Anulado, page, row } = req.body
        try {
            const Clientes = await pool.query("select * from soportes where Documento_hemofilia = ? and  Nombre_Archivo LIKE '%"+nombreArchivo+"%' and Tipo_archivo LIKE '%"+ tipoArchivo +"%'  and Anulado LIKE '%"+Anulado+"%'  order by Fecha_cargue desc limit ?,?" ,[Documento_hemofilia, page, row ] , function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async getNumeroRegistro(req: Request, res: Response) {
        const {Documento_hemofilia} = req.params;
        try {
            const Clientes = await pool.query("select count(0) as numero_registro from soportes where Documento_hemofilia = ? ",[Documento_hemofilia], function (err, result, fields) {
                if (err) throw err;
                res.json(result[0].numero_registro);
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

}

export const  soportesControllers = new SoportesControllers();