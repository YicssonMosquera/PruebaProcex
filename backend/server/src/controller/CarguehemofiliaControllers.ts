import { Request, Response, json, request } from 'express'
import LogicaDBProcesohemofilia from '../logica/LogicaDbProcesoHemofilia';


class Carguehemofiliacontrollers {
    public guardarHemofilia(req: Request, res: Response) {
        LogicaDBProcesohemofilia.guardar(req.body); 
        res.json({ message: 'Datos guardado con exito' });
    }

    public guardarHemofiliaFile(req: Request, res: Response) {
        console.log(req.body);
        console.log("------------------------------------------------------");
        console.log(req.file);
    }

}

export const carguehemofiliacontrollers = new Carguehemofiliacontrollers();