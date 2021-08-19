import { Request, Response  } from 'express'
import LogicaCACErcFrm from '../logica/LogicaCACErcFrm';
import LogicaCACErcUpdate from '../logica/LogicaCACErcUpdate';

class ProcesoErcControllers {
   
    guardarErcFrm(req: Request, res: Response){
        LogicaCACErcFrm.cargarErc(req.body)
        res.json('valido')
    }

    guardarErcUpdate(req: Request, res: Response){
        const { CAMPO_6 } = req.params;
        LogicaCACErcUpdate.cargarErc(req.body, CAMPO_6)
        res.json('valido')
    }
}

export const procesoErcControllers = new ProcesoErcControllers();