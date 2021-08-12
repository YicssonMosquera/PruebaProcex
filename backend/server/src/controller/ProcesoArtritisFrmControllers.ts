import { Request, Response  } from 'express'
import LogicaCACArtritisFrm from '../logica/LogicaCACArtritisFrm';
import LogicaCACArtritisUpdate from '../logica/LogicaCACArtritisUpdate'

class ProcesoArtritisFrmControllers {
   
    guardarArtritisFrm(req: Request, res: Response){
        LogicaCACArtritisFrm.cargarCACArtritis(req.body)
        res.json('valido')
    }

    guardarArtritisUpdate(req: Request, res: Response){
        const { CAMPO_9 } = req.params;
        LogicaCACArtritisUpdate.cargarArtritis(req.body, CAMPO_9)
        res.json('valido')
    }
}

export const procesoArtritisFrmControllers = new ProcesoArtritisFrmControllers();