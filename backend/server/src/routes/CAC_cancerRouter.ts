import { Router } from 'express';
import {cac_cancerControllers} from '../controller/CAC_cancerControllers';

class CAC_cancerRouter{
    public   router:Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
       this.router.post('/',cac_cancerControllers.guardarDatos);
       this.router.post('/cargarregistrocancer',cac_cancerControllers.CargarRegistroCancer);
       this.router.get('/numeroRegistro/cancer',cac_cancerControllers.getNumeroRegistro);
       this.router.put('/update/:Campo_6',cac_cancerControllers.Actualizarcancer);
       this.router.get('/:Campo_6',cac_cancerControllers.CargarIdentificacion)


    }



 
}

const cac_cancerRouter = new CAC_cancerRouter()
export default cac_cancerRouter.router