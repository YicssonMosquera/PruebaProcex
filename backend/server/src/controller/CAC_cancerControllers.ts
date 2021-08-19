import { Request, Response } from "express";
import CAC_cancer from '../dao/CAC_cancer';
import pool from "../database";

class CAC_cancerControllers {

    public async guardarDatos(req: Request, res: Response) {
        var datos = await CAC_cancer.guardarDatos(req.body)
        res.json(datos);
    }

   
    public async getNumeroRegistro(req: Request, res: Response) {
        var datos = await CAC_cancer.getNumeroRegistro()
        res.json(datos);
    }

    public async CargarRegistroCancer(req: Request, res: Response) {
        const { Tipodocumento, numerodocumeto, page, row } = req.body
        const pagina = row * page
        var datos = await CAC_cancer.CargarRegistroCancer(Tipodocumento, numerodocumeto, pagina, row)
        res.json(datos);
    }

    public async Actualizarcancer(req: Request, res: Response) {
        const { Campo_6 } = req.params
        try {
          const obCancer = new CAC_cancer()
            var datos = await obCancer.Actualizarcancer(req.body, Campo_6)
            res.json({ message: 'Datos guardado con exito' });
        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        }
    }

    public async CargarIdentificacion(req: Request, res: Response) {
        const { Campo_6 } = req.params
        var datos = await CAC_cancer.CargarIdentificacion(Campo_6)
        res.json(datos);
    }

    public async buscarAfiliado(req: Request, res: Response) {
        const { Campo_6, Campo_5 } = req.body
        var datos = await CAC_cancer.consultaAfiliado(Campo_6, Campo_5)
        res.json(datos);
    }

    public async buscarCAC(req: Request, res: Response) {
        const { Campo_6, Campo_5 } = req.body
        var datos = await CAC_cancer.consultarCAC(Campo_6, Campo_5)
        res.json(datos);
    }

}

export const cac_cancerControllers = new CAC_cancerControllers();
