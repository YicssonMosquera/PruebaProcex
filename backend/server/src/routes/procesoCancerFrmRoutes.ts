import {Router} from 'express'
import {procesoCancerFrmConrollers} from '../controller/ProcesoCancerFrmConrollers';



class ProcesoCancerFrmRoutes{
    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
        this.router.post('/validar',procesoCancerFrmConrollers.guardarCancerFrm)
         this.router.put('/validar/:Campo_6',procesoCancerFrmConrollers.guardarCancerUpdate)
    }
}    

const procesoCancerFrmRoutes =  new ProcesoCancerFrmRoutes()
export default procesoCancerFrmRoutes.router