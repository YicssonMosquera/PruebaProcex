import { Request, Response } from "express";
import CAC_cancer from '../dao/CAC_cancer';
import pool from "../database";

class CAC_cancerControllers {

    public async guardarDatos(req: Request, res: Response) {
        var datos = await CAC_cancer.guardarDatos(req.body)
        res.json(datos);
    }

    public async getNumeroRegistro(req: Request, res: Response) {
        try {
            const Clientes = await pool.query("select count(0) as numero_registro from cuenta_cancer", function (err, result, fields) {
                if (err) throw err;
                res.json(result[0].numero_registro);
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se obtuvieron Datos' });
        };
    }
   

    public async CargarRegistroCancer(req: Request, res: Response) {
        const { Tipodocumento, numerodocumeto, page, row } = req.body
        try {
            var query = "SELECT ID_CUENTA_CANCER, CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8 ";
            query += "from cuenta_cancer";
            query += " where CAMPO_5 LIKE '%" + Tipodocumento + "%' and CAMPO_6 LIKE '%" + numerodocumeto + "%' limit ?,? ";
            const Clientes = await pool.query(query, [page, row], function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            }); 
        } 
        catch (error) {
            res.status(404).json({ error: 'No se obtuvieron datos' });
        }; 
    }

    public async Actualizarcancer(req: Request, res: Response) {
        const { Campo_6 } = req.params
        try {
            await pool.query('UPDATE cuenta_cancer set ? where cuenta_cancer.CAMPO_6 = ? ', [req.body, Campo_6])
            console.log(req.body)
            res.json({ message: 'Datos guardado con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };


    }

    public async CargarIdentificacion(req: Request, res: Response) {
        const { Campo_6 } = req.params
        try {
            const Clientes = await pool.query("select * from cuenta_cancer where cuenta_cancer.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
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

export const cac_cancerControllers = new CAC_cancerControllers();
