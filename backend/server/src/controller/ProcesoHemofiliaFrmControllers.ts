import { Request, Response  } from 'express'
import logicaHemofiliaFormulario from '../logica/logicaHemofiliaFormulario';
import logicaHemofiliaFormularioUpdate from '../logica/logicaHemofiliaFormularioUpdate';

class ProcesoHemofiliaFrmControllers {
   
    guardarHemofiliaFrm(req: Request, res: Response){
        logicaHemofiliaFormulario.cargarHemofiliaFrm(req.body)
        res.json('valido')
    }

    guardarHemofiliaUpdate(req: Request, res: Response){
        const { Campo_6 } = req.params;
        logicaHemofiliaFormularioUpdate.cargarHemofiliaFrm(req.body, Campo_6)
        res.json('valido')
    }
}

export const procesoHemofiliaFrmControllers = new ProcesoHemofiliaFrmControllers();