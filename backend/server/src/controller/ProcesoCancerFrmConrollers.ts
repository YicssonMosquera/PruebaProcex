import { Request, Response  } from 'express'
import LogicaCACCancer from '../logica/LogicaCACCancerFrm';
import LogicaCACCancerUpdate from '../logica/LogicaCACCancerUpdate'

class ProcesoCancerFrmConrollers {
   
    guardarCancerFrm(req: Request, res: Response){
        LogicaCACCancer.cargarCACCancer(req.body)
        res.json('valido')
    }

    guardarCancerUpdate(req: Request, res: Response){
        const { Campo_6 } = req.params;
        LogicaCACCancerUpdate.cargarCancer(req.body, Campo_6)
        res.json('valido')
    }
}

export const procesoCancerFrmConrollers = new ProcesoCancerFrmConrollers();