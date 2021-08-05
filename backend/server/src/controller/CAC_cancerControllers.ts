import { Request, Response } from "express";
import CAC_cancer from '../dao/CAC_cancer';

class CAC_cancerControllers {

    public async guardarDatos(req: Request, res: Response) {
        var datos = await CAC_cancer.guardarDatos(req.body)
        res.json(datos);
    }

}

export const cac_cancerControllers = new CAC_cancerControllers();
