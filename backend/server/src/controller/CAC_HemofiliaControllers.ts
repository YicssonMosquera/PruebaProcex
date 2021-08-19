import { Request, Response, json } from 'express'
import CAC_Hemofilia from '../dao/CAC_Hemofilia';

class CAC_HemofiliaControllers {
    public async Guardarhemofilia(req: Request, res: Response) {
        console.log(req.body)
        var almacenar = await CAC_Hemofilia.Guardarhemofilia(req.body)
        res.json(almacenar);
    }

    public async Actualizarhemofilia(req: Request, res: Response) {
        const { Campo_6 } = req.params;
        console.log(Campo_6)
        const oHemofilia = new CAC_Hemofilia();
        const hemofilia = await oHemofilia.Actualizarhemofilia(req.body, Campo_6);
        res.json(hemofilia)
    }
    
    public async buscarAfiliado(req: Request, res: Response) {
        const { Campo_6, Campo_5 } = req.body
        var datos = await CAC_Hemofilia.consultaAfiliado(Campo_6, Campo_5)
        res.json(datos);
    }

    public async buscarCAC(req: Request, res: Response) {
        const { Campo_6, Campo_5 } = req.body
        const oCACErc = new CAC_Hemofilia();
        var datos = await oCACErc.consultarCAC(Campo_6, Campo_5)
        res.json(datos);
      }


}


export const cac_HemofiliaControllers = new CAC_HemofiliaControllers();
