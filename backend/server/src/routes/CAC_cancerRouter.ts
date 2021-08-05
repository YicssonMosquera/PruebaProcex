import { Router } from 'express';
import {cac_cancerControllers} from '../controller/CAC_cancerControllers';

class CAC_cancerRouter{
    public   router:Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
       this.router.post('/',cac_cancerControllers.guardarDatos);
    }




}

const cac_cancerRouter = new CAC_cancerRouter()
export default cac_cancerRouter.router