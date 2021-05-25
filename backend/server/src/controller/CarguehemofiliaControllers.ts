import { Request, Response, json, request } from 'express'
import LogicaDBProcesohemofilia from '../logica/LogicaDbProcesoHemofilia';

class Carguehemofiliacontrollers {
    public guardarHemofilia(req: Request, res: Response) {
        LogicaDBProcesohemofilia.guardar(req.body); 
    }
}

export const carguehemofiliacontrollers = new Carguehemofiliacontrollers();